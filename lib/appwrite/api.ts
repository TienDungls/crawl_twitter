import { Query } from "appwrite";
import { ID, appwriteConfig, databases } from "./config";

type Tweet = {
  link: string;
  text: string;
  name: string;
  username: string;
  date: string;
  likes: number;
  comments: number;
  retweets: number;
  quotes: number;
};
export async function createTweets(tweet?: Tweet, topic?: string) {
  if (!tweet) return;
  try {
    const tweeted = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.tweetCollectionId,
      ID.unique(),
      {
        link: tweet.link,
        text: tweet.text,
        name: tweet.name,
        username: tweet.username,
        date: tweet.date,
        like: tweet.likes,
        comments: tweet.comments,
        retweets: tweet.retweets,
        quotes: tweet.quotes,
        topic,
      }
    );
    return tweeted;
  } catch (error) {
    console.log(error);
  }
}
export async function getTweet() {
  try {
    const videos = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.tweetCollectionId,
      [Query.orderDesc("$updatedAt"), Query.limit(100)]
    );

    return videos;
  } catch (error) {
    console.log(error);
  }
}
