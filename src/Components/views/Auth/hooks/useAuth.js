import { useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import { authSchemas } from "../utilities/schemas"

export const useAuth = () => {
  const [params] = useSearchParams()
  const whatForm = params.get("auth")
  const { loadingUser, user } = useSelector((store) => store.user)

  console.log("checquear si existe uruaio mandarlo a home", { user })

  const whatFormRender =
    whatForm === "login" ? <LoginForm text={authSchemas[whatForm]["buttonText"]} /> : <RegisterForm text={authSchemas[whatForm]["buttonText"]} />

  return { whatFormRender, whatForm, loadingUser }
}
