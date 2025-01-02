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
  { key: 'name', header: '이름' },
  { key: 'phoneNumber', header: '전화번호' },
  { key: 'email', header: '이메일' },
  // { key: 'role', header: '역할' },
  // { key: 'informationConsent', header: '정보동의' },
  // { key: 'applycationStats', header: '통계' },
  { key: 'createdAt', header: '응모 날짜' },
  { key: 'postStatus', header: '게시 ON/OFF' },
  // { key: 'lastLogin', header: '로그인' },
];



export default function Home() {
  const { users } = useFirestoreUsers()
  const { videos } = useFirestoreVideos()
  const [currentPage, setCurrentPage] = useState<"table" | "video">("table");
  const router = useRouter();
  const [filterColumn, setFilterColumn] = useState(columns[0].key);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { logout } = useAuth()

  console.log(filterColumn, searchTerm)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredData = users.filter((item: any) => item[`${filterColumn}`]?.toLowerCase().includes(searchTerm.toLowerCase())).map((user: User) => (
    {
      ...user,
      postStatus: user.postStatus ? "ON" : "OFF",
      role: user.role === USER_ROLE.ADMIN ? "관리자" : "회원",
      createdAt: dayjs(user.createdAt.seconds * 1000).format('HH:mm-DD/MM/YYYY') || 0,
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
          <Image src="/favicon.ico" alt="Football Logo" width={60} height={60} className="object-contain" />
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
              className="border p-2 mr-2 w-52 bg-[length:16px] bg-[center_right_0.75rem] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] appearance-none"
              value={filterColumn}
              onChange={(e) => setFilterColumn(e.target.value)}
            >
              {columns.map((col) => (
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
