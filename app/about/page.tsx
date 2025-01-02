import { getAboutPage } from "lib/notion";
import ClientNotionRenderer from "components/ClientNotionRenderer";

export default async function About() {
  const recordMap = await getAboutPage();

  return <ClientNotionRenderer recordMap={recordMap} />;
}
