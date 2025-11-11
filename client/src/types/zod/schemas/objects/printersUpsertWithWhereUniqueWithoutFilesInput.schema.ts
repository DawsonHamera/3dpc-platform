import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutFilesInputObjectSchema as printersUpdateWithoutFilesInputObjectSchema } from './printersUpdateWithoutFilesInput.schema';
import { printersUncheckedUpdateWithoutFilesInputObjectSchema as printersUncheckedUpdateWithoutFilesInputObjectSchema } from './printersUncheckedUpdateWithoutFilesInput.schema';
import { printersCreateWithoutFilesInputObjectSchema as printersCreateWithoutFilesInputObjectSchema } from './printersCreateWithoutFilesInput.schema';
import { printersUncheckedCreateWithoutFilesInputObjectSchema as printersUncheckedCreateWithoutFilesInputObjectSchema } from './printersUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => printersUpdateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => printersCreateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const printersUpsertWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutFilesInput>;
export const printersUpsertWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
