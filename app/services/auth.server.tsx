// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { LoginModel } from "~/models/Login";

const authenticator = new Authenticator<LoginModel>(sessionStorage);

const formStrategy = new FormStrategy(async ({ form }) => {
    let email = form.get("email");
    let password = form.get("password");
    //Do check here with db
    //Throw error if no such record
    return { id: "qwerty", firstname: "Sunil", lastname: "nair", mobile: "988898888" };
});
authenticator.use(formStrategy, "user-auth");

export {authenticator};