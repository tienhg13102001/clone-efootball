

import { userCollectrion } from "@/config/firebase";
import { getCountFromServer, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

type FirestoreTimestamp = {
  seconds: number;
  nanoseconds: number;
};

export type User = {
  role: number;
  birthDate: FirestoreTimestamp;
  lastLogin: FirestoreTimestamp;
  email: string;
  applycationStats: boolean;
  createdAt: FirestoreTimestamp;
  informationConsent: boolean;
  phoneNumber: string | null;
};

export const useFirestoreUsers = () => {

  const [users, setUsers] = useState<User[]>([]); // Danh sách người dùng
  const [total, setTotal] = useState<number>(0); // Tổng số bản ghi// Document cuối cùng của trang hiện tại
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState<string | null>(null); // Thông báo lỗi nếu có

  // Hàm lấy tổng số bản ghi
  const fetchTotalCount = async () => {
    try {
      const snapshot = await getCountFromServer(userCollectrion);
      setTotal(snapshot.data().count); // Lấy tổng số bản ghi
    } catch (err) {
      console.error("Lỗi khi lấy tổng số bản ghi:", err);
    }
  };

  // Fectch all user not pagination
  const fetchUsers = async () => {
    try {
      setLoading(true);
      console.log(userCollectrion)
      const usersData = getDocs(userCollectrion).then((snapshot) => {
        const usersList = snapshot.docs.map(doc => doc.data() as User);
        setUsers(usersList);
        console.log("users", usersList);
      });
      return usersData;
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu người dùng:", err);
      setError("Lỗi khi lấy dữ liệu người dùng");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTotalCount();
  }, [])


  return {
    users,
    total,
    loading,
    error,
    fetchTotalCount,
    fetchUsers
  };
};