import { Client, Databases } from "appwrite";

export const appwriteConfig = {
  url: process.env.APPWRITE_URL || "https://cloud.appwrite.io/v1",
  projectId: process.env.APPWRITE_PROJECT_ID || "659552e48377c2cd5470",
  databaseId: process.env.APPWRITE_DATABASE_ID || "6595557aabf12affd012",
  tweetCollectionId:
    process.env.APPWRITE_TWEET_COLLECTION_ID || "65955586e484ac8421fe",
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);
export const databases = new Databases(client);
export { ID } from "appwrite";
