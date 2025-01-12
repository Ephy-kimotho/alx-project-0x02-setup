import Link from "next/link";

function Header() {
  return (
    <section className="bg-zinc-400 py-3 flex justify-center mb-4">
      <nav className="flex gap-2  ">
        <Link
          href="/home"
          className="bg-blue-600 py-2 px-4 rounded-md text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="bg-blue-600 py-2 px-4 rounded-md text-white"
        >
          About
        </Link>
        <Link
          href="/posts"
          className="bg-blue-600 py-2 px-4 rounded-md text-white"
        >
          Posts
        </Link>

        <Link
          href="/users"
          className="bg-blue-600 py-2 px-4 rounded-md text-white"
        >
          Users
        </Link>
      </nav>
    </section>
  );
}

export default Header;
