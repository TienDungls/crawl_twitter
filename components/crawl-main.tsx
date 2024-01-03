"use client";
import { createTweets } from "@/lib/appwrite/api";
import { Input } from "@nextui-org/react";
import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";

const CrawlMain = () => {
  const [topic, setTopic] = useState("");
  const onFileChanged = (e: any) => {
    try {
      const file = e.target.files[0];
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async function (results: any) {
          results.data.forEach(async (d: any) => {
            // await axios.post("/api/tweet", {
            //   data: { d, topic },
            // });
            await createTweets(
              {
                link: d.link,
                text: d.text,
                name: d.name,
                username: d.username,
                date: d.date,
                likes: d.likes,
                comments: d.comments,
                retweets: d.retweets,
                quotes: d.quotes,
              },
              topic
            );
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="file" accept=".csv" onChange={onFileChanged} />
      <Input
        onValueChange={setTopic}
        placeholder="topic..."
        className="mt-2"
        labelPlacement="outside"
      />
    </div>
  );
};

export default CrawlMain;
