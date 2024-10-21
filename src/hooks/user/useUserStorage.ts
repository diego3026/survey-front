import { UserModel } from '../../models/user';
import { create } from "zustand";
import { decodedToken } from '../../utils'
import {userAdapter, userBackend} from "../../adapter/userAdapter";


interface UserStore extends UserModel {
    isActive: () => boolean;
    getName: () => string;
    login: (token: string) => void;
    logout: () => void;
}

export const getInitialState = (): UserModel => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const user = decodedToken(token) as userBackend;
            const adapterU = userAdapter(user);
            if(adapterU){
                return adapterU
            }
        } catch (error) {
            console.error("Token inválido o expirado", error);
            localStorage.removeItem("token");
        }
    }
    return {
        id: 0,
        roles: [{ id: 1, name: "USER" }],
        email: "",
        name: "",
    };
};


export const useUserStore = create<UserStore>((set, get) => ({
    ...getInitialState(),
    isActive: () => (get().id ? true : false),
    getName: () => get().name,
    login: (token: string) => {
        const user = decodedToken(token) as userBackend
        const adapU = userAdapter(user)
        set({ ...adapU })
    },
    logout: () => {
        console.log("logout")
        localStorage.removeItem("token")
        set({ ...getInitialState() })
    },
}))