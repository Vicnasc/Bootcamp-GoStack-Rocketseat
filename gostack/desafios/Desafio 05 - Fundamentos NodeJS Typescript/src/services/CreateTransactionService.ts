import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(
    title: string,
    value: number,
    type: 'income' | 'outcome',
  ): Transaction {
    // TODO
    const newTransaction = new Transaction({ title, value, type });

    const trxBalance = this.transactionsRepository.getBalance();

    if (type === 'outcome' && value > trxBalance.total) {
      throw new Error('Incorret value.');
    }

    this.transactionsRepository.create(newTransaction);

    return newTransaction;
  }
}

export default CreateTransactionService;
