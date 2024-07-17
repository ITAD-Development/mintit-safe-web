import { FC, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import usePopupStore from "../stores/usePopupStore";
import CertificationPopup from "./CertificatePopup";
import Footer from "./Footer";
import PrivacyPopup from "./PrivacyPopup";
import TermsPopup from "./TermsPopup";

type Props = {
  className?: string;
};

const Button: FC<{
  title: string;
  onClick?: () => void;
}> = ({ title, onClick }) => {
  return (
    <div
      className="h-10 px-3.5 py-2.5 bg-white rounded-[500px] border border-teal-300 justify-center items-center gap-2.5 inline-flex"
      onClick={onClick}
    >
      <div className="text-teal-400 text-base font-bold font-['SUIT'] leading-tight">
        {title}
      </div>
    </div>
  );
};

const Layout: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenTerms = usePopupStore((state) => state.isOpenTerms);
  const isOpenPrivacy = usePopupStore((state) => state.isOpenPrivacy);
  const isOpenCertification = usePopupStore(
    (state) => state.isOpenCertification
  );

  return (
    <div
      className="h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row xl:h-20 h-0 mx-[63px] border-b-2 border-b-white">
        <div className="flex flex-1 flex-row items-center gap-5">
          <div className="w-[106px] h-[34px] pl-[3px] pr-1 py-1.5 bg-teal-300 rounded-lg shadow justify-center items-center inline-flex">
            <div className="text-white text-xs font-bold font-['Inter'] capitalize leading-snug tracking-wide">
              Android 다운로드
            </div>
          </div>
          <div className="w-[106px] h-[34px] pl-[18px] pr-[17px] py-1.5 bg-emerald-50 rounded-lg shadow justify-center items-center inline-flex">
            <div className="text-emerald-400 text-xs font-bold font-['Inter'] capitalize leading-snug tracking-wide">
              iOS 다운로드
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="31"
            viewBox="0 0 129 31"
            fill="none"
          >
            <path
              d="M31.0517 26.007C34.0723 23.817 32.4273 20.7493 29.5937 21.4484C27.2119 22.0379 26.76 25.6929 26.76 27.6893C26.76 28.4659 25.9097 28.4228 25.9097 28.4228H24.5074C23.1629 28.4228 21.9542 27.6333 21.46 26.4222C20.1422 23.191 18.7844 19.6414 18.1255 18.2602C16.8233 27.3257 13.934 30.6214 7.49205 30.6214C4.36012 30.6214 2.1297 29.4877 0.883155 27.7452C0.181975 26.7642 0.19533 25.8736 0.19533 25.8736C0.19533 24.202 1.59992 22.8984 3.32949 22.8468C4.16868 22.8209 4.76302 23.0834 5.61556 23.817C5.61556 23.817 6.35681 24.486 7.3763 24.415C10.3213 24.2107 11.1293 17.7698 12.5294 9.39272C12.7587 8.01591 13.7225 6.46484 16.0554 6.46484C17.4844 6.46484 18.4505 7.01987 19.1517 8.15359L24.9303 17.688L30.7423 8.08045C31.3722 7.06075 32.3828 6.4713 33.8074 6.4713C35.6973 6.4713 37.2288 7.78142 37.2288 9.39917V25.4971C37.2288 27.1149 35.6973 28.425 33.8074 28.425H28.474C28.474 28.425 27.4835 28.3605 28.7278 27.5752L31.0517 26.007Z"
              fill="#53D9C1"
            />
            <path
              d="M43.9668 28.4164C42.0191 28.4164 40.4409 26.8911 40.4409 25.0088V9.8703C40.4409 7.98794 42.0191 6.46484 43.9668 6.46484C45.9146 6.46484 47.4928 7.99009 47.4928 9.8703V25.0109C47.4928 26.8911 45.9146 28.4164 43.9668 28.4164Z"
              fill="#53D9C1"
            />
            <path
              d="M99.6045 28.4164C97.6568 28.4164 96.0786 26.8911 96.0786 25.0088V9.8703C96.0786 7.98794 97.6568 6.46484 99.6045 6.46484C101.552 6.46484 103.13 7.99009 103.13 9.8703V25.0109C103.13 26.8911 101.552 28.4164 99.6045 28.4164Z"
              fill="#53D9C1"
            />
            <path
              d="M91.1352 6.46484H76.7532C74.9546 6.46484 73.4966 7.87392 73.4966 9.61215C73.4966 11.3504 74.9546 12.7595 76.7532 12.7595H80.4193V25.0152C80.4193 26.8976 81.9976 28.4228 83.9453 28.4228C85.893 28.4228 87.4712 26.8976 87.4712 25.0152V12.7573H91.1374C92.936 12.7573 94.394 11.3482 94.394 9.61C94.3918 7.87392 92.9337 6.46484 91.1352 6.46484Z"
              fill="#53D9C1"
            />
            <path
              d="M61.6771 26.392C61.873 27.6118 62.6432 28.4207 63.8029 28.4207C63.8029 28.4207 68.0701 28.4099 68.059 28.4207C70.0067 28.4207 71.5849 26.8954 71.5849 25.0131V9.87245C71.5849 7.99009 70.0067 6.46484 68.059 6.46484C66.1112 6.46484 64.533 7.99009 64.533 9.87245V20.0867L57.3142 8.24824C56.7176 7.18552 55.5535 6.46484 54.2134 6.46484C52.2657 6.46484 50.6875 7.99009 50.6875 9.87245V25.0131C50.6875 26.8954 52.2657 28.4207 54.2134 28.4207H59.745C59.745 28.4207 60.2725 28.3927 59.952 27.8119C59.952 27.8119 59.2374 26.7018 57.3543 25.6111C57.3543 25.6111 54.6809 24.2106 55.1328 21.5538C55.1328 21.5538 55.4333 19.5532 57.6726 19.9167C57.6726 19.9167 59.9787 20.2996 61.0894 24.0278C61.0939 24.0278 61.4345 24.8883 61.6771 26.392Z"
              fill="#53D9C1"
            />
            <path
              d="M124.863 0.933594C123.122 0.933594 121.711 2.2975 121.711 3.97979C121.711 3.99485 121.72 4.0056 121.72 4.02066H121.702C121.677 5.37166 120.544 6.4645 119.14 6.4645C119.124 6.4645 119.113 6.4559 119.097 6.4559L119.093 6.4645H108.074C106.276 6.4645 104.818 7.87358 104.818 9.61181C104.818 11.35 106.276 12.7591 108.074 12.7591H111.44V25.0127C111.44 26.8951 113.018 28.4203 114.966 28.4203C116.912 28.4203 118.492 26.8951 118.492 25.0127V12.7957H118.964C123.963 12.7957 128.015 8.88038 128.015 4.04863V3.97979C128.015 2.2975 126.603 0.933594 124.863 0.933594Z"
              fill="#53D9C1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="45"
            viewBox="0 0 86 45"
            fill="none"
          >
            <g filter="url(#filter0_d_1747_20562)">
              <path
                d="M10.8843 18.7035C10.8843 16.4986 11.6734 14.7812 13.2749 13.5279C14.8765 12.2746 17.0815 11.648 19.8667 11.648C21.2825 11.648 22.652 11.7872 23.975 12.0658C25.298 12.3443 26.3424 12.7156 27.1316 13.1798C28.1528 13.7832 28.6635 14.5259 28.6635 15.3614C28.6635 15.8952 28.4778 16.4522 28.1296 17.0789C27.7815 17.6823 27.3637 18.1697 26.8763 18.4714C26.5049 18.0768 25.9246 17.7055 25.1819 17.3806C24.4392 17.0557 23.6036 16.7771 22.6752 16.5915C21.7468 16.3826 20.8415 16.2898 19.9363 16.2898C17.4992 16.2898 16.2923 16.986 16.2923 18.3786C16.2923 18.8659 16.5012 19.2605 16.919 19.539C17.3368 19.8175 18.0795 20.0728 19.1008 20.2585L22.2806 20.8387C24.973 21.3029 26.8763 22.0688 28.0136 23.1596C29.1509 24.2504 29.7079 25.6894 29.7079 27.5229C29.7079 29.7509 28.8724 31.4916 27.178 32.7216C25.4836 33.9749 23.1626 34.6016 20.1684 34.6016C19.3561 34.6016 18.4741 34.5319 17.476 34.3695C16.478 34.2302 15.5031 34.0213 14.5283 33.766C13.5535 33.5107 12.6947 33.2322 11.9287 32.9305C11.1628 32.6288 10.6057 32.3039 10.2344 32.0022L12.4162 27.8014C12.9268 28.1495 13.6231 28.4744 14.5283 28.7761C15.4335 29.1011 16.3851 29.3564 17.4296 29.542C18.4509 29.7277 19.3793 29.8205 20.2149 29.8205C21.5611 29.8205 22.5591 29.6581 23.1626 29.3331C23.7661 29.0082 24.091 28.4976 24.091 27.7782C24.091 27.2211 23.8589 26.8034 23.4179 26.5017C22.9537 26.2 22.1878 25.9447 21.1201 25.759L17.9402 25.1788C13.2285 24.3432 10.8611 22.1616 10.8611 18.7035H10.8843Z"
                fill="white"
              />
              <path
                d="M46.4696 33.926C46.2375 33.9956 45.8429 34.042 45.2859 34.1116C44.7288 34.1813 44.0789 34.2277 43.3594 34.2973C42.6399 34.3437 41.874 34.3902 41.108 34.4134C40.3421 34.4366 39.6225 34.4598 38.9726 34.4598C36.257 34.4598 34.2145 34.0188 32.7987 33.1601C31.406 32.3014 30.7097 30.8856 30.7097 28.9593C30.7097 27.1954 31.3132 25.8725 32.5434 25.0138C33.7735 24.1318 35.7696 23.6909 38.5084 23.6909C39.8082 23.6909 40.7366 23.7373 41.3401 23.8069C41.3401 22.2287 40.0403 21.4164 37.4408 21.4164C36.582 21.4164 35.7464 21.5092 34.9804 21.6717C34.2145 21.8342 33.5878 22.0662 33.1468 22.368C32.8451 22.1127 32.5898 21.7645 32.3577 21.3468C32.1256 20.9058 32.0095 20.4648 32.0095 20.0239C32.0095 19.1883 32.4737 18.5385 33.4021 18.0743C34.3306 17.5869 35.7464 17.3548 37.6497 17.3548C40.551 17.3548 42.7559 17.9351 44.2414 19.0955C45.7269 20.2559 46.4696 21.9966 46.4696 24.2943V33.926ZM38.903 30.8392C39.4369 30.8392 39.9243 30.8392 40.4117 30.7928C40.8991 30.7464 41.2008 30.7231 41.3401 30.6767V27.2882C40.9687 27.2418 40.5277 27.2186 40.0635 27.1722C39.5993 27.149 39.1815 27.1258 38.8334 27.1258C37.7193 27.1258 36.9069 27.2882 36.4427 27.6364C35.9785 27.9845 35.7464 28.4487 35.7464 29.0753C35.7464 30.259 36.7909 30.8624 38.903 30.8624V30.8392Z"
                fill="white"
              />
              <path
                d="M48.8321 17.3089C48.8321 15.1273 49.4123 13.4563 50.5728 12.319C51.7334 11.1818 53.4277 10.6016 55.6327 10.6016C56.4915 10.6016 57.3039 10.6944 58.0234 10.8569C58.7429 11.0193 59.3 11.2282 59.7178 11.4603C60.4373 11.8781 60.8087 12.4815 60.8087 13.2474C60.8087 13.7115 60.6926 14.1525 60.4373 14.5471C60.182 14.9416 59.857 15.2665 59.4392 15.4754C59.1607 15.2201 58.7661 15.0112 58.2091 14.8488C57.6752 14.6863 57.1182 14.5935 56.5844 14.5935C55.7488 14.5935 55.1221 14.8256 54.6579 15.2665C54.1937 15.7075 53.9848 16.3342 53.9848 17.1465V17.8427H57.5128C59.2768 17.8427 60.1588 18.6086 60.1588 20.1404C60.1588 20.5582 60.0891 20.9991 59.9731 21.4633C59.857 21.9275 59.6946 22.2988 59.5321 22.6238H54.008V34.0657H48.9017V17.3553L48.8321 17.3089Z"
                fill="white"
              />
              <path
                d="M68.305 34.4616C66.6106 34.4616 65.1251 34.0902 63.8485 33.3707C62.572 32.6513 61.5739 31.6533 60.8544 30.3768C60.1349 29.1003 59.7635 27.6149 59.7635 25.9207C59.7635 24.2264 60.1349 22.7643 60.9008 21.4878C61.6436 20.2113 62.688 19.1901 63.9878 18.4706C65.3108 17.7512 66.7963 17.3798 68.4674 17.3798C69.8601 17.3798 71.1134 17.6351 72.2043 18.0993C73.2952 18.5867 74.1772 19.2597 74.8039 20.0953C75.4305 20.954 75.7555 21.9056 75.7555 22.9964C75.7555 24.7602 75.0592 26.0367 73.6666 26.849C72.2739 27.6614 70.0457 28.0559 66.9587 28.0559C66.5642 28.0559 66.216 28.0559 65.9375 28.0559C65.659 28.0559 65.4036 28.0327 65.1715 28.0095C65.2876 28.6593 65.7518 29.1931 66.4945 29.5877C67.2605 29.9822 68.2121 30.1911 69.3958 30.1911C69.8136 30.1911 70.301 30.1447 70.8581 30.0519C71.4151 29.959 71.9258 29.8198 72.4364 29.6805C72.9238 29.5181 73.2952 29.3788 73.5273 29.2163L75.3145 32.7673C74.8271 33.0922 74.1772 33.3707 73.388 33.6492C72.5989 33.9045 71.7633 34.1134 70.8581 34.2759C69.9761 34.4151 69.1173 34.508 68.2817 34.508L68.305 34.4616ZM68.421 21.3021C67.4462 21.3021 66.6338 21.627 65.9607 22.2769C65.2876 22.9267 64.9626 23.7391 64.9626 24.737C65.1251 24.737 65.3108 24.7602 65.4965 24.7602H65.9839C67.7247 24.7602 68.9548 24.5978 69.7208 24.2961C70.4635 23.9943 70.8581 23.5302 70.8581 22.9499C70.8581 22.4626 70.626 22.068 70.185 21.7663C69.744 21.4646 69.1637 21.3021 68.4442 21.3021H68.421Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1747_20562"
                x="0.234375"
                y="0.601562"
                width="85.5212"
                height="44"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.32549 0 0 0 0 0.85098 0 0 0 0 0.756392 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1747_20562"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1747_20562"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-row justify-end items-center flex-1 gap-[15.2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15.2927 5.40234C15.9336 5.40587 17.5372 5.42138 19.2409 5.48962L19.845 5.51596C21.5604 5.59718 23.2744 5.73592 24.1244 5.97294C25.2583 6.29148 26.1496 7.22094 26.4508 8.39913C26.9304 10.27 26.9904 13.9216 26.9978 14.8053L26.9989 14.9884V15.0013C26.9989 15.0013 26.9989 15.0057 26.9989 15.0142L26.9978 15.1973C26.9904 16.081 26.9304 19.7326 26.4508 21.6035C26.1454 22.786 25.2541 23.7155 24.1244 24.0297C23.2744 24.2667 21.5604 24.4054 19.845 24.4867L19.2409 24.5129C17.5372 24.5812 15.9336 24.5967 15.2927 24.6003L15.0114 24.6013H14.9989C14.9989 24.6013 14.9947 24.6013 14.9864 24.6013L14.7054 24.6003C13.3489 24.5929 7.67726 24.5315 5.87341 24.0297C4.73952 23.7111 3.8483 22.7817 3.54704 21.6035C3.06744 19.7326 3.00749 16.081 3 15.1973V14.8053C3.00749 13.9216 3.06744 10.27 3.54704 8.39913C3.85248 7.21658 4.7437 6.28713 5.87341 5.97294C7.67726 5.47102 13.3489 5.40981 14.7054 5.40234H15.2927ZM12.5989 10.8013V19.2013L19.7989 15.0013L12.5989 10.8013Z"
              fill="#3FDBBF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M16.2345 3.00391C17.585 3.00614 18.2693 3.01328 18.8607 3.03088L19.0936 3.0385C19.3627 3.04807 19.6281 3.06007 19.9481 3.07507C21.2251 3.13406 22.0961 3.33607 22.8611 3.63307C23.6521 3.93806 24.3201 4.35007 24.9871 5.01706C25.6531 5.68406 26.0651 6.35407 26.3711 7.14307C26.6671 7.90706 26.8691 8.77906 26.9291 10.0561C26.9434 10.3761 26.9549 10.6415 26.9644 10.9106L26.972 11.1435C26.9895 11.7348 26.9975 12.4193 27.0001 13.7697L27.001 14.6646C27.0011 14.7739 27.0011 14.8867 27.0011 15.0031L27.001 15.3416L27.0003 16.2365C26.998 17.5869 26.9909 18.2713 26.9733 18.8627L26.9656 19.0956C26.9561 19.3646 26.9441 19.6301 26.9291 19.9501C26.8701 21.227 26.6671 22.0981 26.3711 22.8631C26.0661 23.654 25.6531 24.3221 24.9871 24.989C24.3201 25.655 23.6491 26.0671 22.8611 26.3731C22.0961 26.669 21.2251 26.8711 19.9481 26.9311C19.6281 26.9454 19.3627 26.9569 19.0936 26.9664L18.8607 26.9739C18.2693 26.9915 17.585 26.9995 16.2345 27.002L15.3397 27.003C15.2303 27.0031 15.1175 27.0031 15.0011 27.0031L14.6626 27.003L13.7678 27.0023C12.4173 27 11.7328 26.9929 11.1415 26.9753L10.9086 26.9676C10.6395 26.9581 10.3741 26.9461 10.0541 26.9311C8.77711 26.8721 7.90711 26.669 7.14111 26.3731C6.35111 26.0681 5.68211 25.655 5.01511 24.989C4.34811 24.3221 3.93711 23.651 3.63111 22.8631C3.33411 22.0981 3.13311 21.227 3.07311 19.9501C3.05886 19.6301 3.04723 19.3646 3.03781 19.0956L3.03026 18.8627C3.01271 18.2713 3.0047 17.5869 3.00211 16.2365L3.00195 13.7697C3.00419 12.4193 3.01133 11.7348 3.02893 11.1435L3.03655 10.9106C3.04611 10.6415 3.05811 10.3761 3.07311 10.0561C3.13211 8.77807 3.33411 7.90807 3.63111 7.14307C3.93611 6.35306 4.34811 5.68406 5.01511 5.01706C5.68211 4.35007 6.35211 3.93907 7.14111 3.63307C7.90611 3.33607 8.77611 3.13507 10.0541 3.07507C10.3741 3.06081 10.6395 3.04918 10.9086 3.03976L11.1415 3.03221C11.7328 3.01466 12.4173 3.00665 13.7678 3.00406L16.2345 3.00391ZM15.0011 9.00307C11.6856 9.00307 9.00111 11.6905 9.00111 15.0031C9.00111 18.3186 11.6886 21.0031 15.0011 21.0031C18.3166 21.0031 21.0011 18.3156 21.0011 15.0031C21.0011 11.6876 18.3136 9.00307 15.0011 9.00307ZM15.0011 11.4031C16.9894 11.4031 18.6011 13.0142 18.6011 15.0031C18.6011 16.9914 16.9899 18.6031 15.0011 18.6031C13.0129 18.6031 11.4011 16.9919 11.4011 15.0031C11.4011 13.0148 13.0123 11.4031 15.0011 11.4031ZM21.3011 7.20307C20.474 7.20307 19.8011 7.87495 19.8011 8.70205C19.8011 9.52913 20.473 10.2021 21.3011 10.2021C22.1282 10.2021 22.8011 9.53018 22.8011 8.70205C22.8011 7.87495 22.1271 7.20202 21.3011 7.20307Z"
              fill="#3FDBBF"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 flex-row">
        <div className="xl:flex-1 hidden xl:block pt-[90px]">
          <div className="flex flex-col items-end pr-[350px]">
            <div className="flex flex-col items-start min-w-max ">
              <div>
                <span className="text-slate-800 text-[28px] font-normal font-['SUIT']">
                  쉽고{" "}
                </span>
                <span className="text-slate-800 text-[28px] font-bold font-['SUIT']">
                  안전하게
                </span>
                <span className="text-slate-800 text-[28px] font-normal font-['SUIT']">
                  {" "}
                  데이터{" "}
                </span>
                <span className="text-slate-800 text-[28px] font-bold font-['SUIT']">
                  완적삭제
                </span>
              </div>
              <div className="mb-[20px]">
                <span className="text-cyan-500 text-6xl font-extrabold font-['SUIT']">
                  민팃
                </span>
                <span className="text-slate-800 text-6xl font-extrabold font-['SUIT']">
                  세이프
                </span>
              </div>
              <div className="flex flex-row gap-2 w-[300px] flex-wrap">
                <div className="w-10 h-10 p-2.5 bg-teal-300 rounded-[500px] border border-teal-300 justify-center items-center inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333"
                      fill="white"
                    />
                    <path
                      d="M4.16667 10V15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.39131 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333V10"
                      fill="white"
                    />
                    <path
                      d="M8.33333 10H11.6667V13.3333H8.33333V10Z"
                      fill="white"
                    />
                    <path
                      d="M8.6665 10.332H11.3339V12.9987H8.6665V10.332Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Button title="민팃세이프 소개" />
                <Button title="이용방법" />
                <Button title="다운로드" />
                <Button title="내 삭제 이력" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center xl:justify-start flex-1">
          <div className="w-full md:w-[420px] bg-white min-w-[360px] flex flex-col h-full">
            <div className="relative">
              <div className="absolute z-10 right-[-322px] top-[554px] hidden lg:block">
                <img src="/images/main/fab.png" className="w-[114px]" />
              </div>
            </div>
            <div className="flex flex-col h-full overflow-hidden">
              <div className="flex justify-between items-center px-6 py-[15px] border-b	 ">
                <div className="flex gap-2 items-center">
                  <img
                    src="/square-logo.svg"
                    className="w-[28px] h-[28px] rounded-sm"
                  />
                  <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                    민팃세이프 앱으로 편하게
                  </div>
                </div>
                <div className="h-[26px] px-4 py-1 bg-white rounded-[97px] border border-zinc-800 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                    앱 다운로드
                  </div>
                </div>
              </div>
              <header className="flex justify-between items-center px-6 py-[10px] border-b	 ">
                <img src="/square-logo.svg" />
                <img
                  src="/hamburgur.svg"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
              </header>
              {/* Overlay */}
              {isOpen && (
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsOpen(false)}
                ></div>
              )}

              {/* Side menu */}
              <div
                className={`absolute top-0 right-0 w-4/5 h-full bg-white transform transition-transform z-50 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  className="absolute top-5 right-5 p-3 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block w-6 h-0.5 bg-gray-600 rotate-45"></span>
                  <span className="block w-6 h-0.5 bg-gray-600 -rotate-45"></span>
                </button>
                <nav className="mt-16 p-4">
                  <ul>
                    <li className="mb-4">
                      <Link to="/" className="text-gray-800">
                        MINTIT safe 소개
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/guide" className="text-gray-800">
                        MINTIT safe Guide
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/download/aos" className="text-gray-800">
                        MINTIT safe Download
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/histories" className="text-gray-800">
                        내 삭제 이력
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col flex-1 h-full no-scrollbar overflow-y-scroll">
                <main className={`flex-1 ${className}`}>{children}</main>
                <Footer />
              </div>
              {isOpenTerms && <TermsPopup />}
              {isOpenPrivacy && <PrivacyPopup />}
              {isOpenCertification && <CertificationPopup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
