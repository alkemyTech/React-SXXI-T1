import React from "react"
import { useFormik } from "formik"
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton"
import { LoginSchema } from "../utilities/schemas"
import InputAuth from "./InputAuth"
import { FormAuth } from "../styled.components/Auth.styled"
import publicService from "Services/publicApiService"
import { URLs } from "Services/ServicesURLS"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { useDispatch, useSelector } from "react-redux"
import { userFailure, userRequest, userSuccess } from "redux/states/user"

const LoginForm = ({ text, handleLoadingAuth }) => {
  const { loadingUser, user } = useSelector((store) => store.user)

  const dispatch = useDispatch()

  console.log({ loadingUser, user })

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

        // UT - user token
        localStorage.setItem("UT", fetchData.data.token)

        const aditionalMsg = ` - Bienvenido ${fetchData.data.user.email}`
        feedbackUser("top-end", "success", fetchData.message + aditionalMsg)
        console.log({ fetchData })
        // formik.resetForm()
        dispatch(userSuccess())
        // Guardar en store - Navegar al dashboard
      } catch (error) {
        console.error("error LoginForm", error.message)
        dispatch(userFailure())
        feedbackUser("top-end", "error", error.message)
      }
    },
  })

  return (
    <FormAuth
      className="form-container col col-10 my-3 p-0 p-sm-1 d-flex flex-column justify-content-center align-items-center"
      onSubmit={formik.handleSubmit}
    >
      <InputAuth
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Ingresar Email"
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
      <CustomButton buttonClass="col col-8" type="submit" background="success" color="success" text={text} />
    </FormAuth>
  )
}

export default LoginForm
