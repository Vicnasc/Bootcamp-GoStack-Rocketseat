import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const repository = getRepository(Transaction);

    const transaction = await repository.findOne(id);

    if (!transaction) {
      throw new AppError('No transaction found');
    }

    await repository.remove(transaction);
  }
}

export default DeleteTransactionService;
