import { post } from "../types/post";
import { postFeedJoin } from "../types/postFeedJoin";
export interface PostRepository {
  createPost(post: post): Promise<void>;
  getAllPosts(): Promise<post[]>;
  getPostById(id: string): Promise<post[]>;
  showFriendsPosts(author_id: string, friend2_id: string): Promise<postFeedJoin[]>;
}