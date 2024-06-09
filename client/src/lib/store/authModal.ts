import create, { StoreApi, UseBoundStore } from "zustand";
interface State {
  isSignInModalOpen: boolean;
  userExists: boolean;
}

interface Actions {
  openModal: () => void;
  closeModal: () => void;
  updateUserExists: (userExists: boolean) => void;
}

const useAuthModalStore: (
  initialState: State["userExists"]
) => UseBoundStore<StoreApi<State & Actions>> = (initialUserExistsState) =>
  create<State & Actions>((set) => ({
    isSignInModalOpen: false,
    userExists: initialUserExistsState,

    openModal: () =>
      set(({ userExists }) => ({ isSignInModalOpen: !userExists && true })),
    closeModal: () => set({ isSignInModalOpen: false }),
    updateUserExists: (userExists: boolean) =>
      set(({ closeModal }) => {
        if (userExists) {
          closeModal();
          return { userExists, isSignInModalOpen: false };
        }
        return { userExists };
      }),
  }));

export default useAuthModalStore;
