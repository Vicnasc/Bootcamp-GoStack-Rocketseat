/**
 * Para criar: name, email, password
 */

interface TechObject {
  title: String;
  experience: Number;
}

interface CreateUserData {
  name?: string; // significa que o nome não precisa ser declarado
  email: string;
  password: string;
  techs: Array<string | TechObject>; // string[] se for apenas para um array de 1 tipo
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
