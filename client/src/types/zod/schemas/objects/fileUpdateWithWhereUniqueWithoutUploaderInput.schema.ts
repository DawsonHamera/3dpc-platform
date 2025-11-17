import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileUpdateWithoutUploaderInputObjectSchema as fileUpdateWithoutUploaderInputObjectSchema } from './fileUpdateWithoutUploaderInput.schema';
import { fileUncheckedUpdateWithoutUploaderInputObjectSchema as fileUncheckedUpdateWithoutUploaderInputObjectSchema } from './fileUncheckedUpdateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => fileUpdateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedUpdateWithoutUploaderInputObjectSchema)])
}).strict();
export const fileUpdateWithWhereUniqueWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileUpdateWithWhereUniqueWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpdateWithWhereUniqueWithoutUploaderInput>;
export const fileUpdateWithWhereUniqueWithoutUploaderInputObjectZodSchema = makeSchema();
