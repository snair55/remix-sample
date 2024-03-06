import styles from "./SearchUser.css";
const SearchUser = () => {
    return (
        <div className="search-box">
                <input type="text" name="search" className="m-r-10" placeholder="Search User" />
                <button type="submit">Submit</button>
        </div>
    );
}

export default SearchUser;

export const links = () => [{ rel: 'stylesheet', href: styles }]