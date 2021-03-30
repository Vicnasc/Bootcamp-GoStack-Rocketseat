import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();

    const transactionsList = {
      transactions,
      balance,
    };

    return response.status(200).json(transactionsList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type } = request.body;

    const createdTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const finishedTransaction = createdTransaction.execute(title, value, type);

    return response.json(finishedTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
