import Header from "@/components/layout/Header";

function Home() {
  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />
      <h2 className="text-orange-600 font-bold text-2xl ml-4">
        This is the home page
      </h2>
    </section>
  );
}

export default Home;
