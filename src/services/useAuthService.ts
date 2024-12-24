import { auth, db } from "@/config/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { USER_ROLE } from "@/utils/constant";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const useAuthService = () => {
    const { login, signup } = useAuth();

    const handleLogin = async (email: string, password: string) => {
        try {
            await login(email, password);

            const user = auth.currentUser;
            if (!user) {
                toast.error('Incorrect email or password!!');
                return;
            };

            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);
            const userData = userDoc.data();
            const newUserData = userData ?? {
                email: user.email,
                createdAt: new Date(),
                role: USER_ROLE.USER,
                phoneNumber: user.phoneNumber,
                birthDate: new Date(),
                informationConsent: false,
                applicationStats: false,
                lastLogin: new Date()
            };

            await setDoc(userRef, { ...newUserData, lastLogin: new Date() }, { merge: true });
            toast.success('Login successfully!!');
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
        }
    };

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