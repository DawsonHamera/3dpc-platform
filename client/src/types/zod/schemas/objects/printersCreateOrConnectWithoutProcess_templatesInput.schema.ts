import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersCreateWithoutProcess_templatesInputObjectSchema as printersCreateWithoutProcess_templatesInputObjectSchema } from './printersCreateWithoutProcess_templatesInput.schema';
import { printersUncheckedCreateWithoutProcess_templatesInputObjectSchema as printersUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedCreateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const printersCreateOrConnectWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersCreateOrConnectWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateOrConnectWithoutProcess_templatesInput>;
export const printersCreateOrConnectWithoutProcess_templatesInputObjectZodSchema = makeSchema();
