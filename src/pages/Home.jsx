import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-screen bg-black text-gold">
                <Container>
                    <h1 className="text-3xl font-bold text-center">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full h-screen bg-black text-gold">
            <Container>
                <div className="flex flex-wrap justify-center p-4">
                    {posts.map((post) => (
                        <div key={post.$id} className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
