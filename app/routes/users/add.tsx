import { redirect } from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import AddUser, { links as addUserLinks } from "~/components/Users/AddUser/AddUser";
import { authenticator } from "~/services/auth.server";
import { readFile } from "~/utils/fileActions";
import { promises as fs } from "fs";

const Add = () => {
    return (
        <AddUser />
    )
}

export default Add;

export let loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    if (!user) {
        return redirect('/login')
    }else{
        return true;
    }
};

export const action = async ({ request }: { request: any }) => {
    const form = Object.fromEntries(await request.formData());
    form.id = "user-"+Math.random();
    const jsonDirectory = __dirname + "/../app/data";
    let userList = await readFile(jsonDirectory + "/userList.json");
    if(userList && userList !== ""){
        userList = JSON.parse(userList);
    }else{
        userList = {users: []};
    }
    userList.users.push(form);
    fs.writeFile(jsonDirectory + "/userList.json", JSON.stringify(userList))
    .catch((err) => {
        console.log(err);
        
    })
    return redirect('/users');
}

export const links = () => [...addUserLinks()]