import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutProcess_templatesInputObjectSchema as printersUpdateWithoutProcess_templatesInputObjectSchema } from './printersUpdateWithoutProcess_templatesInput.schema';
import { printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema as printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema } from './printersUncheckedUpdateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateWithoutProcess_templatesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutProcess_templatesInput>;
export const printersUpdateWithWhereUniqueWithoutProcess_templatesInputObjectZodSchema = makeSchema();
