'use client'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

const LoginLayout = ({ children }: Props) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin')
    }
  }, [isAuthenticated, router])

  return (
    <>{!isAuthenticated && children}</>
  )
}

export default LoginLayout