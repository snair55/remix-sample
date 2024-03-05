import styles from "./AddUser.css"
const AddUser = () => {
    return (
        <div className="container p-r-250">
            <h2>Add User</h2>
            <form method="POST">
                <p>
                    <label>First Name :
                        <input type="text" name="firstname" id="firstname"/></label>
                </p>
                <p>
                    <label>Last Name :
                        <input type="text" name="lastname" id="lastname"/></label>
                </p>
                <p>
                    <label>Mobile :
                        <input type="text" name="mobile" id="mobile"/></label>
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}

export default AddUser;

export const links = () => [{ rel: 'stylesheet', href: styles }]