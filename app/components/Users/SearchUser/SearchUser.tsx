import styles from "./SearchUser.css";
const SearchUser = () => {
    return (
        <form method="POST">
            <div className="search-box">
                <input type="text" name="search" className="m-r-10" placeholder="Search User" />
                <button type="submit" className="m-r-10 btn-blue">Submit</button>
                <button type="submit" className="m-r-10 btn-reset">Reset</button>
            </div>
        </form>
    );
}

export default SearchUser;

export const links = () => [{ rel: 'stylesheet', href: styles }]