import User from "./User";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { getUsers } from "../../reducers/users";
import usePagination from "../../hooks/usePagination";

const Users = (): JSX.Element => {
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
            {items!.map((user) => {
                return (
                    <User
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

export default Users;
