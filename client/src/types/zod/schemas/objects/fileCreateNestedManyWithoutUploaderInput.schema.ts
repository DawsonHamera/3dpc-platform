import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileCreateWithoutUploaderInputObjectSchema as fileCreateWithoutUploaderInputObjectSchema } from './fileCreateWithoutUploaderInput.schema';
import { fileUncheckedCreateWithoutUploaderInputObjectSchema as fileUncheckedCreateWithoutUploaderInputObjectSchema } from './fileUncheckedCreateWithoutUploaderInput.schema';
import { fileCreateOrConnectWithoutUploaderInputObjectSchema as fileCreateOrConnectWithoutUploaderInputObjectSchema } from './fileCreateOrConnectWithoutUploaderInput.schema';
import { fileCreateManyUploaderInputEnvelopeObjectSchema as fileCreateManyUploaderInputEnvelopeObjectSchema } from './fileCreateManyUploaderInputEnvelope.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => fileCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileCreateWithoutUploaderInputObjectSchema).array(), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => fileCreateOrConnectWithoutUploaderInputObjectSchema), z.lazy(() => fileCreateOrConnectWithoutUploaderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => fileCreateManyUploaderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => fileWhereUniqueInputObjectSchema), z.lazy(() => fileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const fileCreateNestedManyWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileCreateNestedManyWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateNestedManyWithoutUploaderInput>;
export const fileCreateNestedManyWithoutUploaderInputObjectZodSchema = makeSchema();
