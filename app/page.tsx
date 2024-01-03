import CrawlMain from "@/components/crawl-main";
import GotoDatabase from "@/components/goto-database";
export default async function Home() {
  return (
    <div className=" w-[100vw] h-[100vh] px-40 relative flex items-center justify-center">
      <CrawlMain />

      <GotoDatabase />
    </div>
  );
}
