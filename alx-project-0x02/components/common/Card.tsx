import { CardProps } from "@/interfaces";

function Card({ title, content }: CardProps) {
  return (
    <div className="bg-gray-300 p-3 rounded-md max-w-lg">
      <h2 className="font-sans text-black opacity-90 my-1 text-xl">{title}</h2>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}

export default Card;
