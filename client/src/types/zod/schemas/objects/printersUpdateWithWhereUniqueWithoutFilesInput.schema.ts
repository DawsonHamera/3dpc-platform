import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutFilesInputObjectSchema as printersUpdateWithoutFilesInputObjectSchema } from './printersUpdateWithoutFilesInput.schema';
import { printersUncheckedUpdateWithoutFilesInputObjectSchema as printersUncheckedUpdateWithoutFilesInputObjectSchema } from './printersUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const printersUpdateWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutFilesInput>;
export const printersUpdateWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
