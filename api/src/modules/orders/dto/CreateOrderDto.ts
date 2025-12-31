import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  deliveryMethod: string;

  @IsNotEmpty()
  totalPrice: number;

  cart: {
    productId: number;
    variantId: number;
    quantity: number;
  }[];
}
