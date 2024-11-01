import React from "react";
import { Container, PostCard } from "postcss";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useNavigate(() => {
        if (slug) {
            appWriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    },[slug, navigate])
    return post ? (
        <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
    ) : null
}

export default EditPost