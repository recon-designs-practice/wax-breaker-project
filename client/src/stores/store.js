import { createWithEqualityFn } from "zustand/traditional"

const useBreaksStore = createWithEqualityFn((set) => ({
  breaks: [],
  setAllStoreBreaks: (stuffToAdd) => set(() => ({ breaks: [...stuffToAdd] })),
  isNewBreakModalShowing: false,
  setIsNewBreakModalShowing: () =>
    set((state) => ({ isNewBreakModalShowing: !state.isNewBreakModalShowing })),
  currentUser: null,
  // setCurrentUser: (stuffToAdd) => set(() => ({ currentUser: {...stuffToAdd}}))
  setCurrentUser: (stuffToAdd) => set(() => {
    if (stuffToAdd === null) {
      return null
    } else {
      return ({ currentUser: {...stuffToAdd} })
    }
  })
}))

export default useBreaksStore
