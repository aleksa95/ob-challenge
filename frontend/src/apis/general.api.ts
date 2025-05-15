import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { wait } from '@/utils/wait'
import { GetTokenBalancesResponse } from './types/general.api.types'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['TokenBalances'],
  endpoints: (builder) => ({
    getTokenBalances: builder.query<GetTokenBalancesResponse, string>({
      queryFn: async (address) => {
        console.log('address', address)
        await wait(1000)

        return {
          data: {
            ETH: '123456.789876',
            LINK: '0.0123456',
            USDC: '0.0000123456',
          },
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
