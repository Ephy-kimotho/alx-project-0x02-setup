import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

function PostModal({ addCard, openModal, setOpenModal }: PostModalProps) {
  const [heading, setHeading] = useState("");
  const [context, setContext] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCard(heading, context),
      setHeading(""),
      setContext(""),
      setOpenModal(false);
  };

  return (
    <div
      className={`absolute inset-0 bg-gray-800 bg-opacity-90 grid place-items-center ${
        openModal ? "block" : "hidden"
      } z-50`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md w-4/5 max-w-xl"
      >
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="title"
            className="text-neutral-800 font-bold text-xl "
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            id="title"
            placeholder="Enter a title."
            className="py-2 pl-4 font-sans text-neutral-900 border-2 border-black rounded"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="content"
            className="text-neutral-800 font-bold text-xl "
          >
            Content:
          </label>
          <input
            type="text"
            name="content"
            id="content"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Enter content..."
            className="py-2 pl-4 font-sans text-neutral-900 border-2 border-black rounded"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-8 bg-blue-700 text-white font-bold rounded-md active:scale-95 mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostModal;
