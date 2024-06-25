"use client";

import {
  useParams,
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name");
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex flex-col m-5 justify-around">
      <span className="font-medium text-xl">Property page</span>
      <span className="text-lg">Property id: {id}</span>
      <span className="text-lg">Property name: {name}</span>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36"
      >
        Go home {pathName}
      </button>
    </div>
  );
};

export default PropertyPage;
