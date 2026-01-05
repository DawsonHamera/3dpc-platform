import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";
import type { printer_status } from "@prisma/client";

// Response type with relations
export type Printer = Prisma.printerGetPayload<{
    include: { image_file: true; loaded_material: true };
}>;

// Input types
export type CreatePrinter = Prisma.printerCreateInput;
export type UpdatePrinter = Prisma.printerUpdateInput;
export type PrinterStatus = printer_status;

export const printersApi = createApi({
    reducerPath: "printersApi",
    baseQuery: baseQuery,
    tagTypes: ["Printer"],
    endpoints: (builder) => ({
        getPrinters: builder.query<Printer[], void>({
            query: () => "printers",
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: "Printer" as const,
                              id,
                          })),
                          { type: "Printer", id: "LIST" },
                      ]
                    : [{ type: "Printer", id: "LIST" }],
        }),
        getPrinterById: builder.query<Printer, number>({
            query: (id) => `printers/${id}`,
            providesTags: (result, error, id) => [{ type: "Printer", id }],
        }),
        createPrinter: builder.mutation<Printer, CreatePrinter>({
            query: (newPrinter) => ({
                url: "printers",
                method: "POST",
                body: newPrinter,
            }),
            invalidatesTags: [{ type: "Printer", id: "LIST" }],
        }),
        updatePrinter: builder.mutation<
            Printer,
            { id: number } & UpdatePrinter
        >({
            query: ({ id, ...updatedPrinter }) => ({
                url: `printers/${id}`,
                method: "PATCH",
                body: updatedPrinter,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Printer", id },
                { type: "Printer", id: "LIST" },
            ],
        }),
        deletePrinter: builder.mutation<void, number>({
            query: (id) => ({
                url: `printers/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "Printer", id },
                { type: "Printer", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetPrintersQuery,
    useGetPrinterByIdQuery,
    useCreatePrinterMutation,
    useUpdatePrinterMutation,
    useDeletePrinterMutation,
} = printersApi;
