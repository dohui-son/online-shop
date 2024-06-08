import create, { StoreApi, UseBoundStore } from "zustand";

const useUserStore: UseBoundStore<StoreApi<{ user: {}; userExists: boolean }>> =
  create((set) => ({
    user: {
      id: null,
    },
    userExists: false,

    setUser: (user: {}) => set({ user: user, userExists: true }),
    removeUser: () => set({ user: { id: null }, userExists: false }),
  }));

export default useUserStore;
