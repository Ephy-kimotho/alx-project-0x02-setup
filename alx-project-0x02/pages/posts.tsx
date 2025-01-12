import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

function Posts() {
  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4">
        <PostCard
          title="sunt aut facere repellat providen."
          content="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          userId={2}
        />
        <PostCard
          title="sunt aut facere repellat providen."
          content="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          userId={12}
        />
        <PostCard
          title="sunt aut facere repellat providen."
          content="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          userId={4}
        />
        <PostCard
          title="sunt aut facere repellat providen."
          content="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          userId={15}
        />
      </div>
    </section>
  );
}

export default Posts;
