import type { MetaFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import ListUser, {links as listUserLinks} from "~/components/Users/ListUser/ListUser";
import SearchUser, {links as searchUserLinks} from "~/components/Users/SearchUser/SearchUser";
import { UserListModel } from "~/models/User";
import { authenticator } from "~/services/auth.server";
import { readFile } from "~/utils/fileActions";
import { useActionData, useLoaderData} from "@remix-run/react";

const UserList = () => {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  return (
    <div className="container">
      <SearchUser />
      <ListUser actionData = {actionData} loaderData = {loaderData}/>
    </div>
  );
}

export default UserList;

export let loader: LoaderFunction = async ({ request }) => {  
  const user = await authenticator.isAuthenticated(request);
  if (user) { 
    const jsonDirectory = __dirname + "/../app/data";
    const userList = await readFile(jsonDirectory + "/userList.json");
    let data: UserListModel = {users: []};
    if(userList && userList != ""){
      data = JSON.parse(userList);
    }  
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
