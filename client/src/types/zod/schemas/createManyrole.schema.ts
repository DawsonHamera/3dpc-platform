import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleCreateManyInputObjectSchema as roleCreateManyInputObjectSchema } from './objects/roleCreateManyInput.schema';

export const roleCreateManySchema: z.ZodType<Prisma.roleCreateManyArgs> = z.object({ data: z.union([ roleCreateManyInputObjectSchema, z.array(roleCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.roleCreateManyArgs>;

export const roleCreateManyZodSchema = z.object({ data: z.union([ roleCreateManyInputObjectSchema, z.array(roleCreateManyInputObjectSchema) ]),  }).strict();