import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import items from '../database/entities/items.entity';

export default class ItemsController {
  public async index(request: Request, response: Response) {
    const repository = getRepository(items);
    const result = await repository.find();

    const serializedItems = result.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }

  public async show(request: Request, response: Response) {
    const repository = getRepository(items);

    const result = await repository.findOne({
      where: { id: request.params.id },
    });

    return response.json(result);
  }

  public async create(request: Request, response: Response) {
    const repository = getRepository(items);

    const { image, title } = request.body;
    const data = {
      image,
      title,
    };

    const createdData = await repository.create(data);

    await repository.save(createdData);

    return response.json(createdData);
  }

  public async update(request: Request, response: Response) {
    const repository = getRepository(items);
    const _id = request.params.id;

    const itemById = repository.findOne({ where: { id: _id } });

    return response.json(itemById);
  }

  public async delete(request: Request, response: Response) {
    const repository = getRepository(items);
    const _id = request.params.id;

    const itemById = repository.findOne({ where: { id: _id } });
  }
}
