import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

/*
const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('something went wrong');
    }

    return res.json();
};
*/


const SlugBlogPage = async ({ params }) => {

    const { slug } = params;

    //Fetch data from API
    //const post = await getData(slug);

    //Fetch data from local data.js
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="Placeholder" width={300} height={300} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image src="/favicon.ico" alt="Avatar" width={50} height={50} />
                    {post && <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post?.userId} />
                    </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post?.body}
                </div>
            </div>
        </div>
    );
};

export default SlugBlogPage;