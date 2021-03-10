import { Request, Response } from 'express';
import { getManager, getRepository } from 'typeorm';

import Points from '../database/entities/points.entity';
import PointItems from '../database/entities/point-items.entity';

export default class PointsController {
  public async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const pointsRepository = getRepository(Points);
    const pointItemsRepository = getRepository(PointItems);

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    };

    const createPoint = pointsRepository.create(point);

    await pointsRepository.save(createPoint);

    const point_id = createPoint.id;

    const point_items = items.map((item_id: string) => {
      return {
        item_id,
        point_id,
      };
    });

    const createPointItems = pointItemsRepository.create(point_items);

    await pointItemsRepository.save(createPointItems);

    return response.json({ id: point_id, ...point });
  }

  public async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map((item) => `'${item.trim()}'`);

    const points = await getManager().query(`
      SELECT DISTINCT points.* FROM points 
      INNER JOIN point_items 
      ON points.id = point_items.point_id 
      WHERE point_items.item_id IN (${[...parsedItems]})
      AND points.city = '${String(city)}'
      AND points.uf = '${String(uf)}';
    `);

    /* const points = await getManager()
      .createQueryBuilder('points', 'points')
      .innerJoin('point_items', `points.id = point_items.point_id`)
      .where('point_items.point_id IN (:...items)', {
        items: [...parsedItems],
      })
      .andWhere('points.city = :city', { city: String(city) })
      .andWhere('points.uf = :uf', { uf: String(uf) })
      .distinctOn(['points.id'])
      .select('points.*')
      .getMany(); */

    return response.json(points);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const pointsRepository = getRepository(Points);

    const findPoint = await pointsRepository.findOne({
      where: { id: id },
    });

    if (!findPoint) {
      return response.status(400).json({ message: 'Point not found.' });
    }

    const itemsRepository = getRepository(PointItems);

    const items = await itemsRepository.find({
      where: { point_id: id },
      relations: ['item_id'],
    });

    const filteredItems = items.map((item) => ({ title: item.item_id.title }));

    return response.json({ findPoint, items: filteredItems });
  }
}
