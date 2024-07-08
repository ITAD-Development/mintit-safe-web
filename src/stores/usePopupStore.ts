import { create } from "zustand";

type PopupStoreParams = {
  isOpenTerms: boolean;
  isOpenPrivacy: boolean;
  isOpenCertification: boolean;
};

type PopupStoreActions = {
  openTerms: () => void;
  closeTerms: () => void;
  openPrivacy: () => void;
  closePrivacy: () => void;
  openCertification: () => void;
  closeCertification: () => void;
};

const usePopupStore = create<PopupStoreParams & PopupStoreActions>((set) => ({
  isOpenTerms: false,
  isOpenPrivacy: false,
  isOpenCertification: false,
  openTerms: () => set({ isOpenTerms: true }),
  closeTerms: () => set({ isOpenTerms: false }),
  openPrivacy: () => set({ isOpenPrivacy: true }),
  closePrivacy: () => set({ isOpenPrivacy: false }),
  openCertification: () => set({ isOpenCertification: true }),
  closeCertification: () => set({ isOpenCertification: false }),
}));
export default usePopupStore;
