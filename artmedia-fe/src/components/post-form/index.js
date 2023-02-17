import Input from "../input"
import { useEffect, useState } from "react"
import Button from "../button"
import apiFetch from '../../utils/customFetch'
import { METHODS, POST_ENDPOINTS } from "../../utils/costants";
import Post from "../post";

const PostForm = ({ user }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [posts, setPosts] = useState([])
    const handleSubmit = () => {
        const data = {
            title,
            description
        }
        apiFetch(METHODS.post, POST_ENDPOINTS.createPost, data)
            .then(json => console.log(json)).catch(err => console.log(err));

    };
    useEffect(() => {
        apiFetch(METHODS.get, POST_ENDPOINTS.getAllPosts).then(data => setPosts(data))
    }, [posts])
    return (
        <><div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <form>
                        <Input
                            type="text"
                            value={title}
                            label="Title"
                            name="Title"
                            placeholder="Write the title of the post"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                            type="text"
                            value={description}
                            label="Description"
                            name="Description"
                            placeholder="Write the description of the post"
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Button type="button" label="CREATE POST" onClick={handleSubmit} />
                    </form>
                </div>

                {posts.map((post) => {
                    return <Post key={post._id} user={user} post={post} />
                })}

            </div>
        </div></>
    )
}

export default PostForm