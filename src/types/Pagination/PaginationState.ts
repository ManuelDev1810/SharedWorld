export interface PaginationState<T> {
    currentPage?: number;
    items?: T[];
    numbersOfPages?: number;
  }