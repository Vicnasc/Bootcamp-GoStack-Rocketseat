import { getRepository, Repository, In } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';

import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    // TODO
    const newProduct = this.ormRepository.create({ name, price, quantity });

    await this.ormRepository.save(newProduct);

    return newProduct;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    // TODO
    const product = await this.ormRepository.findOne({ where: { name } });

    return product;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    // TODO
    const product = await this.ormRepository.find({ where: { id: products } });

    return product;
  }

  public async updateQuantity(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    // TODO
    const product = await this.ormRepository.find({
      where: In(products),
    });

    console.log('fazer isso aqui');

    return product;
  }
}

export default ProductsRepository;
