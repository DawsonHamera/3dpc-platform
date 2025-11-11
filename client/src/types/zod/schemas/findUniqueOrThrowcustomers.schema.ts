import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './objects/customersSelect.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';

export const customersFindUniqueOrThrowSchema: z.ZodType<Prisma.customersFindUniqueOrThrowArgs> = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.customersFindUniqueOrThrowArgs>;

export const customersFindUniqueOrThrowZodSchema = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema }).strict();