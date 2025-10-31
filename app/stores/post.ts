import type { Post } from "@/types/interfaces";
import { useRoute } from "nuxt/app";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

export const usePostStore = defineStore('postStore', {
  state: () => ({
      posts: [] as Post[], 
    post: {} as Post,  
    _executePosts: null as (() => Promise<void>) | null,
  }),

  actions: {
    async getPosts() {
      const res = await useFetch<Post[]>("http://localhost:3001/posts");
      this.posts = res.data.value ?? [];

      // this._executePosts = res.execute ;

    },

    async getPost(route: RouteLocationNormalizedLoadedGeneric) {

      const res = await useFetch<Post>(`http://localhost:3001/posts/${route.params.id}`);
      this.post = res.data.value ?? { id: '', title: '', body: '' };
    },

    async createPost() {
      const res = await $fetch("http://localhost:3001/posts", {
        method: "POST",
        body: this.post,
      });

      console.log(res, "createPost");
      this.post = {} as Post;
    },

    async updatePost() {
      const res = await $fetch(`http://localhost:3001/posts/${this.post.id}`, {
        method: "PATCH",
        body: this.post,
      });

      console.log(res, "update");
    },

    async deletePost(post: Post)  {
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

    this.posts = this.posts.filter(postItem => postItem !== post);

  console.log(res, "DELETE");
},

async executePosts() {
  if (this._executePosts) {
    await this._executePosts();
  } else {
    console.warn('executePosts: _executePosts is null or not a function');
  }
}


  },
})