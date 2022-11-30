import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import { authSchemas } from "../utilities/schemas"

export const useAuth = () => {
  const [params] = useSearchParams()
  const whatForm = params.get("auth")
  const [loadingAuth, setLoadingAuth] = useState(false)

  const handleLoadingAuth = (value) => setLoadingAuth(value)

  // const whatFormRender =
  //   whatForm === "login" ? (
  //     <LoginForm text={authSchemas[whatForm]["buttonText"]} loadingAuth={loadingAuth} handleLoadingAuth={handleLoadingAuth} />
  //   ) : (
  //     <RegisterForm text={authSchemas[whatForm]["buttonText"]} loadingAuth={loadingAuth} handleLoadingAuth={handleLoadingAuth} />
  //   )

  return {
    // whatFormRender,
    whatForm,
    loadingAuth,
  }
}
