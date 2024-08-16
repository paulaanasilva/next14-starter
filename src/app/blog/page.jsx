import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

/*
const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:3600}});

    if (!res.ok) {
        throw new Error('something went wrong');
    }

    return res.json();
};
*/

const BlogPage = async () => {

    //Fetch data from API
    //  const posts = await getData();

    //Fetch data from local data.js
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}

        </div>
    );
};

export default BlogPage;