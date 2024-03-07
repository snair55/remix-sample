import {
    Outlet,
} from "@remix-run/react";
export default function Users() {

    return (
        <>
        <Outlet />
        </>
        
    );
}

export const action = async ({ request }: { request: any }) => {
    const form = Object.fromEntries(await request.formData());
    return form;
  }