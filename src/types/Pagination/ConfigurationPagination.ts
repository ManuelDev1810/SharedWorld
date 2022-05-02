import { PaginationState } from "./PaginationState";

export interface ConfigurationPagination<T> {
  items: T[];
  itemsPerPage: number;
  initialState: PaginationState<T>;
}