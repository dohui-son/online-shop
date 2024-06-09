import { StoreApi, UseBoundStore, create } from "zustand";

export const useUserStore: UseBoundStore<
  StoreApi<{ user: {}; userExists: boolean }>
> = create((set) => ({
  user: {
    id: null,
  },
  userExists: false,

  setUser: (user: {}) => set({ user: user, userExists: true }),
  removeUser: () => set({ user: { id: null }, userExists: false }),
}));
