import { Form , useActionData} from "@remix-run/react";
import styles from "./Login.css";
import logo from "../../../public/user-logo.svg";

const Login = () => {
  const actionData = useActionData();
  console.log("actionData", actionData);
  
    return (
        <div className="login-page">
        <div className="form">
            <img src={logo} className="width-30"/>
          <Form method="post" className="login-form">
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>login</button>
          </Form>
          {actionData?.errors?.login? (
          <em>{actionData?.errors.login}</em>
        ) : null}
        </div>
      </div>
    );
}
export default Login;

export const links = () => [{ rel: 'stylesheet', href: styles }]