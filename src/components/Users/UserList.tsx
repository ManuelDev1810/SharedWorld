import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import usePagination from "../../hooks/usePagination";
import UserItem from "./UserItem";
import { getUsers } from "../../reducers/users";
import { User } from "../../types/User";
import { PaginationState } from "../../types/Pagination/PaginationState";

const initialState: PaginationState<User> = {
    currentPage: 1,
    items: [],
    numbersOfPages: 1,
};

const UserList = (): JSX.Element => {
    const users = useAppSelector((state) => state.users.list);
    const dispatch = useAppDispatch();
    const { items, pagination } = usePagination<User>({
        items: users,
        itemsPerPage: 4,
        initialState,
    });

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            {items.map((user: User) => {
                return (
                    <UserItem
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                        company={user.company}
                    />
                );
            })}

            {pagination()}
        </>
    );
};

export default UserList;
