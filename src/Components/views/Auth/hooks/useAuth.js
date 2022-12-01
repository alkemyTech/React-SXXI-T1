import { routes } from "models/routes"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { authSchemas } from "../utilities/schemas"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

export const useAuth = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const whatForm = params.get("auth")
  const { loadingUser, user } = useSelector((store) => store.user)

  useEffect(() => {
    if (user.email) navigate(routes.HOME, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const whatFormRender =
    whatForm === "login" ? <LoginForm text={authSchemas[whatForm]["buttonText"]} /> : <RegisterForm text={authSchemas[whatForm]["buttonText"]} />

  return { whatFormRender, whatForm, loadingUser }
}
