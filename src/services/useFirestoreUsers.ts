import { userCollectrion } from "@/config/firebase"
import { getCountFromServer, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}

export type User = {
  role: number
  birthDate: FirestoreTimestamp
  lastLogin: FirestoreTimestamp
  email: string
  applycationStats: boolean
  createdAt: FirestoreTimestamp
  informationConsent: boolean
  phoneNumber: string | null
}

export const useFirestoreUsers = () => {
  const [users, setUsers] = useState<User[]>([]) // users list
  const [total, setTotal] = useState<number>(0) // total users
  const [loading, setLoading] = useState<boolean>(true) // status loading
  const [error, setError] = useState<string | null>(null) // error message

  // function fetch total count
  const fetchTotalCount = async () => {
    try {
      const snapshot = await getCountFromServer(userCollectrion)
      setTotal(snapshot.data().count) // function getCountFromServer return data().count
    } catch (err) {
      console.error("Lỗi khi lấy tổng số bản ghi:", err)
    }
  }

  // Fectch all user not pagination
  const fetchUsers = async () => {
    try {
      setLoading(true)
      const usersData = getDocs(userCollectrion).then((snapshot) => {
        const usersList = snapshot.docs.map((doc) => doc.data() as User)
        setUsers(usersList)
      })
      return usersData
    } catch (err) {
      console.error("Error when get users data:", err)
      setError("Error when get users data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchTotalCount()
  }, [])

  return {
    users,
    total,
    loading,
    error,
    fetchTotalCount,
    fetchUsers,
  }
}
