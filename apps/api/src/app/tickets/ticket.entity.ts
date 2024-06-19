import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tickets', schema: 'tickets' })
@ObjectType()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  @Field()
  title: string;

  @Column({
    name: 'body',
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  @Field()
  body: string;
}
