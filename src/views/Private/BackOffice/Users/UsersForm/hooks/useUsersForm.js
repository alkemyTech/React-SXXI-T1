import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { usersValidationSchema } from "../../utilities/utilities";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccessError, feedbackUser } from "utilities/alerts/feedbackUser.util";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { privateRoutes } from "models/routes";

export const useUsersForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    role_id: "",
    profile_image: "",
    password: "",
  });

  const initialValues = {
    name: "",
    email: "",
    role_id: "",
    profile_image: "",
    password: "",
  };

  useEffect(() => {
    if (userId) {
      privateService
        .get(`${URLs.users}/${userId}`)
        .then((res) => {
          const { data } = res;
          setUser({
            name: data.name,
            email: data.email,
            role_id: data.role_id,
            profile_image: data.profile_image,
            password: data.password,
          });
        })
        .catch(() => {
          AlertSuccessError("center", "error", "Ha ocurrido un error");
        });
    }
  }, [userId]);

  useEffect(() => {
    privateService.get(URLs.role).then((res) => {
      const { data } = res;
      const roles = data.map((element) => {
        return {
          id: element.id,
          name: element.name,
        };
      });
      setRoles(roles);
    });
  }, []);

  const validationSchema = usersValidationSchema(userId);

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  async function onSubmit() {
    try {
      setLoading(true);

      const questionText = userId ? "Deseas editar este usuario?" : "Deseas crear este usuario?";
      const isConfirm = await handleUserConfirm(questionText);

      if (!isConfirm) return;

      let apiResponse;
      const { name, email, role_id, password } = values;
      const body = { name, email, role_id, password, image: imageBase64 };

      if (userId) {
        const bodyEdit = {
          ...user,
          ...body,
          image: imageBase64 || (await user.image),
        };

        apiResponse = await privateService.put(URLs.users, userId, bodyEdit);
      } else apiResponse = await privateService.post(URLs.users, body);

      if (!apiResponse.success) throw new Error(apiResponse.message);

      setLoading(false);

      const actionMsg = userId ? "Usuario editado correctamente" : "Usuario creado correctamente";
      feedbackUser("top-end", "success", actionMsg);

      navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.USERS, { replace: "true" });
    } catch (error) {
      console.error("error", error.message);
      feedbackUser("top-end", "error", error.message);
    } finally {
      setLoading(false);
    }
  }

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setFieldValue("name", user.name);
      setFieldValue("email", user.email);
      setFieldValue("role_id", user.role_id);
      setFieldValue("profile_image", user.profile_image);
      setFieldValue("password", user.password);
    }
  }, [user, setFieldValue]);

  return {
    userId,
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    user,
    loading,
    formik,
    setImageBase64,
    setFieldValue,
    roles,
  };
};
