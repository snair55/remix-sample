import { redirect } from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import AddUser, { links as addUserLinks } from "~/components/Users/AddUser/AddUser";
import { authenticator } from "~/services/auth.server";

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
    return redirect('/users');
}

export const links = () => [...addUserLinks()]