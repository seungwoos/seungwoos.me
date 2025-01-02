import { getAboutPage } from "lib/notion";
import ClientNotionRenderer from "components/ClientNotionRenderer";

export default async function About() {
  const recordMap = await getAboutPage();

  return (
    <div className="relative flex">
      <div className="prose dark:prose-invert prose-p:m-0 max-w-screen-md mx-4 md:mx-8 lg:mx-0">
        <ClientNotionRenderer recordMap={recordMap} />
      </div>
    </div>
  );
}
