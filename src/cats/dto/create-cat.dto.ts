import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;

  toString(): string {
    return `name: ${this.name}\nage: ${this.age}\nbreed: ${this.breed}`;
  }
}
