import Editor from "../../../components/editor/Editor";
import withAuth from "../../../components/withAuth/WithAuth";

const index = () => {

    return (
        <div>
            <h1>Create Blog</h1>
            <Editor></Editor>
        </div>
    )
}

export default withAuth(index);
