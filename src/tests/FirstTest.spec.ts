// eslint-disable-next-line import/extensions
import { User } from '../models/User'

test('it shoukd bu ok', () => {
  const user = new User()

  user.name = 'Diego'

  expect(user.name).toEqual('Diego')
})
