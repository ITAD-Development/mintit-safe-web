import { create } from "zustand";

type PopupStoreParams = {
  isOpenTerms: boolean;
  isOpenPrivacy: boolean;
  isOpenCertification: boolean;
  isOpenAgreement: boolean;
};

type PopupStoreActions = {
  openTerms: () => void;
  closeTerms: () => void;
  openPrivacy: () => void;
  closePrivacy: () => void;
  openCertification: () => void;
  closeCertification: () => void;
  openAgreement: () => void;
  closeAgreement: () => void;
};

const usePopupStore = create<PopupStoreParams & PopupStoreActions>((set) => ({
  isOpenTerms: false,
  isOpenPrivacy: false,
  isOpenCertification: false,
  isOpenAgreement: false,
  openTerms: () => set({ isOpenTerms: true }),
  closeTerms: () => set({ isOpenTerms: false }),
  openPrivacy: () => set({ isOpenPrivacy: true }),
  closePrivacy: () => set({ isOpenPrivacy: false }),
  openCertification: () => set({ isOpenCertification: true }),
  closeCertification: () => set({ isOpenCertification: false }),
  openAgreement: () => set({ isOpenAgreement: true }),
  closeAgreement: () => set({ isOpenAgreement: false }),
}));
export default usePopupStore;
