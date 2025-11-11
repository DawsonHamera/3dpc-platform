import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutProcess_templatesInputObjectSchema as printersUpdateWithoutProcess_templatesInputObjectSchema } from './printersUpdateWithoutProcess_templatesInput.schema';
import { printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema as printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedUpdateWithoutProcess_templatesInput.schema';
import { printersCreateWithoutProcess_templatesInputObjectSchema as printersCreateWithoutProcess_templatesInputObjectSchema } from './printersCreateWithoutProcess_templatesInput.schema';
import { printersUncheckedCreateWithoutProcess_templatesInputObjectSchema as printersUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedCreateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => printersUpdateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema)]),
  create: z.union([z.lazy(() => printersCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutProcess_templatesInput>;
export const printersUpsertWithWhereUniqueWithoutProcess_templatesInputObjectZodSchema = makeSchema();
