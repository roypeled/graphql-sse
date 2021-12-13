import { Resolver, Args, Mutation, Query, Int, ResolveField, Parent } from "@nestjs/graphql";
import { CreatePostInput, CreatePostPayload, Post } from "./post.model";
import { CommentService } from "../comment/comment.service";
import { population } from "../services/population";
import { PostService } from "./post.service";

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService,
              private commentService: CommentService
  ) {}

  @Mutation(returns => CreatePostPayload)
  async createPost(@Args('input') postDto: CreatePostInput
  ) {
    const newPost = await this.postService.create(postDto);

    return {post: newPost};
  }

  @Query(returns => [Post])
  posts(@Args('userId', {type: () => Int, nullable: true}) userId: number
  ) {
    return this.postService.getEntities({userId})
  }

  @ResolveField()
  comments(@Parent() {id: postId}: Post) {
    return this.commentService.getEntities({postId})
  }
}
