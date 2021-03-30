import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    // TODO
    const allBalance = await this.find();

    const incomeBalance = allBalance.filter(
      balance => balance.type === 'income',
    );

    const outcomeBalance = allBalance.filter(
      balance => balance.type === 'outcome',
    );

    const finalIncome = incomeBalance.reduce((acc, cur) => acc + +cur.value, 0);
    const finalOutcome = outcomeBalance.reduce(
      (acc, cur) => acc + +cur.value,
      0,
    );

    const total = finalIncome - finalOutcome;

    const balance = {
      income: finalIncome,
      outcome: finalOutcome,
      total,
    };

    return balance;
  }
}

export default TransactionsRepository;
