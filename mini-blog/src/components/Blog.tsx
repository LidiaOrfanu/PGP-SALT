import React, { SyntheticEvent, useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { IPost } from "../types/IPost";
import { PostCategories } from "./PostCategories";
import Posts from "./Posts";

const Blog = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const getData = async () => {
        const response = await fetchPosts();
        setPosts(response);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleCategoryChange = (event : SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        setSelectedCategory(target.value);
    };

    return (
        <div className="blog">
            <PostCategories selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
            {selectedCategory !== "" ? (<Posts filteredPosts={posts.filter(post => post.tags.includes(selectedCategory))} />) : 
            (<Posts filteredPosts={posts} />)}
        </div>
    );
};

export default Blog;
