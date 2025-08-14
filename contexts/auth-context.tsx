"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { type AuthUser, AuthService, type LoginCredentials, type SignupCredentials } from "@/lib/auth"

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  login: (email: string, password: string, role: string) => Promise<boolean>
  signup: (credentials: SignupCredentials) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  hasRole: (role: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const currentUser = await AuthService.getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      console.error("Auth check failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    try {
      const credentials: LoginCredentials = { email, password, role }
      const { user, token } = await AuthService.login(credentials)
      AuthService.setToken(token)
      AuthService.setUser(user)
      setUser(user)
      return true
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const signup = async (credentials: SignupCredentials): Promise<boolean> => {
    try {
      const { user, token } = await AuthService.signup(credentials)
      AuthService.setToken(token)
      AuthService.setUser(user)
      setUser(user)
      return true
    } catch (error) {
      console.error("Signup failed:", error)
      return false
    }
  }

  const logout = () => {
    AuthService.logout()
    setUser(null)
    // Redirect to home page
    window.location.href = "/"
  }

  const isAuthenticated = !!user
  const hasRole = (role: string) => user?.role === role

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
