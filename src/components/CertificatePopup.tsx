import React from "react";
import usePopupStore from "../stores/usePopupStore";
import { Button } from "./Button";
import Popup from "./Popup";

const CertificationPopup: React.FC = () => {
  return (
    <Popup
      title="삭제 인증서"
      onClose={() => {
        usePopupStore.getState().closeCertification();
      }}
    >
      <Button title="삭제 인증서 다운로드" />
    </Popup>
  );
};

export default CertificationPopup;
