import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div
        className="h-[80vh] w-full
      flex flex-col items-center justify-center gap-5"
      >
        <h1> D3 Catalog</h1>
        <h1> Hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + " photo"} />
        <button
          className="px-4 py-2 bg-gray-500 text-zinc-100 font-medium rounded-lg"
          onClick={signOut}
        >
          sign out
        </button>
        <Link href={"/home"}>
          <button className="px-4 py-2 bg-white text-zinc-900 font-medium rounded-lg border-2 border-zinc-600">
            Got to home page
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-rose-500 text-zinc-100 font-medium rounded-lg"
      >
        Sign in with gooogle
      </button>
    </div>
  );
}
