
// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "Post 1......", userId: 1 },
  { id: 2, title: "Post 2", body: "Post 2......", userId: 1 },
  { id: 3, title: "Post 3", body: "Post 3......", userId: 2 },
  { id: 4, title: "Post 4", body: "Post 4......", userId: 2 },
];

export const getPosts = async () => {
  return posts;
}

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
}

export const getUsers = async (id) => {
  return users.find((user) => user.id === parseInt(id));
}