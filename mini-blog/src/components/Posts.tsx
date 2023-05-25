import React from 'react';
import { IPost } from "../types/IPost";

export interface IPostsProps {
    filteredPosts: IPost[];
}

const Posts = ({ filteredPosts}: IPostsProps) => (
    <div className="blog__section-posts">
    {filteredPosts && filteredPosts.length > 0 ?
        (filteredPosts.map((post) => (
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
            ))) :
        (<p className="blog__no-posts">No posts found</p>)}
    </div>
);


export default Posts