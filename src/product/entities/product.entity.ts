import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  imgUrl1: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column('text')
  size: string;

  @Column('text')
  color: string;

  @Column('text')
  shippings: string;

  @Column('text')
  sex: string;

  @Column('text')
  brands: string;

  @Column('text')
  category: string;

  @Column('text')
  subCategory: string;
}
