import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesCreateManyInputObjectSchema as process_templatesCreateManyInputObjectSchema } from './objects/process_templatesCreateManyInput.schema';

export const process_templatesCreateManySchema: z.ZodType<Prisma.process_templatesCreateManyArgs> = z.object({ data: z.union([ process_templatesCreateManyInputObjectSchema, z.array(process_templatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.process_templatesCreateManyArgs>;

export const process_templatesCreateManyZodSchema = z.object({ data: z.union([ process_templatesCreateManyInputObjectSchema, z.array(process_templatesCreateManyInputObjectSchema) ]),  }).strict();