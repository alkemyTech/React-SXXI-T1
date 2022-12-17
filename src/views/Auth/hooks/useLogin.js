import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginSchema } from "../utilities/schemas"
import { URLs } from "Services/ServicesURLS"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { userAdapter } from "../adapter/user.adapter"
import { userFailure, userRequest, userResetNotification, userSuccess } from "redux/states/user"
import publicService from "Services/publicApiService"

export const useLogin = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        dispatch(userRequest())

        const fetchData = await publicService.post(URLs.login, values)

        if (fetchData && !fetchData.success) throw new Error(fetchData.message)

        const aditionalMsg = ` - Bienvenido ${fetchData.data.user.email}`

        feedbackUser("top-end", "success", fetchData.message + aditionalMsg)

        const userAdapting = await userAdapter(fetchData.data)
        dispatch(userSuccess(userAdapting))

        formik.resetForm()

        const redirect = userAdapting.role.to

        navigate("/" + redirect, { replace: true })
      } catch (error) {
        console.error("error LoginForm", error.message)
        dispatch(userFailure())
        feedbackUser("top-end", "error", error.message)
      } finally {
        dispatch(userResetNotification())
      }
    },
  })

  return { formik }
}
