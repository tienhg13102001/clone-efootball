import { videosCollection } from "@/config/firebase"
import { getCountFromServer, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

export type Video = {
  thumbnail: string
  embedUrl: string
  post_avatar: string
  post_user: string
}

export const useFirestoreVideos = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true) // status loading
  const [error, setError] = useState<string | null>(null) // error message

  // function fetch total count
  const fetchTotalCount = async () => {
    try {
      const snapshot = await getCountFromServer(videosCollection)
      setTotal(snapshot.data().count) // function getCountFromServer return data().count
    } catch (err) {
      console.error("Lỗi khi lấy tổng số bản ghi:", err)
    }
  }

  // Fectch all user not pagination
  const fetchVideos = async () => {
    try {
      setLoading(true)
      const usersData = getDocs(videosCollection).then((snapshot) => {
        const usersList = snapshot.docs.map((doc) => doc.data() as Video)
        setVideos(usersList)
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
    fetchVideos()
    fetchTotalCount()
  }, [])

  return {
    videos,
    total,
    loading,
    error,
    fetchTotalCount,
    fetchVideos,
  }
}
