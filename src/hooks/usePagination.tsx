import { useCallback, useEffect, useMemo, useReducer } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { User } from "../types/User";

const initialConfiguration: ConfigurationType = {
    items: [],
    itemsPerPage: 5,
};

const initialState: PaginationState = {
    currentPage: 1,
    items: [],
    numbersOfPages: 1,
};

enum PaginationActionKind {
  CONFIGURE_PAGINATION = "CONFIGURE_PAGINATION",
  CHANGE_PAGE = "CHANGE-PAGE",
}

interface PaginationAction {
  type: PaginationActionKind;
  payload: PaginationState;
}

interface PaginationState {
  currentPage?: number;
  items?: User[];
  numbersOfPages?: number;
}

function paginationReducer(
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

interface ConfigurationType {
  items: User[];
  itemsPerPage: number;
}

const usePagination = (
    configuration: ConfigurationType = initialConfiguration
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

    const changePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch({
            type: PaginationActionKind.CHANGE_PAGE,
            payload: { currentPage: value },
        });
    }, []);

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
