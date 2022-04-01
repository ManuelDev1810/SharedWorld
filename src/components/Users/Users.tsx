import User from "./User";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { getUsers } from "../../reducers/users";

const Users: React.FC = () => {
    const users = useAppSelector((state) => state.users.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            {users.map((user) => {
                return (<User key={user.id} name={user.name} email={user.email} address={user.address} company={user.company} />);
            })}
        </>
    );
};

export default Users;