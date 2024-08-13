import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      phone: '+1 123-456-7890',
    },
    status: 'pending', // or 'canceled', 'processing', 'delivering', 'delivered'
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: { name: 'Pepperoni Pizza' },
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 2,
        product: { name: 'Marguerita Pizza' },
      },
    ],
  })
})
