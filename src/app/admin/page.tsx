'use client'

import PhotoGrid from "@/components/share/photoGrid";
import Table from "@/components/share/table";
import { useAuth } from "@/contexts/AuthContext";
import { useFirestoreUsers, type User } from "@/services/useFirestoreUsers";
import { useFirestoreVideos } from "@/services/useFirestoreVideos";
import { USER_ROLE } from "@/utils/constant";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";


const columns = [
  { key: 'email', header: '이메일' },
  { key: 'phone', header: '전화번호' },
  { key: 'role', header: '역할' },
  { key: 'informationConsent', header: '정보동의' },
  { key: 'applycationStats', header: '통계' },
  { key: 'createdAt', header: '생성됨' },
  { key: 'birthDate', header: '생년월일' },
  { key: 'lastLogin', header: '로그인' },
];



export default function Home() {
  const { users } = useFirestoreUsers()
  const { videos } = useFirestoreVideos()
  const [currentPage, setCurrentPage] = useState<"table" | "video">("table");
  const router = useRouter();
  const [filterColumn, setFilterColumn] = useState(columns[1].key);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { logout } = useAuth()

  const filteredData = users.filter((item: User) => item.email.toLowerCase().includes(searchTerm.toLowerCase())).map((user: User) => (
    {
      ...user,
      role: user.role === USER_ROLE.ADMIN ? "관리자" : "회원",
      createdAt: dayjs(user.createdAt.seconds * 1000).format('HH:mm-DD/MM/YYYY') || 0,
      birthDate: user.birthDate.seconds ? dayjs(user.birthDate.seconds * 1000).format('DD/MM/YYYY') : "=",
      lastLogin: user.lastLogin?.seconds ? dayjs(user.lastLogin.seconds * 1000).format('DD/MM/YYYY') : "-",
    }
  ))

  const handleLogout = () => {
    logout().then(() => {
      toast.success('Logout successfully')
      router.push('/login')
    }).catch(() => {
      toast.error('Logout failed')
    })

  }


  return (
    <div className="p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          <Image src="/images/logo.png" alt="Football Logo" width={120} height={60} />
        </div>
        <div className="flex items-end gap-3 flex-col">
          <h1 className="font-bold text-xl text-end">관리자님 환영합니다.</h1>
          <button onClick={() => handleLogout()} className="text-sm text-gray-600 border px-3 py-2 border-gray-600">로그아웃</button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 h-11 border-t border-b-2 border-b-black mb-8 justify-center">
        <button
          className={`py-2 w-32 h-full flex items-center justify-center ${currentPage === "table" ? "bg-black text-white" : "text-gray-500"}`}
          onClick={() => setCurrentPage("table")}
        >
          응모자 정보
        </button>
        <button
          className={`py-2 w-32 h-full flex items-center justify-center ${currentPage === "video" ? "bg-black text-white" : "text-gray-500"}`}
          onClick={() => setCurrentPage("video")}
        >
          동영상
        </button>
      </div>

      {/* Content */}
      {currentPage === "table" ? (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">응모자 정보</h1>
          <div className="flex items-center my-8">
            <select
              className="border p-2 mr-2 w-52"
              value={filterColumn}
              onChange={(e) => setFilterColumn(e.target.value)}
            >
              {columns.slice(1).map((col) => (
                <option key={col.key} value={col.key}>
                  {col.header}
                </option>
              ))}
            </select>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="border p-2 w-80 h-10"
                value={searchInput}
                onChange={(e) => {
                  if (e.target.value === "") setSearchTerm("");
                  setSearchInput(e.target.value);
                }}
              />
              <button
                className="h-10 px-4 py-2 bg-gray-500 text-white"
                onClick={() => setSearchTerm(searchInput)}
              >
                검색
              </button>
            </div>
          </div>
          <div>
            <Table data={filteredData} columns={columns} />
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">동영상</h1>
          <PhotoGrid videos={videos} />
        </div>
      )}
    </div>
  );
}
