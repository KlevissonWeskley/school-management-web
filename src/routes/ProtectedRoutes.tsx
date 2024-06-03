import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAuth()

  if (!accessToken) {
    return <Navigate to="/" />
  }

  return children
}
