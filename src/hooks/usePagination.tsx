import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ConfigurationPagination } from "../types/Pagination/ConfigurationPagination";
import { PaginationActionKind, PaginationAction } from "../types/Pagination/PaginationAction";
import { PaginationState } from "../types/Pagination/PaginationState";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function paginationReducer<T>(
    prevState: PaginationState<T>,
    action: PaginationAction<T>
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

function usePagination<T>(configuration: ConfigurationPagination<T>) {
    const [paginationState, dispatch] = useReducer(
        paginationReducer,
        configuration.initialState
    );

    //Items per page
    const itemsPerPage = useMemo(() => {
        return configuration.items.slice(
            configuration.itemsPerPage * paginationState.currentPage! -
        configuration.itemsPerPage,
            configuration.itemsPerPage * paginationState.currentPage!
        );
    }, [
        configuration.itemsPerPage,
        configuration.items,
        paginationState.currentPage,
    ]);

    //Numbers of pages
    const numbersOfPages = useMemo(() => {
        let result = 1;
        if (configuration.items.length >= configuration.itemsPerPage) {
            result = Math.ceil(
                configuration.items.length / configuration.itemsPerPage
            );
        }
        return result;
    }, [configuration.itemsPerPage, configuration.items.length]);

    useEffect(() => {
        dispatch({
            type: PaginationActionKind.CONFIGURE_PAGINATION,
            payload: {numbersOfPages: numbersOfPages, items: itemsPerPage },
        });
    }, [numbersOfPages, itemsPerPage]);

    //Change page
    const changePage = useCallback(
        (event: React.ChangeEvent<unknown>, value: number) => {
            dispatch({
                type: PaginationActionKind.CHANGE_PAGE,
                payload: { currentPage: value, numbersOfPages: 0 },
            });
        },
        []
    );

    //Pagination
    const pagination = () => {
        return (
            <Stack spacing={2}>
                <Pagination
                    sx={{ marginTop: 2 }}
                    showFirstButton={true}
                    showLastButton={true}
                    count={paginationState.numbersOfPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={changePage}
                />
            </Stack>
        );
    };

    return {
        items: paginationState.items as T[],
        pagination,
    } as const;
}

export default usePagination;
