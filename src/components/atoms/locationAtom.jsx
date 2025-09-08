
import { atom } from "recoil";

export const locationAtom = atom({
key:"liveLocationAtom",
default:JSON.parse(localStorage.getItem("user_location")) || null
})