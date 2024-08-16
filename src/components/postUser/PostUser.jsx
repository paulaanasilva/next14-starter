import styles from "./postUser.module.css";
import { getUsers } from '@/lib/data';

/*
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error('something went wrong');
    }

    return res.json();
};
*/

const PostUsers = async ({ userId }) => {

    //Fetch data from API
    //  const user = await getData(userId);

    //Fetch data from local data.js
    const user = await getUsers(userId);

    return (
        <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.name}</span>
        </div>
    );

}

export default PostUsers