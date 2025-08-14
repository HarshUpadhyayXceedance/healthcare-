// Authentication utilities and types
// Replace API_BASE_URL with your actual backend URL
const API_BASE_URL = "https://your-api-endpoint.com/api" // TODO: Replace with actual API URL

export interface AuthUser {
  id: string
  email: string
  name: string // Changed from fullName to name for consistency
  role: "admin" | "doctor" | "patient"
  avatarUrl?: string
  isVerified: boolean
}

export interface LoginCredentials {
  email: string
  password: string
  role: string // Added role to login credentials
}

export interface SignupCredentials {
  email: string
  password: string
  fullName: string
  phone?: string
  role: "doctor" | "patient"
}

const MOCK_USERS: AuthUser[] = [
  {
    id: "1",
    email: "admin@healthcare.com",
    name: "Admin User",
    role: "admin",
    isVerified: true,
  },
  {
    id: "2",
    email: "doctor@healthcare.com",
    name: "Dr. Smith",
    role: "doctor",
    isVerified: true,
  },
  {
    id: "3",
    email: "patient@healthcare.com",
    name: "John Doe",
    role: "patient",
    isVerified: true,
  },
]

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<{ user: AuthUser; token: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    const user = MOCK_USERS.find((u) => u.email === credentials.email && u.role === credentials.role)

    if (!user || credentials.password !== "demo123") {
      throw new Error("Invalid credentials")
    }

    const token = `mock_token_${user.id}_${Date.now()}`
    return { user, token }
  }

  static async signup(credentials: SignupCredentials): Promise<{ user: AuthUser; token: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    const newUser: AuthUser = {
      id: `new_${Date.now()}`,
      email: credentials.email,
      name: credentials.fullName,
      role: credentials.role,
      isVerified: false,
    }

    const token = `mock_token_${newUser.id}_${Date.now()}`
    return { user: newUser, token }
  }

  static async logout(): Promise<void> {
    this.removeToken()
    this.removeUser()
  }

  static async getCurrentUser(): Promise<AuthUser | null> {
    const token = this.getToken()
    const user = this.getUser()

    if (!token || !user) return null

    return user
  }

  static setToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token)
    }
  }

  static getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token")
    }
    return null
  }

  static removeToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
    }
  }

  static setUser(user: AuthUser): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_user", JSON.stringify(user))
    }
  }

  static getUser(): AuthUser | null {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("auth_user")
      return userStr ? JSON.parse(userStr) : null
    }
    return null
  }

  static removeUser(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_user")
    }
  }
}
