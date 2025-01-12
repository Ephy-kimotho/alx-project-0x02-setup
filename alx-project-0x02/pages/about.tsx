import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

function About() {
  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />
      <h2 className="text-blue-600 text-2xl ml-4 font-bold">
        This is the about page.
      </h2>

      <Button size="small" shape="rounded-sm">
        Small
      </Button>

      <Button size="medium" shape="rounded-md">
        Medium
      </Button>

      <Button size="large" shape="rounded-full">
        Large
      </Button>
    </section>
  );
}

export default About;
