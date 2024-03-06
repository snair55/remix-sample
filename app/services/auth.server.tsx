import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { LoginModel } from "~/models/Login";
import { promises as fs } from "fs";
import { readFile } from "~/utils/fileActions";

const authenticator = new Authenticator<LoginModel>(sessionStorage, {
    sessionErrorKey: "my-error-key",
});

const formStrategy = new FormStrategy(async ({ form }) => {
    let email = form.get("email");
    let password = form.get("password");
    const jsonDirectory = __dirname + "/../app/data";
    const loginContent = await readFile(jsonDirectory + "/login.json");
    const cred = JSON.parse(loginContent);
    if (cred.email === email && cred.password === password) {
        const userContent = await readFile(jsonDirectory + "/userInfo.json");
        const user = JSON.parse(userContent);
        return user;
    } else {
        throw new Response("Invalid credentials", {
            status: 401,
        });
    }
});

authenticator.use(formStrategy, "user-auth");

export { authenticator };