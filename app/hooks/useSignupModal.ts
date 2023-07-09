import { ModalType } from "@/types/types";
import { create } from "zustand";

// サインアップ状態管理
const useSignupModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignupModal;
