import { create } from 'zustand';

const useSlideStore = create((set, get) => ({
  coverVisible: true,
  currentSlide: 0,
  totalSlides: 21,
  direction: 1,

  openCover: () => set({ coverVisible: false }),

  closeCover: () => set({ coverVisible: true, currentSlide: 0 }),

  goToSlide: (index) => {
    const { currentSlide } = get();
    set({ currentSlide: index, direction: index > currentSlide ? 1 : -1 });
  },

  nextSlide: () => {
    const { currentSlide, totalSlides } = get();
    if (currentSlide < totalSlides - 1) {
      set({ currentSlide: currentSlide + 1, direction: 1 });
    }
  },

  prevSlide: () => {
    const { currentSlide } = get();
    if (currentSlide > 0) {
      set({ currentSlide: currentSlide - 1, direction: -1 });
    }
  },
}));

export default useSlideStore;
