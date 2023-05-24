import axios from "axios";
import { IPost } from "../types/IPost";

export const fetchPosts = async () => {
  const response = await axios.get("mockdata/data.json");
  const posts = response.data.posts as IPost[];
  return posts;
};

/* fetch from api */

//export const fetchPosts = async () => {
//       const response = await axios.get('https://dummyjson.com/posts');
//       const posts = response.data.posts as IPost[] ;
//       return posts;
//   };
