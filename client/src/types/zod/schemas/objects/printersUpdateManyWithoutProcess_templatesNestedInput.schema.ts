import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutProcess_templatesInputObjectSchema as printersCreateWithoutProcess_templatesInputObjectSchema } from './printersCreateWithoutProcess_templatesInput.schema';
import { printersUncheckedCreateWithoutProcess_templatesInputObjectSchema as printersUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedCreateWithoutProcess_templatesInput.schema';
import { printersCreateOrConnectWithoutProcess_templatesInputObjectSchema as printersCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './printersCreateOrConnectWithoutProcess_templatesInput.schema';
import { printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema as printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './printersUpsertWithWhereUniqueWithoutProcess_templatesInput.schema';
import { printersCreateManyProcess_templatesInputEnvelopeObjectSchema as printersCreateManyProcess_templatesInputEnvelopeObjectSchema } from './printersCreateManyProcess_templatesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema as printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './printersUpdateWithWhereUniqueWithoutProcess_templatesInput.schema';
import { printersUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema as printersUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema } from './printersUpdateManyWithWhereWithoutProcess_templatesInput.schema';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => printersUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => printersScalarWhereInputObjectSchema), z.lazy(() => printersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const printersUpdateManyWithoutProcess_templatesNestedInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithoutProcess_templatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithoutProcess_templatesNestedInput>;
export const printersUpdateManyWithoutProcess_templatesNestedInputObjectZodSchema = makeSchema();
