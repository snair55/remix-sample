import type { MetaFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import { authenticator } from "~/services/auth.server";
import { DashboardModel } from "~/models/Dashboard";
import Dashboard, { links as dashboardLinks } from "~/components/Dashboard/Dashboard";

export default function DashboardPage() {

  return (
    <>
      <Dashboard />
    </>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  if (user) {
    let data: DashboardModel = {
      data: {
        totalUsers: 4,
        verifiedUsers: 2,
        activeUsers: 1
      }
    };
    return json(data);
  } else {
    return redirect('/login')
  }
};

export const links = () => [...dashboardLinks()]

export let meta: MetaFunction = () => {
  return {
    title: "User Management",
    description: "Welcome to remix!"
  };
};