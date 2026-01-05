import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  delivery_method: string;

  @IsNotEmpty()
  total_price: number;

  cart: {
    productId: number;
    variantId: number;
    quantity: number;
  }[];
}
