import React from "react";
import { Container, PostCard } from "../components/index";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PostForm } from "../components/index";

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appWriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
                    
            })
        } else {
            navigate('/')
            console.log(('!!not post'));
            
        }
    },[slug, navigate])
    return post ? (
        <div className='py-8'>
        <Container>
            <   PostForm post={post} />
        </Container>
    </div>
    ) : null
}

export default EditPost