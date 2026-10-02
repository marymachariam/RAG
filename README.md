# Detective Archive: A RAG Analyst for Illicit Drug Markets in Europe

A Retrieval-Augmented Generation (RAG) pipeline built in a single Jupyter notebook. It answers questions about illicit drug markets in Europe, including the role of online and darknet marketplaces, **using only a set of official EUDA reports** and citing the exact file and page for every claim.

The assistant is themed as **"Detective Archive"**, a noir case analyst. When the archive has no answer, it says: *"That file isn't in the archive."*

> **Disclaimer:** This project is for research and education only. It summarises published reports and is not legal, medical or law-enforcement advice. It does not provide instructions for any illegal activity.

---

## Why RAG?

A language model on its own answers from memory, so it can invent facts and cannot show where an answer came from. RAG fixes this: before answering, the system retrieves the most relevant passages from a trusted document set and instructs the model to answer **only** from them, with citations.

---

## Project at a glance

| Item | Choice |
|---|---|
| Topic | How illicit drug markets in Europe operate, including the role of online and darknet marketplaces |
| Source | European Union Drugs Agency (EUDA), euda.europa.eu, public publications (manually downloaded) |
| Licence | EUDA Copyright and reuse notice: reuse allowed with attribution to EUDA, compatible with CC BY 4.0 |
| Documents | 10 PDFs, 345 pages, about 146,000 words |
| Chunks | 1,341 (about 1,000 characters each, with overlap) |
| Embedding model | `all-MiniLM-L6-v2` (ONNX, served through ChromaDB), 384 dimensions, 256-token limit, runs locally |
| Vector database | ChromaDB (local, open source, persisted to disk, cosine distance) |
| LLM | `openai/gpt-oss-120b` through Groq's API, temperature 0.1 |

---

## Pipeline

```
PDFs → Clean → Chunk + metadata → Embed → ChromaDB (on disk)
                                                  │
 Question → Embed → Retrieve top-k chunks ────────┘
                         │
              Relevance threshold check
                         │
           Prompt + chunks → LLM → Cited answer + Sources Used
```

| Task | What it does | Main tools |
|---|---|---|
| 0. Topic and source | Defines the topic, users, example questions and one out-of-scope question | Markdown |
| 1. Collect and log | Stores PDFs in `data/raw`, prints dataset statistics, builds a collection log (filename, URL, date, type, size, licence) | `os`, `pandas`, `pymupdf` |
| 2. Clean | Five techniques: Unicode normalisation, hyphenation repair, header/footer removal, whitespace fix, duplicate-paragraph removal | `re`, `unicodedata`, `collections` |
| 3. Extract, chunk, metadata | Extracts text page by page, compares two chunking strategies (recursive character vs sentence-based), attaches `filename`, `chunk_id`, `page_number`, `source_url` | `pymupdf`, `statistics` |
| 4. Embed | Converts each chunk to a 384-number vector, checks the token limit, demonstrates cosine similarity | `chromadb`, `numpy`, `tokenizers` |
| 5. Store and retrieve | Saves vectors to disk, reloads them without re-embedding, provides `retrieve(query, k)` with scores | `chromadb` |
| 6. LLM and prompting | Naive Prompt v1 vs a final prompt using 8 techniques (role, task and constraints, delimiters, grounding and abstention, few-shot examples, citation format, conflict handling, injection defence) | `openai` client, `python-dotenv` |
| 7. Interface and guardrails | Interactive chat loop, relevance threshold, error handling, disclaimer, "Case File Sources" list | plain Python |
| 8. Evaluation | 10 test questions (6 single-document, 2 synthesis, 2 out-of-scope), evaluation table and reflection | `pandas` |

---

## Key results

- **Retrieval works:** a vector similarity demo gave a cosine similarity of 0.733 for two chunks on the same topic from different documents and -0.054 for an unrelated chunk.
- **Prompt v1 vs v2:** the naive prompt produced long uncited answers and answered an out-of-scope question (tobacco taxation) from general knowledge. The final prompt cited `[filename, p.X]` for each claim and refused the out-of-scope question.
- **Persistence:** the vector database is saved in `chroma_db/` and reloaded without re-embedding.

Full evaluation results (the 10-question table and the written reflection) are in the notebook, under **Task 8**.

---

## How to run

### 1. Clone and create an environment

```bash
git clone <your-repo-url>
cd <your-repo-folder>
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
```

### 2. Install dependencies

```bash
pip install jupyter pandas requests beautifulsoup4 pymupdf chromadb openai python-dotenv numpy tokenizers
```

### 3. Add your Groq API key

Create a file named `.env` next to the notebook with one line:

```
GROQ_API_KEY=your_key_here
```

Get a free key at [console.groq.com](https://console.groq.com). **Never commit `.env`.** It is listed in `.gitignore`.

### 4. Add the documents

Place the PDFs in `data/raw/`. The original files are public EUDA reports (see [Data](#data)). Add each file's URL to the `SOURCE_URLS` dictionary in the Task 1 log cell.

### 5. Run the notebook

Open the notebook and use **Kernel > Restart & Run All**. The first run builds the vector database in `chroma_db/` (the embedding model, about 80 MB, is downloaded once). Later runs reload the database from disk.

The last cell of Task 7 starts an interactive chat. Type `exit` to close it.

---

## Repository structure

```
.
├── Macharia_Mary_RAG_Assignment.ipynb   # the full pipeline
├── data/
│   ├── raw/                  # original PDFs
│   ├── clean/                # cleaned text (generated)
│   ├── collection_log.csv    # filename, URL, date, type, size, licence (generated)
│   └── evaluation_table.csv  # Task 8 results (generated)
├── chroma_db/                # persisted vector database (generated)
├── .env                      # your API key (NOT committed)
├── .gitignore
└── README.md
```

Suggested `.gitignore`:

```
.env
.ipynb_checkpoints/
.venv/
__pycache__/
```

---

## Data

All documents come from the **European Union Drugs Agency (EUDA)** website (https://www.euda.europa.eu), including publications in the EU Drug Markets series and the European Drug Report.

- **Licence and reuse:** EUDA's [Copyright and reuse notice](https://www.euda.europa.eu/about/legal-notice_en) allows documents to be reproduced, adapted and distributed in any format, provided EUDA is acknowledged as the original source. The policy is compatible with CC BY 4.0. These permissions do not cover content supplied by third parties.
- **Collection method:** the site blocks automated scripts, so the PDFs were downloaded manually through a browser, only from normal publication pages. Each file's source URL is recorded in the collection log.
- **Compliance with robots.txt:** the site's `robots.txt` disallows `/search/`, URLs with query strings and auto-generated `/node/*/pdf` pages, and sets a 10-second crawl delay. No crawler was used.
- **Attribution:** all source material is credited to the EUDA (and Europol where a report is a joint publication).

---

## Limitations

- The archive contains only 10 reports, so many questions cannot be answered.
- Retrieval can still return loosely related chunks. The relevance threshold and the prompt's abstention rule act as two layers of protection.
- The free LLM API has rate limits, so long evaluation runs include short pauses.
- Answers are only as accurate as the source reports, which are mostly from 2017 to 2026 and cover the European context.
- The model sometimes exceeds the 150-word length limit set in the prompt.

---

## Author

Mary Macharia.