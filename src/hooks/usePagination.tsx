import { useCallback, useEffect, useMemo, useReducer } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationState } from "../types/Pagination/PaginationState";
import {ConfigurationPaginationType} from "../types/Pagination/ConfigurationPaginationType";
import { PaginationActionKind } from "../types/Pagination/PaginationAction";
import { paginationReducer } from "../utils/Pagination/UserListPagination/PaginationReducer";

const initialConfiguration: ConfigurationPaginationType = {
    items: [],
    itemsPerPage: 5,
};

const initialState: PaginationState = {
    currentPage: 1,
    items: [],
    numbersOfPages: 1,
};

const usePagination = (
    configuration: ConfigurationPaginationType = initialConfiguration
) => {
    const [paginationState, dispatch] = useReducer(
        paginationReducer,
        initialState
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
            payload: { numbersOfPages: numbersOfPages, items: itemsPerPage },
        });
    }, [numbersOfPages, itemsPerPage]);

    //Change page
    const changePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch({
            type: PaginationActionKind.CHANGE_PAGE,
            payload: { currentPage: value },
        });
    }, []);

    //Pagination
    const pagination = () => {
        return (
            <Stack spacing={2}>
                <Pagination 
                    sx={{marginTop: 2}} 
                    showFirstButton={true}
                    showLastButton={true}
                    count={paginationState.numbersOfPages} 
                    variant="outlined" 
                    shape="rounded" onChange={changePage} />
            </Stack>
        );
    };

    return {
        items: paginationState.items,
        pagination,
    } as const;
};

export default usePagination;
