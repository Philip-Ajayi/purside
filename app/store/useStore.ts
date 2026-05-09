import { create } from 'zustand';

interface UIState {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
}

export const useStore = create<UIState>((set) => ({
  isWaitlistOpen: false,
  openWaitlist: () => set({ isWaitlistOpen: true }),
  closeWaitlist: () => set({ isWaitlistOpen: false }),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
