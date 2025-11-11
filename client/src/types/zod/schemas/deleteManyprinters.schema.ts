import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './objects/printersWhereInput.schema';

export const printersDeleteManySchema: z.ZodType<Prisma.printersDeleteManyArgs> = z.object({ where: printersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.printersDeleteManyArgs>;

export const printersDeleteManyZodSchema = z.object({ where: printersWhereInputObjectSchema.optional() }).strict();