import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ name, email }: IRequest): Promise<Customer> {
    // TODO
    const findEmail = await this.customersRepository.findByEmail(email);

    if (findEmail) throw new AppError('Email already used', 403);

    const repository = await this.customersRepository.create({ name, email });

    return repository;
  }
}

export default CreateCustomerService;
