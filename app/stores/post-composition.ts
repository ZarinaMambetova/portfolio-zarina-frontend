import type { Post } from "@/types/interfaces";
import { useRoute } from "nuxt/app";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

export const usePostCompositionStore = defineStore('postCompositionStore', () => {
 const route = useRoute();

  const posts = ref([] as Post[]);
  const post = reactive({} as Post);
  
  const getPosts = async () => {
    const res = await useFetch<Post[]>("http://localhost:3001/posts");
    posts.value = res.data.value ?? [];
  }

  const getPost = async (route: RouteLocationNormalizedLoadedGeneric) => {
    const res = await useFetch<Post>(`http://localhost:3001/posts/${route.params.id}`);
    
    Object.assign(post, res.data.value);
}
  const createPost = async (post: Post) => {
    const res = await $fetch("http://localhost:3001/posts", {
      method: "POST",
      body: post,
    });

    console.log(res, "createPost");

    Object.assign(post, {
      title: "",
      body: "",
    })
  };

  const updatePost = async () => {
    const res = await $fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "PATCH",
      body: post,
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
  
  return { posts, post, getPosts, getPost, createPost, updatePost, deletePost };
})