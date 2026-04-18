import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export class OrderTaskPrinterAssignmentDto {
  @IsInt()
  @IsPositive()
  order_item_id: number;

  @IsInt()
  @IsPositive()
  printer_id: number;
}

export class GenerateOrderTasksDto {
  @IsOptional()
  @IsBoolean()
  force?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderTaskPrinterAssignmentDto)
  printer_assignments?: OrderTaskPrinterAssignmentDto[];
}
