import './styles.css';

import PostCard from "../PostCard";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts;