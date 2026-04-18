import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateOrderItemDto {
  @IsInt()
  @IsPositive()
  product_id: number;

  @IsInt()
  @IsPositive()
  product_variant_id: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsOptional()
  @IsString()
  status?: string;
}
