import { StoreApi, UseBoundStore, create } from "zustand";
interface State {
  isSignInModalOpen: boolean;
  userExists: boolean;
}

interface Actions {
  openModal: () => void;
  closeModal: () => void;
  updateUserExists: (userExists: boolean) => void;
}

export const useAuthModalStore: UseBoundStore<StoreApi<State & Actions>> =
  create<State & Actions>((set) => ({
    isSignInModalOpen: false,
    userExists: false,

    openModal: () =>
      set(({ userExists }) => ({ isSignInModalOpen: true, userExists })),
    closeModal: () => set({ isSignInModalOpen: false }),
    updateUserExists: (exists) =>
      set(() => {
        if (exists) {
          return { exists, isSignInModalOpen: false };
        }
        return { exists };
      }),
  }));
