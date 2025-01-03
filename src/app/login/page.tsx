'use client'
import { auth } from '@/config/firebase';
import { useAuthService } from '@/services/useAuthService';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const Login = () => {
    const { loading, handleLogin } = useAuthService();
    const [adminId, setAdminId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            await handleLogin(adminId, password);
            if (auth.currentUser) {
                router.push('/admin');
                setAdminId('');
                setPassword('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] h-[500px]">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/favicon.ico"
                        alt="Football Logo"
                        width={60}
                        height={60}
                        className='object-contain'
                    />
                </div>
                <h2 className="text-center text-2xl font-semibold mb-6 text-gray-600">관리자 로그인</h2>
                <form onSubmit={handleSubmit} className='border-y-2 border-y-gray-300 py-[30px] '>
                    <div className="mb-4 flex space-x-4 px-5">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-600" htmlFor="adminId">
                                관리자아이디
                            </label>
                            <input
                                type="text"
                                id="adminId"
                                name="adminId"
                                value={adminId}
                                onChange={(e) => setAdminId(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
                                비밀번호
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-36 py-2 bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 mx-auto"
                        >
                            관리자 로그인
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
