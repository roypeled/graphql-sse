import { Args, Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  postId: number;

  @Field(() => String, {
    nullable: true
  })
  email: string;

  @Field()
  body: string;

  @Field({
    nullable: true
  })
  name: string;

  @Field()
  dateCreated: Date
}

@InputType()
export class CreateCommentInput {
  @Field(() => Int)
  postId: number;

  @Field(() => String, {
    nullable: true
  })
  email: string;

  @Field()
  body: string;

  @Field({
    nullable: true
  })
  name: string;
}

@ObjectType()
export class CreateCommentPayload {
  @Field(() => Comment)
  comment: Comment
}
