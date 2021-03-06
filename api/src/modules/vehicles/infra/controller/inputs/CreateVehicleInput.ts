import { Field, InputType } from 'type-graphql';

@InputType()
export default class CreateVehicleInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  photo: string;

  @Field()
  diary_value: number;

  @Field()
  weekly_value: number;

  @Field()
  monthly_value: number;

  @Field()
  waiting_time: number;

  @Field()
  category_id: string;

  @Field()
  brand: string;

  @Field()
  model: string;

  @Field()
  location_id: string;
}
