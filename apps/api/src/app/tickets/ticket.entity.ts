import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;
}
