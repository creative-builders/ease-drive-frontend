
import { atom } from "recoil";


export const userAtom = ({key, default }) => {
 key:"userAtom",
 JSON.parse(localStorage.getItem("current-user"))
}