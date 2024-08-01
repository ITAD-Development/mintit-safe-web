import { create } from "zustand";

type PopupStoreParams = {
  isOpenTerms: boolean;
  isOpenPrivacy: boolean;
  isOpenCertification: boolean;
  isOpenAgreement: boolean;
  fileUrl?: string;
};

type PopupStoreActions = {
  openTerms: () => void;
  closeTerms: () => void;
  openPrivacy: () => void;
  closePrivacy: () => void;
  openCertification: (fileUrl: string) => void;
  closeCertification: () => void;
  openAgreement: () => void;
  closeAgreement: () => void;
};

const usePopupStore = create<PopupStoreParams & PopupStoreActions>((set) => ({
  isOpenTerms: false,
  isOpenPrivacy: false,
  isOpenCertification: false,
  isOpenAgreement: false,
  fileUrl: undefined,
  openTerms: () => set({ isOpenTerms: true }),
  closeTerms: () => set({ isOpenTerms: false }),
  openPrivacy: () => set({ isOpenPrivacy: true }),
  closePrivacy: () => set({ isOpenPrivacy: false }),
  openCertification: (fileUrl: string) =>
    set({ isOpenCertification: true, fileUrl }),
  closeCertification: () =>
    set({ isOpenCertification: false, fileUrl: undefined }),
  openAgreement: () => set({ isOpenAgreement: true }),
  closeAgreement: () => set({ isOpenAgreement: false }),
}));
export default usePopupStore;
