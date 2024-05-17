import { create } from "zustand";

const sliderStore = create((set) => ({
  selectedTab: "About",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));

export default sliderStore;
