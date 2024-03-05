import { useLoaderData, Link } from "@remix-run/react";
import { UserListModel } from "~/models/User";
import styles from "./ListUser.css";

const ListUser = () => {
    let data = useLoaderData<UserListModel>();
    return (
        <>
            <h2>User List</h2>
            <div>
                <table>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                    </thead>
                    <tbody>
                        {data.users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td><Link to={user.id}>{user.firstname}</Link></td>
                                    <td>{user.lastname}</td>
                                    <td>{user.mobile}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListUser;

export const links = () => [{ rel: 'stylesheet', href: styles }]