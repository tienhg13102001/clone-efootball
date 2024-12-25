'use client'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const LoginLayout = ({ children }: Props) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter();

  if (isAuthenticated) {
    router.push('/admin')
  }

  return (
    <>{!isAuthenticated && children}</>
  )
}

export default LoginLayout