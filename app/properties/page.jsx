import Link from "next/link";

const PropertiesPage = () => {
  return (
    <div className="flex flex-col">
      <span className="font-medium text-xl">Properties page</span>
      <Link href="/" className="text-xl m-1 visited:text-purple-600">
        Go Home
      </Link>
    </div>
  );
};

export default PropertiesPage;
