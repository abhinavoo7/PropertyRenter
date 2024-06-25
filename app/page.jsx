import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <span className="font-medium text-3xl">Welcome</span>
      <Link href="/properties" className="text-xl m-1 visited:text-purple-600">
        Show Properties
      </Link>
    </div>
  );
};

export default HomePage;
