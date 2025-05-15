import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { wait } from '@/utils/wait'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getTokenBalances: builder.query<boolean, string>({
      queryFn: async (address) => {
        console.log('address', address)
        await wait(10000)

        return {
          data: true,
        }
      },
    }),
  }),
})

export const { useGetTokenBalancesQuery } = generalApi
