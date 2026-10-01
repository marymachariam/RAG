import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AmbassadorPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="font-display font-semibold text-3xl text-navy mb-6">
          Become a GYIC Nigeria Ambassador
        </h1>

        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appb5IZyBIqg0QFpl/pag2FHpJJMuqpbfU2/form"
          frameBorder={0}
          width="100%"
          height={533}
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </main>
      <Footer />
    </>
  );
}