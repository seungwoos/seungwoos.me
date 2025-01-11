import { getLandingPage } from "lib/notion";
import ClientNotionRenderer from "components/ClientNotionRenderer";

export const revalidate = 60;

export default async function Home() {
  const recordMap = await getLandingPage();

  return <ClientNotionRenderer recordMap={recordMap} />;
}
