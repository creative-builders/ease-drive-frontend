
import { atom } from "recoil";


export const userAtom = atom({
key:"userAtom",
default:JSON.parse(localStorage.getItem("current_user")) || null
})