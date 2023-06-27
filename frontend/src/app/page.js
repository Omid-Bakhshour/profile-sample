import Result from "@/components/Result";
import Search from "@/components/Search";

export const metadata = {
  title: "profile list",
  description: "get profile list",
};

export default function Home() {
  return (
    <main className="block min-h-screen ">
      <div className="w-full flex flex-col gap-4 max-w-[1366px] mx-auto px-4 py-6 ">
        <h1 className="header_title">Profile lists</h1>
        <Search />
        <Result />
      </div>
    </main>
  );
}
