import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { wait } from '@/utils/wait'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['TokenBalances'],
  endpoints: (builder) => ({
    getTokenBalances: builder.query<boolean, string>({
      queryFn: async (address) => {
        console.log('address', address)
        await wait(1000)

        return {
          data: true,
        }
      },
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
