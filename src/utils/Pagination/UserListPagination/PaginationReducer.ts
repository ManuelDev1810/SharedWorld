import { PaginationState } from "../../../types/Pagination/PaginationState";
import { PaginationAction, PaginationActionKind } from "../../../types/Pagination/PaginationAction";

export function paginationReducer(
    prevState: PaginationState,
    action: PaginationAction
) {
    switch (action.type) {
    case PaginationActionKind.CONFIGURE_PAGINATION:
        return {
            ...prevState,
            items: action.payload.items,
            numbersOfPages: action.payload.numbersOfPages,
        };
    case PaginationActionKind.CHANGE_PAGE:
        return {
            ...prevState,
            currentPage: action.payload.currentPage,
        };
    default:
        return { ...prevState };
    }
}