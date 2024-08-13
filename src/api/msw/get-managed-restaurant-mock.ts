import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'managed-restaurant-id',
    name: 'Example Restaurant',
    description: 'This is an example restaurant.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
