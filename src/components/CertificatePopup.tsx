import { usePdf } from "@mikecousins/react-pdf";
import React, { useMemo, useRef } from "react";
import usePopupStore from "../stores/usePopupStore";
import { Button } from "./Button";
import Popup from "./Popup";

const CertificationPopup: React.FC = () => {
  const fileUrl = usePopupStore((state) => state.fileUrl);

  const canvasRef = useRef(null);

  const awsObjectUrl = useMemo(() => {
    if (!fileUrl) {
      return "";
    }

    if (Boolean(import.meta.env.VITE_USE_PROXY) === true) {
      return fileUrl.replace(import.meta.env.VITE_STATIC_URL, "");
    }

    return fileUrl;
  }, [fileUrl]);

  usePdf({
    file: awsObjectUrl,
    page: 1,
    canvasRef,
    scale: 1,
  });

  return (
    <Popup
      title="삭제 인증서"
      onClose={() => {
        usePopupStore.getState().closeCertification();
      }}
    >
      <div className="flex flex-1">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="pt-[60px]">
        <Button
          title="삭제 인증서 다운로드"
          onClick={() => {
            if (!fileUrl) {
              return;
            }
            // create Blob from fileUrl
            fetch(awsObjectUrl)
              .then((res) => res.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "삭제인증서.pdf";
                a.click();
              });
          }}
        />
      </div>
    </Popup>
  );
};

export default CertificationPopup;
