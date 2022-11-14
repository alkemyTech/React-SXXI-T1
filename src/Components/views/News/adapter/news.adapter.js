export const newsAdapter = (data) => ({
  id: data.id || "",
  name: data.name,
  slug: data.slug || null,
  content: data.content,
  image: data.image,
  user_id: data.user_id,
  created_at: data.created_at || "",
  updated_at: data.updated_at || "",
  deleted_at: data.deleted_at || "",
  group_id: data.group_id || "",
});
