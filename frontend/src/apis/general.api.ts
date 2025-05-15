import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetTokenBalancesResponse } from './types/general.api.types'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['TokenBalances'],
  endpoints: (builder) => ({
    getTokenBalances: builder.query<GetTokenBalancesResponse, string>({
      query: (address) => ({ url: `/balance/${address}` }),
      providesTags: ['TokenBalances'],
    }),
    invalidateTokenBalances: builder.mutation({
      queryFn: () => ({ data: null }),
      invalidatesTags: ['TokenBalances'],
    }),
  }),
})

export const { useGetTokenBalancesQuery, useInvalidateTokenBalancesMutation } =
  generalApi
