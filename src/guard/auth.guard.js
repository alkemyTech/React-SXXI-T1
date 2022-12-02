import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad"
import { ROLE } from "MOCKAUTH"
import { routes } from "models/routes"
import { useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

const checkAuthorization = (role) => (role === "admin" ? <Outlet /> : <Navigate replace to={routes.HOME} />)

const AuthGuard = () => {
  console.log("auth guard")
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(false)
    }, 500)
  }, [])

  if (authLoading)
    return (
      <div>
        <SpinnerLoad />
      </div>
    )

  return ROLE ? checkAuthorization(ROLE) : <Navigate replace to={routes.AUTHLOGINFORM} />
}

export default AuthGuard
