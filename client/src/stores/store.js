import { createWithEqualityFn } from "zustand/traditional"

const useBreaksStore = createWithEqualityFn((set) => ({
  breaks: [],
  setAllStoreBreaks: (stuffToAdd) => set(() => ({ breaks: [...stuffToAdd] })),
  isNewBreakModalShowing: false,
  setIsNewBreakModalShowing: () =>
    set((state) => ({ isNewBreakModalShowing: !state.isNewBreakModalShowing }))
}))

export default useBreaksStore
