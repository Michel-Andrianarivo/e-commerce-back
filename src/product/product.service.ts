import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { title, description, imgUrl1 } = createProductDto;
    const newProduct = await this.productRepository.create({
      ...createProductDto,
    });

    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    const singleProduct = await this.productRepository.find({
      where: { id: id },
    });

    if (!singleProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return singleProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const {
      title,
      description,
      imgUrl1,
      price,
      quantity,
      size,
      color,
      sex,
      brands,
      shippings,
      category,
    } = updateProductDto;

    const product = await this.productRepository.find({ where: { id: id } });

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    let updatedProduct: any = {};

    title && (updatedProduct.title = title);
    description && (updatedProduct.description = description);
    imgUrl1 && (updatedProduct.imgUrl1 = imgUrl1);
    price && (updatedProduct.price = price);
    quantity && (updatedProduct.quantity = quantity);
    size && (updatedProduct.size = size);
    color && (updatedProduct.color = color);
    sex && (updatedProduct.sex = sex);
    brands && (updatedProduct.brands = brands);
    shippings && (updatedProduct.shippings = shippings);
    category && (updatedProduct.category = category);

    await this.productRepository.update({ id: id }, updatedProduct);

    const finProduct = await this.productRepository.find({ where: { id: id } });

    return finProduct;
  }

  async remove(id: string) {
    const findProduct = await this.productRepository.find({
      where: { id: id },
    });

    if (!findProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    await this.productRepository.remove(findProduct);

    return `Product with id ${id} deleted...`;
  }
}
