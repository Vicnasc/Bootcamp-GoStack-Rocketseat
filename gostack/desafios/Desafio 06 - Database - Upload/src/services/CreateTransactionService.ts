import { getCustomRepository, getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Category from '../models/Category';
import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

export default class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    // TODO
    const repository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);

    const { total } = await repository.getBalance();

    if (type === 'outcome' && value > total) {
      throw new AppError('Insuficient funds', 400);
    }

    let trxCategory = await categoryRepository.findOne({
      where: { title: category },
    });

    if (!trxCategory) {
      trxCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(trxCategory);
    }

    const newTrx = repository.create({
      title,
      value,
      type,
      category: trxCategory,
    });

    await repository.save(newTrx);

    return newTrx;
  }
}
