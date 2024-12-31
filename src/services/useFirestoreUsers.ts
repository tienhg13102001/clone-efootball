import { userCollection } from "@/config/firebase"
import { addDoc, doc, getCountFromServer, getDocs, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}

export type UserDto = {
  role: number
  postStatus: boolean
  lastLogin: Date
  email: string
  applycationStats: boolean
  createdAt: Date
  informationConsent: boolean
  phoneNumber: string | null
}

export type User = {
  role: number
  postStatus: boolean
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
      const snapshot = await getCountFromServer(userCollection)
      setTotal(snapshot.data().count) // function getCountFromServer return data().count
    } catch (err) {
      console.error("Lỗi khi lấy tổng số bản ghi:", err)
    }
  }

  // Fectch all user not pagination
  const fetchUsers = async () => {
    try {
      setLoading(true)
      const usersData = getDocs(userCollection).then((snapshot) => {
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

  // push user to firestore
  const pushUser = async (user: Partial<UserDto>) => {
    try {
      const data = await addDoc(userCollection, user)
      console.log(data)
      return data
    } catch (err) {
      toast.error("Error when push user data")
      console.error("Error when push user data:", err)
      setError("Error when push user data")
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
    pushUser
  }
}
