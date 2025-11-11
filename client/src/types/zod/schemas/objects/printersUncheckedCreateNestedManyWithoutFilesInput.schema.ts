import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutFilesInputObjectSchema as printersCreateWithoutFilesInputObjectSchema } from './printersCreateWithoutFilesInput.schema';
import { printersUncheckedCreateWithoutFilesInputObjectSchema as printersUncheckedCreateWithoutFilesInputObjectSchema } from './printersUncheckedCreateWithoutFilesInput.schema';
import { printersCreateOrConnectWithoutFilesInputObjectSchema as printersCreateOrConnectWithoutFilesInputObjectSchema } from './printersCreateOrConnectWithoutFilesInput.schema';
import { printersCreateManyFilesInputEnvelopeObjectSchema as printersCreateManyFilesInputEnvelopeObjectSchema } from './printersCreateManyFilesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutFilesInputObjectSchema), z.lazy(() => printersCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyFilesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const printersUncheckedCreateNestedManyWithoutFilesInputObjectSchema: z.ZodType<Prisma.printersUncheckedCreateNestedManyWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedCreateNestedManyWithoutFilesInput>;
export const printersUncheckedCreateNestedManyWithoutFilesInputObjectZodSchema = makeSchema();
