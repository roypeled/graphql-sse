import * as users from './users.json';
import * as posts from './posts.json';
import * as comments from './comments.json';
import {User} from "../../user/user.model";
import {Comment} from "../../comment/comment.model";
import {Post} from "../../post/post.model";
import {Entity} from "../entity.service";

export const population = new Map<new() => Entity, any>(
  [
    [User, users],
    [Comment, comments.map((c, i) => {
      c['dateCreated'] = new Date(Date.now() - Math.round(i*Math.random()*1000*60*60));
      return c;
    })],
    [Post, posts],
  ]
)
