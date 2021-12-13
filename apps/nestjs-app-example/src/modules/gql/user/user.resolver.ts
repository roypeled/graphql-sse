import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateUserInput, CreateUserPayload, User } from './user.model';
import { UserService } from "./user.service";


@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(returns => CreateUserPayload)
  async createUser(@Args('input') userDto: CreateUserInput
  ) {
    const newUser = await this.userService.create(userDto);

    return {user: newUser};
  }

  @Query(returns => [User])
  users() {
    return this.userService.getEntities()
  }
}
