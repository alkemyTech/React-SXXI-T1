import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { RegisterSchema } from "../utilities/schemas"
import { URLs } from "Services/ServicesURLS"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { routes } from "models/routes"
import publicService from "Services/publicApiService"
import { useState } from "react"

export const useRegister = () => {
  const navigate = useNavigate()

  const [loadingRegister, setLoadingRegister] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        setLoadingRegister(true)

        const fetchData = await publicService.post(URLs.register, values)

        if (fetchData && !fetchData.success) throw new Error(fetchData.message)

        formik.resetForm()
        feedbackUser("top-end", "success", fetchData.message)
        navigate(routes.AUTHLOGINFORM + "?auth=login", { replace: true })
      } catch (error) {
        console.error("error RegisterForm", error.message)
        feedbackUser("top-end", "error", error.message)
      } finally {
        setLoadingRegister(false)
      }
    },
  })

  return { formik, loadingRegister }
}
