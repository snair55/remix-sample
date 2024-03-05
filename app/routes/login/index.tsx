import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import Login, {links as loginLinks} from "../../components/Login/Login";

export default function LoginPage() {
  return (
      <>
      <Login />
      </>
      
  );
}

export async function action({ request }: ActionArgs) {
  return await authenticator.authenticate("user-auth", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export const links = () => [...loginLinks()]