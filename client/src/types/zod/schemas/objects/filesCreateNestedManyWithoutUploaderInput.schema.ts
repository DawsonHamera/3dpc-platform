import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutUploaderInputObjectSchema as filesCreateWithoutUploaderInputObjectSchema } from './filesCreateWithoutUploaderInput.schema';
import { filesUncheckedCreateWithoutUploaderInputObjectSchema as filesUncheckedCreateWithoutUploaderInputObjectSchema } from './filesUncheckedCreateWithoutUploaderInput.schema';
import { filesCreateOrConnectWithoutUploaderInputObjectSchema as filesCreateOrConnectWithoutUploaderInputObjectSchema } from './filesCreateOrConnectWithoutUploaderInput.schema';
import { filesCreateManyUploaderInputEnvelopeObjectSchema as filesCreateManyUploaderInputEnvelopeObjectSchema } from './filesCreateManyUploaderInputEnvelope.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesCreateWithoutUploaderInputObjectSchema).array(), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => filesCreateOrConnectWithoutUploaderInputObjectSchema), z.lazy(() => filesCreateOrConnectWithoutUploaderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => filesCreateManyUploaderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => filesWhereUniqueInputObjectSchema), z.lazy(() => filesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const filesCreateNestedManyWithoutUploaderInputObjectSchema: z.ZodType<Prisma.filesCreateNestedManyWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateNestedManyWithoutUploaderInput>;
export const filesCreateNestedManyWithoutUploaderInputObjectZodSchema = makeSchema();
