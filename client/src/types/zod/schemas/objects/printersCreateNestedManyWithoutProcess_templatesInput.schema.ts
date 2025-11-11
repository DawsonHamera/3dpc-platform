import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutProcess_templatesInputObjectSchema as printersCreateWithoutProcess_templatesInputObjectSchema } from './printersCreateWithoutProcess_templatesInput.schema';
import { printersUncheckedCreateWithoutProcess_templatesInputObjectSchema as printersUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedCreateWithoutProcess_templatesInput.schema';
import { printersCreateOrConnectWithoutProcess_templatesInputObjectSchema as printersCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './printersCreateOrConnectWithoutProcess_templatesInput.schema';
import { printersCreateManyProcess_templatesInputEnvelopeObjectSchema as printersCreateManyProcess_templatesInputEnvelopeObjectSchema } from './printersCreateManyProcess_templatesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const printersCreateNestedManyWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersCreateNestedManyWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateNestedManyWithoutProcess_templatesInput>;
export const printersCreateNestedManyWithoutProcess_templatesInputObjectZodSchema = makeSchema();
