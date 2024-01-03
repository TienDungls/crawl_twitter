"use client";
import {
  MaterialReactTable,
  useMaterialReactTable,
  createMRTColumnHelper,
} from "material-react-table";
import { mkConfig } from "export-to-csv";
export type Tweet = {
  link: string;
  text: string;
  name: string;
  username: string;
  date: string;
  likes: number;
  comments: number;
  retweets: number;
  quotes: number;
  topic: string;
};
const columnHelper = createMRTColumnHelper<Tweet>();

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const VideoTable = ({ data }: { data: Tweet[] }) => {
  const columns = [
    columnHelper.accessor("link", {
      header: "Link",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 50,
    }),
    columnHelper.accessor("username", {
      header: "username",
      size: 50,
    }),
    columnHelper.accessor("date", {
      header: "Ngày đăng",
      size: 100,
    }),
    columnHelper.accessor("text", {
      header: "Text",
      size: 1000,
    }),

    columnHelper.accessor("likes", {
      header: "likes",
      size: 50,
    }),

    columnHelper.accessor("comments", {
      header: "comments",
      size: 50,
    }),
    columnHelper.accessor("retweets", {
      header: "retweets",
      size: 50,
    }),
    columnHelper.accessor("quotes", {
      header: "quotes",
      size: 50,
    }),
  ];
  const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
  });

  return <MaterialReactTable table={table} />;
};

export default VideoTable;
