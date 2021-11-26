import { useLocation } from "react-router"

const Post = ({ match }) => {
    const query = new URLSearchParams(useLocation().search)
    return (
        <>
            <h2>
                Id is = {match.params.id}
            </h2>
            <h2>{query.get("First")}</h2>
            <h2>{query.get("Last")}</h2>
        </>
    )
}

export default Post