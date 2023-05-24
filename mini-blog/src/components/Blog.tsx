import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { IPost, categories } from "../types/IPost";

const Blog = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

    const getData = async () => {
        const response = await fetchPosts();
        setPosts(response);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = posts.filter((post) =>
                post.tags.includes(selectedCategory)
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);
        }
    }, [selectedCategory, posts]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="blog">
            <div className="blog__section">
                <h2 className="blog__section-title">Posts Categories</h2>
                <select
                    className="blog__section-dropdown"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category.tag} value={category.tag}>
                            {category.tag}
                        </option>
                    ))}
                </select>
            </div>
            <div className="blog__section-posts">
                {filteredPosts && filteredPosts.length > 0 ?
                    (
                        filteredPosts.map((post) => (
                            <div key={post.id} className="blog__post">
                                <h3 className="blog__post-title">{post.title}</h3>
                                <p className="blog__post-body">{post.body}</p>
                                <div className="blog__post-tags">
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="blog__post-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) :
                    (
                        <p className="blog__no-posts">No posts found</p>
                    )}
            </div>
        </div>
    );
};

export default Blog;
