import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

function Home() {
  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4">
        <Card
          title="HTML"
          content="HTML is the markup language of the web that is responsible fot the structure of the web."
        />
        <Card
          title="Javascript"
          content="Javascript is a very easy web scripting language"
        />

        <Card
          title="React"
          content="React is a JS web framework that makes developing User interfaces quick and easy"
        />
      </div>
    </section>
  );
}

export default Home;
