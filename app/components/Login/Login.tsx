import { Form } from "@remix-run/react";
import styles from "./login.css";

const Login = () => {
    return (
        <div className="login-form">
            <Form method="post">
                <input type="email" name="email" required />
                <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                />
                <button>Sign In</button>
            </Form>
        </div>
    );
}
export default Login;

export const links = () => [{ rel: 'stylesheet', href: styles }]