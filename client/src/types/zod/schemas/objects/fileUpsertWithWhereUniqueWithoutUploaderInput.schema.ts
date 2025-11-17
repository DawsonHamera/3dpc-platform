import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileUpdateWithoutUploaderInputObjectSchema as fileUpdateWithoutUploaderInputObjectSchema } from './fileUpdateWithoutUploaderInput.schema';
import { fileUncheckedUpdateWithoutUploaderInputObjectSchema as fileUncheckedUpdateWithoutUploaderInputObjectSchema } from './fileUncheckedUpdateWithoutUploaderInput.schema';
import { fileCreateWithoutUploaderInputObjectSchema as fileCreateWithoutUploaderInputObjectSchema } from './fileCreateWithoutUploaderInput.schema';
import { fileUncheckedCreateWithoutUploaderInputObjectSchema as fileUncheckedCreateWithoutUploaderInputObjectSchema } from './fileUncheckedCreateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => fileUpdateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedUpdateWithoutUploaderInputObjectSchema)]),
  create: z.union([z.lazy(() => fileCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema)])
}).strict();
export const fileUpsertWithWhereUniqueWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileUpsertWithWhereUniqueWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpsertWithWhereUniqueWithoutUploaderInput>;
export const fileUpsertWithWhereUniqueWithoutUploaderInputObjectZodSchema = makeSchema();
