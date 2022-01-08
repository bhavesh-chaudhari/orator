import { useState } from "react";
import styles from "../../styles/Editor.module.css"

const Editor = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image] = useState(null);
    const [url, setImage] = useState(null);
    
    
    return (
        <div className={styles["editor-container"]} >
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Post</button>
        </div>
    )
}

export default Editor
