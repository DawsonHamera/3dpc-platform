import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  product_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  product_variant_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  quantity?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
