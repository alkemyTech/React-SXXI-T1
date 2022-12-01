import { roleUser } from "../utilities/schemas"

export const userAdapter = (data) => {
  const role = roleUser[data.user.role_id]["type"] || undefined

  return {
    id: data.user.id,
    email: data.user.email,
    role,
    name: data.user.name,
    userToken: data.token,
  }
}
