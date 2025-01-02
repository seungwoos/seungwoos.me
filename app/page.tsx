import { getLandingPage } from "lib/notion";
import ClientNotionRenderer from "components/ClientNotionRenderer";

export default async function Home() {
  const recordMap = await getLandingPage();

  return (
    <div className="prose dark:prose-invert prose-p:m-1 max-w-screen-md mx-4 md:mx-8 lg:mx-0">
      <ClientNotionRenderer recordMap={recordMap} />
    </div>
  );
}
