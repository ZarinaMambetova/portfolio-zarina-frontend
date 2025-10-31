import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const apiAxios = axios.create({
    baseURL: 'http://localhost:3001'
  });

  const getAsyncPosts = () => {
    return useAsyncData(async () => {
      const response = await apiAxios.get('/posts');

      return response.data
    })
  };

  nuxtApp.provide('getAsyncPosts', getAsyncPosts)
})