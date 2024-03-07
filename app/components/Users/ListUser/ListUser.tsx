import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { UserListModel } from "~/models/User";
import styles from "./ListUser.css";

const ListUser = (props: any) => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let data = props?.loaderData?.users ? props.loaderData.users : [];
        if (props.actionData && props.actionData.search && props.actionData.search !== "") {
            data = data.filter((item: any) =>
                item.firstname.includes(props.actionData.search) ||
                item.lastname.includes(props.actionData.search) ||
                item.mobile.includes(props.actionData.search))
        }
        setUserData(data)
    }, [props])
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
                        {userData.map((user: any) => {
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