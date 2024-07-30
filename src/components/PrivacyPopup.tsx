import axiosClient from "@libs/axiosClient";
import React, { useEffect, useState } from "react";
import usePopupStore from "../stores/usePopupStore";
import DropDown from "./DropDown";
import Popup from "./Popup";

// {
//   "id": "znqkVo6TRkCptW7Ae796Ow",
//   "name": "safe web term",
//   "serviceId": "lf6SPZJ1QDSqZXD6h5wc9Q",
//   "description": "Safe web 약관",
//   "termsCategoryCode": "TERMSAFEWE",
//   "mandatoryYn": "Y",
//   "repeatYn": "Y",
//   "historyYn": "N",
//   "status": "A",
//   "createdAt": "2024-06-17 03:43:43",
//   "createdBy": "admin09",
//   "updatedAt": "2024-06-17 03:43:43",
//   "updatedBy": "admin09",
//   "termsContents": [
//       {
//           "id": 13,
//           "termsId": "znqkVo6TRkCptW7Ae796Ow",
//           "content": "<style>\n  .section-list {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n  }\n  .section {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .title {\n    color: #006250;\n    font-size: 20px;\n    font-family: SUIT;\n    font-weight: 800;\n    line-height: 26px;\n    word-wrap: break-word;\n  }\n  .title-line {\n    height: 1px;\n    justify-content: flex-start;\n    align-items: flex-start;\n    display: inline-flex;\n  }\n  .title-line .left {\n    width: 80px;\n    height: 1px;\n    background: #53d9c1;\n  }\n  .title-line .right {\n    flex: 1 1 0;\n    height: 1px;\n    background: #f0f0f0;\n  }\n</style>\n<div class=\"section-list\">\n  <div class=\"section\">\n    <div class=\"title\">01. 총칙</div>\n    <div class=\"title-line\">\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"title\">02. 수집하는 개인정보 항목 및 수집 방법</div>\n    <div class=\"title-line\">\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n    </div>\n  </div>\n</div>\n",
//           "executionAt": "2024-06-30 15:00:00",
//           "status": "A",
//           "createdAt": "2024-07-01 04:49:31",
//           "createdBy": "AGvmAvMHQCOlhQMJYAa1Jw",
//           "updatedAt": "2024-07-16 00:45:22",
//           "updatedBy": "MdE3J6AXQ9u0lmckEPznlg"
//       },
//       {
//           "id": 14,
//           "termsId": "znqkVo6TRkCptW7Ae796Ow",
//           "content": "<style>\n  .section-list {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n  }\n  .section {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .title {\n    color: #006250;\n    font-size: 20px;\n    font-family: SUIT;\n    font-weight: 800;\n    line-height: 26px;\n    word-wrap: break-word;\n  }\n  .title-line {\n    height: 1px;\n    justify-content: flex-start;\n    align-items: flex-start;\n    display: inline-flex;\n  }\n  .title-line .left {\n    width: 80px;\n    height: 1px;\n    background: #53d9c1;\n  }\n  .title-line .right {\n    flex: 1 1 0;\n    height: 1px;\n    background: #f0f0f0;\n  }\n</style>\n<div class=\"section-list\">\n  <div class=\"section\">\n    <div class=\"title\">01. 총칙</div>\n    <div class=\"title-line\">\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"title\">02. 수집하는 개인정보 항목 및 수집 방법</div>\n    <div class=\"title-line\">\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n    </div>\n  </div>\n</div>\n",
//           "executionAt": "2024-06-30 15:00:00",
//           "status": "A",
//           "createdAt": "2024-07-01 04:49:31",
//           "createdBy": "AGvmAvMHQCOlhQMJYAa1Jw",
//           "updatedAt": "2024-07-16 00:45:30",
//           "updatedBy": "MdE3J6AXQ9u0lmckEPznlg"
//       }
//   ],
//   "creatorName": "admin09",
//   "updatorName": "admin09"
// }

type TermsContent = {
  id: number;
  termsId: string;
  content: string;
  executionAt: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

type TermsRow = {
  id: string;
  name: string;
  serviceId: string;
  description: string;
  termsCategoryCode: string;
  mandatoryYn: string;
  repeatYn: string;
  historyYn: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  termsContents: TermsContent[];
  creatorName: string;
  updatorName: string;
};

type TermsResponse = {
  code: string;
  message: string;
  data: TermsRow[];
};

const PrivacyPopup: React.FC = () => {
  const [terms, setTerms] = useState<TermsRow>();
  const [contents, setContents] = useState<TermsContent[]>();
  const [selected, setSelected] = useState<TermsContent>();
  useEffect(() => {
    async function init() {
      const response = await axiosClient.get<TermsResponse>(
        "/common/api-safe/terms?termsCategoryCode=TERMSAFEWE"
      );
      console.log(response.data);
      setTerms(response.data.data[1]);
      setContents(response.data.data[1].termsContents);
      setSelected(response.data.data[1].termsContents[0]);
    }
    init();
  }, []);

  return (
    <Popup
      title="개인정보 처리방침"
      onClose={() => {
        usePopupStore.getState().closePrivacy();
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <DropDown
          selected={selected?.executionAt.toString() || ""}
          options={
            contents?.map((row) => {
              return {
                label: row.executionAt.toString(),
                value: row.id.toString(),
              };
            }) || []
          }
          onChange={(value) => {
            setSelected(contents?.find((row) => row.id.toString() === value));
          }}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: selected?.content || "",
        }}
      ></div>
    </Popup>
  );
};

export default PrivacyPopup;
