import VideoTable from "@/components/table/data-table";
import { getTweet } from "@/lib/appwrite/api";
const DatabasePage = async () => {
  const json = await getTweet();
  const data = json?.documents.map((item) => ({
    link: item.link,
    text: item.text,
    name: item.name,
    username: item.username,
    date: item.date,
    likes: item.likes,
    comments: item.comments,
    retweets: item.retweets,
    quotes: item.quotes,
    topic: item.topic,
  }));
  return (
    <div>
      <VideoTable data={data!} />
    </div>
  );
};

export default DatabasePage;
