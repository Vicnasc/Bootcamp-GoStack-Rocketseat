import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    // TODO
    const order = await this.create({ customer, products });

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    // TODO
    const findOrder = await this.findById(id);

    return findOrder;
  }
}

export default OrdersRepository;
