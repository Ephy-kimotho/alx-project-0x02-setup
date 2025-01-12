import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

function Users() {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        city: "New York",
        street: "123 Main St",
        zipcode: "10001",
      },
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: {
        city: "Los Angeles",
        street: "456 Elm St",
        zipcode: "90001",
      },
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: {
        city: "Chicago",
        street: "789 Oak St",
        zipcode: "60601",
      },
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      address: {
        city: "Houston",
        street: "101 Pine St",
        zipcode: "77001",
      },
    },
  ];

  return (
    <section className="bg-zinc-200 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </section>
  );
}

export default Users;
