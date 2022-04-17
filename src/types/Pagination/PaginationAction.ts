import { PaginationState } from "./PaginationState";

export interface PaginationAction {
    type: PaginationActionKind;
    payload: PaginationState;
  }
 
export enum PaginationActionKind {
    CONFIGURE_PAGINATION = "CONFIGURE_PAGINATION",
    CHANGE_PAGE = "CHANGE_PAGE",
  }