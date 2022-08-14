import { postInputDTO } from "../model/post/postInputDTO";
import { createMoment } from "../services/moment";
import { generateId } from "../services/generateId";
import { post } from "../types/post";
import { PostRepository } from "../repository/PostRepository";
import { postFeedJoin } from "../types/postFeedJoin";

export class PostBusiness {
  constructor(private postDB: PostRepository) {}

  public createPost = async (input: postInputDTO): Promise<void> => {
    try {
      const { photo, description, type, author_id } = input;

      const id: string = generateId();
      const created_at: string = createMoment();
      const post: post = {
        id,
        photo,
        description,
        type,
        created_at,
        author_id,
      }
      await this.postDB.createPost(post);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public getAllPosts = async (): Promise<post[]> => {
    try {
      const allPosts = await this.postDB.getAllPosts();
      return allPosts;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  
  public getPostById = async(id:string):Promise<post[]>=>{
    try {
    const post = await this.postDB.getPostById(id)
    return post;
  } catch (error: any) {
    throw new Error(error.message);
  }
  
}

public showFriendsPosts = async (
  author_id: string,
  friend2_id: string
): Promise<postFeedJoin[]> => {
  try {
    const friendsFeed = await this.postDB.showFriendsPosts(
      author_id,
      friend2_id
    );

    return friendsFeed;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
}