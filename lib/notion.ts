import { Client } from "@notionhq/client";
import { ExtendedRecordMap } from "node_modules/notion-types/build";
import { NotionAPI } from "notion-client";

const notionToken = process.env.NOTION_API_KEY;
const notionAboutPageId = process.env.NOTION_ABOUT_PAGE_ID;
const notionLandingPageId = process.env.NOTION_LANDING_PAGE_ID;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notionActiveUser = process.env.NOTION_ACTIVE_USER;
const notionTokenV2 = process.env.NOTION_TOKEN_V2;

const notion = new Client({
  auth: notionToken,
});

const notionApi = new NotionAPI({
  authToken: notionTokenV2,
  activeUser: notionActiveUser,
});

export async function getPosts() {
  try {
    const response = await notion.databases.query({
      database_id: notionDatabaseId!,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text || "Untitled",
      date: page.created_time,
      slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getNotionPage(
  pageId: string
): Promise<ExtendedRecordMap> {
  const response = await notionApi.getPage(pageId);

  return response;
}

export async function getAboutPage(): Promise<ExtendedRecordMap> {
  if (!notionAboutPageId) {
    throw Error("notionAboutPageId is not set.");
  }

  return await getNotionPage(notionAboutPageId);
}

export async function getLandingPage(): Promise<ExtendedRecordMap> {
  if (!notionLandingPageId) {
    throw Error("notionLandingPageId is not set.");
  }

  return await getNotionPage(notionLandingPageId);
}
