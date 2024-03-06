import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { json } from "@remix-run/node";
import Login, {links as loginLinks} from "../../components/Login/Login";
import { AuthorizationError } from "remix-auth";

export default function LoginPage() {
  return (
      <>
      <Login />
      </>  
  );
}

export async function action({ request }: ActionArgs) {
  try {
    return await authenticator.authenticate("user-auth", request, {
      successRedirect: "/",
      throwOnError: true,
    });
  } catch (error) {
    if (error instanceof Response) return error;
    if (error instanceof AuthorizationError) {
      const errors: any = {};
      errors.login = "Invalid credentials";
      return json({ errors });
    }
  }
};

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export const links = () => [...loginLinks()]