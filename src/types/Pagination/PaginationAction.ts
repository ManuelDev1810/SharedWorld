import { PaginationState } from "./PaginationState";

export interface PaginationAction<T> {
    type: PaginationActionKind;
    payload: PaginationState<T>
  }
 
export enum PaginationActionKind {
    CONFIGURE_PAGINATION = "CONFIGURE_PAGINATION",
    CHANGE_PAGE = "CHANGE_PAGE",
  }