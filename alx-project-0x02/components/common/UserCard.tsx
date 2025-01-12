import { UserProps } from "@/interfaces";

function UserCard({ name, email, address }: UserProps) {
  return (
    <article className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <h3 className="text-lg font-semibold text-gray-800">{email}</h3>

      <div className="mt-4">
        <p className="text-base font-normal font-sans text-black">
          {address.city}
        </p>
        <p className="text-base font-normal font-sans text-black">
          {address.street}
        </p>
        <p className="text-base font-normal font-sans text-black">
          {address.zipcode}
        </p>
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default UserCard;
