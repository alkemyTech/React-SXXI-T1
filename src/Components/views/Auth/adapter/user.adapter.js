import { roleUser } from "../utilities/schemas";

export const userAdapter = async (data) => {
  const role = await roleUser(data.user.role_id);

  return {
    id: data.user.id,
    email: data.user.email,
    role,
    name: data.user.name,
    image: data.user.profile_image,
    userToken: data.token,
  };
};
