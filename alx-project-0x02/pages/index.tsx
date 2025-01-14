import Header from "@/components/layout/Header";

function Home() {
  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />
      <h2 className="text-teal-600 text-2xl font-bold ml-4">
        Welcome to my Next JS app.
      </h2>
    </section>
  );
}

export default Home;
