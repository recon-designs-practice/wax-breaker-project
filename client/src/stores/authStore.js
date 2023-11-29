import { createWithEqualityFn } from "zustand/traditional";

const useAuthStore = createWithEqualityFn((set) => ({
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
