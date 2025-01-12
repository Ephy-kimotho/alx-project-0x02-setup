import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";
import { CardProps } from "@/interfaces";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [values, setValues] = useState<CardProps[]>([]);

  const showModal = () => setOpenModal(!openModal);

  const addCard = (title: string, content: string) => {
    setValues((prevState) => [...prevState, { title, content }]);
  };

  return (
    <section className="bg-zinc-200 min-h-screen relative">
      <Header />
      <div className="my-4 text-right pr-6">
        <button
          onClick={showModal}
          className="py-3 px-8 rounded-md bg-blue-600 text-white font-bold"
        >
          Add Card
        </button>
      </div>
      <PostModal
        addCard={addCard}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
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

        {values?.map((item) => (
          <Card title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}

export default Home;
