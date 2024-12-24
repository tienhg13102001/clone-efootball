import { auth, db } from "@/config/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { USER_ROLE } from "@/utils/constant";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useAuthService = () => {
    const { login, signup } = useAuth();

    const handleLogin = async (email: string, password: string) => {
        try {
            await login(email, password)
            const user = auth.currentUser;
            if (user) {
                const findedUser = await getDoc(doc(db, 'users', user.uid))
                if (findedUser) {
                    await setDoc(doc(db, 'users', user.uid), {
                        ...findedUser.data(),
                        lastLogin: new Date(),
                        createdAt: user.metadata.creationTime
                    }, { merge: true })
                } else {
                    await setDoc(doc(db, 'users', user.uid), {
                        email: user.email,
                        createdAt: new Date(),
                        role: USER_ROLE.USER
                    }, { merge: true })
                }
                console.log('Đăng nhập với ID:', email);
            };
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignUp = async (email: string, password: string) => {
        try {
            await signup(email, password)
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    createdAt: new Date(),
                    role: USER_ROLE.USER
                }, { merge: true })
                console.log('Đăng ký với ID:', email);
            };
        } catch (error) {
            console.error(error)
        }
    }


    return {
        handleLogin,
        handleSignUp
    }
}