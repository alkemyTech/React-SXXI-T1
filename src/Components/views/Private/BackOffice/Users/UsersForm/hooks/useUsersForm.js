import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { usersValidationSchema } from "../../utilities/utilities";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccessError } from "utilities/alerts/feedbackUser.util";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";

export const useUsersForm = () => {
  const { id } = useParams();
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
    if (id) {
      privateService
        .get(`${URLs.users}/${id}`)
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
  }, [id]);

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

  const backURL = "/backoffice";

  const onSubmit = async () => {
    const { name, email, role_id, password } = values;
    const body = { name, email, role_id, password, image: imageBase64 };

    if (id) {
      const bodyEdit = {
        ...user,
        ...body,
        image: imageBase64 || (await user.image),
      };
      const alertWarning = await AlertWarning("¿Estas segura/o de enviarlo?");

      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await privateService.put(URLs.users, id, bodyEdit);
        if (apiResponse.data.success) {
          setLoading(false);
          await AlertSuccessError("center", "success", "Operación éxitosa");
          navigate(backURL);
        } else {
          await AlertSuccessError("center", "success", "Operación éxitosa");
        }
      }
    } else {
      const alertWarning = await AlertWarning("¿Estas segura/o de enviarlo?");

      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await privateService.post(URLs.users, body);
        if (apiResponse.data.success) {
          setLoading(false);
          await AlertSuccessError("center", "success", "Operación éxitosa");
          navigate(backURL);
        } else {
          await AlertSuccessError("center", "success", "Operación éxitosa");
        }
      }
    }
  };

  const validationSchema = usersValidationSchema(id);

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

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

  const cancel = () => {
    navigate(backURL);
  };

  return {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    user,
    loading,
    formik,
    cancel,
    setImageBase64,
    setFieldValue,
    roles,
  };
};
