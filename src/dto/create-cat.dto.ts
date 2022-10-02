export class CreateCatDto {
  name: string;
  age: number;
  breed: string;

  toString(): string {
    return `name: ${this.name}\nage: ${this.age}\nbreed: ${this.breed}`;
  }
}
