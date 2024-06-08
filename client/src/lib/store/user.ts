import create from "zustand";

const useUserStore = create((set) => ({
  user: {
    id: null,
  },

  setUser: (user: {}) => set({ user: user }),
  removeUser: () => set({ user: { id: null } }),
}));

export default useUserStore;
