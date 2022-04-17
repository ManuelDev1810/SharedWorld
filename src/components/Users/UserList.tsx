import UserItem from "./UserItem";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { getUsers } from "../../reducers/users";
import { User as UserType } from "../../types/User";
import usePagination from "../../hooks/usePagination";

const UserList = (): JSX.Element => {
    const users = useAppSelector((state) => state.users.list);
    const dispatch = useAppDispatch();
    const { items, pagination } = usePagination({
        items: users,
        itemsPerPage: 4,
    });

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            {items!.map((user: UserType) => {
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
