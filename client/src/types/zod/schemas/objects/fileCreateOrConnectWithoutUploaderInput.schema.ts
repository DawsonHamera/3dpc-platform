import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileCreateWithoutUploaderInputObjectSchema as fileCreateWithoutUploaderInputObjectSchema } from './fileCreateWithoutUploaderInput.schema';
import { fileUncheckedCreateWithoutUploaderInputObjectSchema as fileUncheckedCreateWithoutUploaderInputObjectSchema } from './fileUncheckedCreateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => fileCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema)])
}).strict();
export const fileCreateOrConnectWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileCreateOrConnectWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateOrConnectWithoutUploaderInput>;
export const fileCreateOrConnectWithoutUploaderInputObjectZodSchema = makeSchema();
