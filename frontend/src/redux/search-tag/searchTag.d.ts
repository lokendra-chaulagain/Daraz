export type SearchTag = {
  _id: string;
  name: string;
  createdAt: string;
};

export type SearchTagState = {
  searchTags: SearchTag[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};
