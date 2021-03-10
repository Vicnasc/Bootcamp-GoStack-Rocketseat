/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
      const response = await api.get('/transactions');

      const trxTransactions = response.data.transactions;
      const trxBalance = response.data.balance;

      const formattedTrx = trxTransactions.map((trx: Transaction) => ({
        ...trx,
        value: formatValue(+trx.value),
        created_at: new Date(trx.created_at).toLocaleDateString('pt-BR'),
      }));

      const formattedBalance = {
        income: formatValue(+trxBalance.income),
        outcome: formatValue(+trxBalance.outcome),
        total: formatValue(+trxBalance.total),
      };

      setTransactions([...formattedTrx]);
      setBalance(formattedBalance);
    }

    loadTransactions();
  }, [transactions]);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{balance.income}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{balance.outcome}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{balance.total}</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(trx => (
                <tr key={trx.id}>
                  <td className="title">{trx.title}</td>
                  <td className={trx.type}>{trx.value}</td>
                  <td>{trx.title}</td>
                  <td>{trx.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
