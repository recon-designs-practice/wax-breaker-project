import { createWithEqualityFn } from "zustand/traditional";

const useAuthStore = createWithEqualityFn((set) => ({
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => set((state) => ({ isUserAuthenticated: !state.isUserAuthenticated })),
  currentUser: null,
  // setCurrentUser: (stuffToAdd) => set(() => ({ currentUser: {...stuffToAdd}}))
  setCurrentUser: (stuffToAdd) =>
    set(() => {
      if (stuffToAdd === null) {
        return null;
      } else {
        return { currentUser: { ...stuffToAdd } };
      }
    }),
}));

export default useAuthStore;
