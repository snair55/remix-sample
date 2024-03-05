import type { MetaFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import ListUser, {links as listUserLinks} from "~/components/Users/ListUser/ListUser";
import SearchUser, {links as searchUserLinks} from "~/components/Users/SearchUser/SearchUser";
import { UserListModel } from "~/models/User";
import { authenticator } from "~/services/auth.server";

const UserList = () => {
  
  return (
    <div className="container">
      <SearchUser />
      <ListUser />
    </div>
  );
}

export default UserList;

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  if (user) {
    let data: UserListModel = {
      users: [
        {
          id: "qwerty",
          firstname: "John",
          lastname: "Dave",
          mobile: "9876543210"
        },
        {
          id: "jnjnmk",
          firstname: "Chris",
          lastname: "Jordan",
          mobile: "1234567890"
        },
        {
          id: "dfghj",
          firstname: "Frey",
          lastname: "Higger",
          mobile: "5678456745"
        },
        {
          id: "tyuio",
          firstname: "Mark",
          lastname: "Waugh",
          mobile: "8787865432"
        },
      ],
  
    };
    return json(data);
  } else {
    return redirect('/login')
  } 
};

export let meta: MetaFunction = () => {
  return {
    title: "User Management",
    description: "Welcome to remix!"
  };
};

export const links = () => [...listUserLinks(), ...searchUserLinks()]
