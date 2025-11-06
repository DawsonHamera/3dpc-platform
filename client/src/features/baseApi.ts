import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  EndpointBuilder,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import type { RootState } from '../redux/store';
import { selectAccessToken } from './auth/authSlice';

//Prod baseUrl: 'https://3dpcapi.hamera.com/public/index.php/'

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = selectAccessToken(getState() as RootState);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

type CrudBaseEndpoints<T> = {
  getAll: QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, T[], string>;
  getOne: QueryDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, T, string>;
  create: MutationDefinition<Partial<T>, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, T, string>;
  update: MutationDefinition<{ id: number; body: Partial<T> }, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, T, string>;
  delete: MutationDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, { success: boolean }, string>;
};

type CrudApiOptions<T, ExtraEndpoints> = {
  reducerPath: string;
  tagType: string;
  endpoint: string;
  extraEndpoints?: (
    build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, string, string>
  ) => ExtraEndpoints;
};

export function createCrudApi<
  T extends { id: number },
  ExtraEndpoints extends Record<string, any> = {}
>(options: CrudApiOptions<T, ExtraEndpoints>) {
  const { reducerPath, tagType, endpoint, extraEndpoints } = options;

  return createApi({
    reducerPath,
    baseQuery: baseQueryWithAuth,
    tagTypes: [tagType],
    endpoints: (build) => {
      const baseEndpoints: CrudBaseEndpoints<T> = {
        getAll: build.query<T[], void>({
          query: () => `/${endpoint}`,
          providesTags: (result) => [tagType]
        }),
        getOne: build.query<T, number>({
          query: (id) => `/${endpoint}/${id}`,
          providesTags: (result, error, id) => [{ type: tagType, id }],
        }),
        create: build.mutation<T, Partial<T>>({
          query: (body) => ({
            url: `/${endpoint}`,
            method: 'POST',
            body,
          }),
          invalidatesTags: [{ type: tagType, id: 'LIST' }],
        }),
        update: build.mutation<T, { id: number; body: Partial<T> }>({
          query: ({ id, body }) => ({
            url: `/${endpoint}/${id}`,
            method: 'PATCH',
            body,
          }),
          invalidatesTags: (result, error, { id }) => [{ type: tagType, id }],
        }),
        delete: build.mutation<{ success: boolean }, number>({
          query: (id) => ({
            url: `/${endpoint}/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags: (result, error, id) => [
            { type: tagType, id },
            { type: tagType, id: 'LIST' },
          ],
        }),
      };

      const extras = extraEndpoints ? extraEndpoints(build) : {} as ExtraEndpoints;
      return {
        ...baseEndpoints,
        ...extras,
      };
    },
  });
}
