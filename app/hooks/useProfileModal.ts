import { ModalType } from "@/types/types";
import { create } from "zustand";

// プロフィール状態管理
const useProfileModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useProfileModal;
