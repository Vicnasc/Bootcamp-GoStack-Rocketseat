import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';

import UsersRepository from '../repositories/UserRepository';
import AppErrors from '../errors/AppErrors';

export default class UserController {
  async find(request: Request, response: Response) {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return response.status(200).json(users);
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required('Nome obrigatório'),
      email: yup.string().email().required('E-mail incorreto')
    });

    /*if (!(await schema.isValid(request.body))) {
     return response.status(400).json({ error: 'Validation failed.' });
     }*/

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppErrors(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne(
      { email });

    if (userAlreadyExists) {
      throw new AppErrors('User already exists');
    }

    const user = usersRepository.create({ name, email });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}
