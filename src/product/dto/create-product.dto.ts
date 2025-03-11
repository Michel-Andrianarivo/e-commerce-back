import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imgUrl1: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsString()
  shippings: string;

  @IsString()
  sex: string;

  @IsString()
  brands: string;

  @IsString()
  category: string;

  @IsString()
  subCategory: string;
}
