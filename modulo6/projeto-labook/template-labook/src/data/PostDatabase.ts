import { BaseDatabase } from "./BaseDatabase";
import { post } from "../types/post";
import { postFeedJoin } from "../types/postFeedJoin";

export class PostDatabase extends BaseDatabase {
  private TABLE_NAME = "labook_posts";

  public createPost = async ({
    id,
    photo,
    description,
    type,
    created_at,
    author_id,
  }: post): Promise<void> => {
    await PostDatabase.connection
      .insert({ id, photo, description, type, created_at, author_id })
      .into(this.TABLE_NAME);
  }

  public getAllPosts = async (): Promise<post[]> => {
    try {
      const posts: post[] = [];
      const result = await PostDatabase.connection(this.TABLE_NAME).select("*");
      for (let post of result) {
        posts.push(post);
      }
      return posts;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public getPostById = async (id: string): Promise<post[]> => {
    try {
      const posts: post[] = [];
      const result = await PostDatabase.connection(this.TABLE_NAME)
        .where({ id: id })
        .select("*");
      for (let post of result) {
        posts.push(post);
      }
      return posts;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public showFriendsPosts = async (
    author_id: string,
    friend2_id: string
  ): Promise<postFeedJoin[]> => {
    try {
      const feed: any[] = [];
      const result = await PostDatabase.connection()
        .select()
        .table(this.TABLE_NAME)
        .innerJoin(
          "relational_friends",
          "relational_friends.friend2_id",
          "labook_posts.author_id"
        )
      for (let post of result) {
        feed.push(post);
      }

      return feed;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}