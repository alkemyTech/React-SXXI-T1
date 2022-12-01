import React from "react"
import { useFormik } from "formik"
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton"
import InputAuth from "./InputAuth"
import { RegisterSchema } from "../utilities/schemas"
import { FormAuth } from "../styled.components/Auth.styled"
import { URLs } from "Services/ServicesURLS"
import publicService from "Services/publicApiService"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { useNavigate } from "react-router-dom"
import { routes } from "models/routes"

const RegisterForm = ({ text, handleLoadingAuth }) => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        handleLoadingAuth(true)

        const fetchData = await publicService.post(URLs.register, values)

        if (fetchData && !fetchData.success) throw new Error(fetchData.message)

        formik.resetForm()
        feedbackUser("top-end", "success", fetchData.message)
        navigate(routes.AUTHLOGINFORM + "?auth=login", { replace: true })
      } catch (error) {
        console.error("error RegisterForm", error.message)
        feedbackUser("top-end", "error", error.message)
      } finally {
        handleLoadingAuth(false)
      }
    },
  })

  return (
    <FormAuth
      className="form-container col col-10 my-3 p-0 p-sm-1 d-flex flex-column justify-content-center align-items-center"
      onSubmit={formik.handleSubmit}
    >
      <InputAuth
        value={formik.values.name}
        type="text"
        name="name"
        placeholder="Ingresar nombre"
        isTouched={formik.touched.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
      />

      <InputAuth
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Ingresar email"
        isTouched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.password}
        type="password"
        name="password"
        placeholder="Ingresar constraseña"
        isTouched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.confirmPassword}
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        isTouched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword}
        onChange={formik.handleChange}
      />
      <CustomButton buttonClass="col col-8" type="submit" background="success" color="success" text={text} />
    </FormAuth>
  )
}

export default RegisterForm
