"use client";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, Button, Stack } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { useMemo } from "react";
import { formatVietnameseDate } from "@/lib/utils";
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
  const handleExportRows = (rows: MRT_Row<Tweet>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };
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
      size: 50,
      //@ts-ignore
      Cell: ({ cell }) => <>{formatVietnameseDate(cell.getValue())}</>,
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
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default VideoTable;
