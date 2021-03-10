import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTrx = this.transactions.filter(trx => trx.type === 'income');
    const outcomeTrx = this.transactions.filter(trx => trx.type === 'outcome');

    const reducedIncome = incomeTrx.reduce((acc, cur) => acc + cur.value, 0);
    const reducedOutcome = outcomeTrx.reduce((acc, cur) => acc + cur.value, 0);

    const total = reducedIncome - reducedOutcome;

    return { income: reducedIncome, outcome: reducedOutcome, total };
  }

  public create(transaction: Transaction): Transaction {
    // TODO
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
