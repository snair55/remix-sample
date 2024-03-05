import { useParams } from "@remix-run/react";
const ViewUser = () => {
    const params = useParams();
    return (
        <h1>User Id : {params.userId}</h1>
    );
}

export default ViewUser;