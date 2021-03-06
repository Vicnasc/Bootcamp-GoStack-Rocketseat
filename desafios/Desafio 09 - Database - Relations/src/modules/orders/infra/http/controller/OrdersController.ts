import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    // TODO
    const { id } = request.params;

    const ordersRepository = container.resolve(FindOrderService);

    const findOrder = await ordersRepository.execute({ id });

    return response.json(findOrder);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    const { customer_id, products } = request.body;

    const ordersRepository = container.resolve(CreateOrderService);

    const order = await ordersRepository.execute({ customer_id, products });

    return response.json(order);
  }
}
