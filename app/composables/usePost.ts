import type { Post } from "@/types/interfaces";
import { useRoute } from "nuxt/app";

export const usePost = () => {
  
  const route = useRoute();

  const posts = useState<Post[]>('post', () => [])

  const getPosts = async () => {
    const res = await useFetch<Post[]>("http://localhost:3001/posts");
    posts.value = res.data.value ?? [];

    return posts;
  }

  const getPost = async () => await useFetch<Post>(`http://localhost:3001/posts/${route.params.id}`);

  const storePost = async (post: Post) => {
    const res = await $fetch("http://localhost:3001/posts", {
      method: "POST",
      body: post,
    });

    console.log(res, "storePost");

    Object.assign(post, {
      title: "",
      body: "",
    })
  };

  const updatePost = async (postsData: Post) => {
    const res = await $fetch(`http://localhost:3001/posts/${route.params.id}`, {
      method: "PATCH",
      body: postsData,
    });

    console.log(res, "update");
  };

  const deletePost = async (post: Post) => {
    if (!post.id) {
    console.error("Post ID is missing");
    return;
  }
    const res = await $fetch(
    `http://localhost:3001/posts/${post.id}`,
    {
      method: "DELETE",
    }
    );

    posts.value = posts.value.filter(postItem => postItem !== post);

  console.log(res, "DELETE");
}
  
  return { getPosts, getPost, storePost, updatePost, deletePost };

}