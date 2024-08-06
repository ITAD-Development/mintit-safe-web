import { Button } from "@components/Button";
import { usePdf } from "@mikecousins/react-pdf";
import React, { useEffect, useMemo, useRef, useState } from "react";

export const Certificate: React.FC = () => {
  const fileUrl = useMemo(() => {
    const url = new URLSearchParams(window.location.search).get("fileUrl");
    return atob(url || "");
  }, []);
  const [awsObjectUrl, setAwsObjectUrl] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // congtentRef를 observe하여 height를 조절 화면의 높이에 맞게 조절, 브라우저의 크기 변경시에도 조절 될것
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    async function init() {
      if (!fileUrl) {
        return;
      }

      let url = fileUrl;
      if (Boolean(import.meta.env.VITE_USE_PROXY) === true) {
        url = fileUrl.replace(import.meta.env.VITE_STATIC_URL, "");
      }

      const request = new Request(url, {
        method: "GET",
        mode: "no-cors",
      });

      const response = await fetch(request);
      const blob = await response.blob();
      setAwsObjectUrl(URL.createObjectURL(blob));
    }

    init();
  }, [fileUrl]);

  usePdf({
    file: awsObjectUrl,
    page: 1,
    canvasRef,
    scale: 1,
    withCredentials: false,
  });

  const certWidth = width * 1.2;

  return (
    <div
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
      }}
    >
      <div className="flex flex-1 overflow-x-hidden relative" ref={contentRef}>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            width: certWidth,
            height: certWidth * 1.414,
            left: -80,
          }}
        />
      </div>
      <div className="pt-[60px]">
        <Button
          title="삭제 인증서 다운로드"
          onClick={async () => {
            let url = fileUrl;
            if (Boolean(import.meta.env.VITE_USE_PROXY) === true) {
              url = fileUrl.replace(import.meta.env.VITE_STATIC_URL, "");
            }

            const request = new Request(url, {
              method: "GET",
              mode: "no-cors",
            });

            const response = await fetch(request);
            const blob = await response.blob();

            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "삭제인증서.pdf";
            a.click();
          }}
        />
      </div>
    </div>
  );
};
