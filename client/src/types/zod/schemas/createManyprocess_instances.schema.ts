import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesCreateManyInputObjectSchema as process_instancesCreateManyInputObjectSchema } from './objects/process_instancesCreateManyInput.schema';

export const process_instancesCreateManySchema: z.ZodType<Prisma.process_instancesCreateManyArgs> = z.object({ data: z.union([ process_instancesCreateManyInputObjectSchema, z.array(process_instancesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.process_instancesCreateManyArgs>;

export const process_instancesCreateManyZodSchema = z.object({ data: z.union([ process_instancesCreateManyInputObjectSchema, z.array(process_instancesCreateManyInputObjectSchema) ]),  }).strict();