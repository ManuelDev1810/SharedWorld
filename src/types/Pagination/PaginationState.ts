import { User } from "../User";

export interface PaginationState {
    currentPage?: number;
    items?: User[];
    numbersOfPages?: number;
  }