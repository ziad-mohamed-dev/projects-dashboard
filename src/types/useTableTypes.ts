import { DataShape } from "./dataTypes";

export type SearchQueryType = Partial<Omit<DataShape, "image" | "progress">>;

export interface SortConfig {
  sortBy: keyof Omit<DataShape, "image">;
  order: "asc" | "desc";
}
