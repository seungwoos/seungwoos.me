import { getLandingPage } from "lib/notion";
import ClientNotionRenderer from "components/ClientNotionRenderer";

export default async function Home() {
  const recordMap = await getLandingPage();

  return <ClientNotionRenderer recordMap={recordMap} />;
}
