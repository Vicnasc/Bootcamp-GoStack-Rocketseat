import { Router } from 'express';

import ItemsController from './controllers/items.controller';
import PointsController from './controllers/points.controller';

const routes = Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

/* Rotas abaixo criadas para inserção das categorias de items e
também para prática de ações CRUD com Typescript/TypeORM

Como o TypeORM não insere seeds, incluir dados da pasta database/seeds */
routes.post('/items', itemsController.create);
routes.get('/items/:id', itemsController.show);
routes.put('/items/:id', itemsController.update);
routes.delete('/items/:id', itemsController.delete);

export default routes;
