import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class SectionOrderItemDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsInt()
  @Min(0)
  displayOrder: number;
}

export class UpdateSectionOrderDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SectionOrderItemDto)
  sections: SectionOrderItemDto[];
}
