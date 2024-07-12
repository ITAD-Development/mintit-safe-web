
import axiosClient from '@libs/axiosClient';
import { useQuery, useMutation, QueryOptions } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
const isLoading: {
  [key: string]: boolean;
} = {};

const apiResponseCache: {
  [key: string]: any;
} = {};
      

export type PurchaseReqUpdate = {
  // 매입 아이디
  id?: number;
};


export type PurchaseResId = {
  // 매입 아이디
  id?: number;
};


export type CommonResponsePurchaseResId = {
  code?: string;

  message?: string;

  data?: PurchaseResId;
};


export type PurchaseRewardReqUpdate = {};


export type CommonResponseObject = {
  code?: string;

  message?: string;

  data?: any;
};


export type PurchasePricePolicyReqUpdate = {
  // 적용 시작 일자
  applicationStartDate?: string;

  // 적용 종료 일자
  applicationEndDate?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 서비스 아이디
  serviceId?: string;

  // 디바이스 유형 코드
  deviceTypeCode?: string;
};


export type PurchaseDeviceModelReqUpdate = {
  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 가격 정책 아이디
  purchasePricePolicyId?: number;

  // A : Activated / D : Deleted
  status?: string;
};


export type PurchaseDeviceModelGradePriceReqUpdate = {
  // 매입 디바이스 모델 아이디
  purchaseDeviceModelId?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 등급 코드
  purchaseGradeCode?: string;

  // 가격
  price?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 통화코드
  currencyCode?: string;
};


export type PartnerReqUpdateForManage = {
  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 유형
  partnerTypeCode?: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 법인 등록 번호
  corporateRegistrationNumber?: string;

  // 법인명
  corporateName?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // 상태
  status?: string;

  // 파트너 파일
  partnerFiles?: PartnerReqUpdateForManagePartnerFile[];

  // 삭제 파일 아이디
  deletePartnerFileIds?: number[];
};


export type PartnerReqUpdateForManagePartnerFile = {
  // S3 파일 아이디
  fileId: string;

  // 파트너 파일 타입
  partnerFileTypeCode: string;
};


export type PartnerResId = {
  // 파트너 아이디
  id?: number;
};


export type CommonResponsePartnerResId = {
  code?: string;

  message?: string;

  data?: PartnerResId;
};


export type PartnerMemberBankAccountReqUpdate = {
  // 파트너 멤버 은행 계좌 아이디
  id?: number;

  // 은행코드
  bankCode?: string;

  // 계좌명
  bankAccountName?: string;

  // 계좌번호
  bankAccountNumber?: string;

  // 계좌 확인 상태
  bankAccountConfirmStatus?: string;
};


export type PartnerMemberReqCreatePartnerMemberFile = {
  // S3 파일 아이디
  fileId: string;

  // 파트너 파일 멤버 타입
  partnerMemberFileTypeCode: string;
};


export type PartnerMemberReqUpdateForManage = {
  // (Encryped) 이름
  name?: string;

  // (Encryped) 이메일
  email?: string;

  // 관한 유형
  administratorRoles?: number;

  // 파트너 아이디
  partnerId?: number;

  // 파트너 담당자 여부
  partnerMasterYn?: string;

  // 지점 아이디
  branchId?: number;

  // 지점 담당자 여부
  branchMasterYn?: string;

  // 상태
  status?: string;

  partnerMemberBankAccount?: PartnerMemberBankAccountReqUpdate;

  // 파트너 멤버파일
  partnerMemberFiles?: PartnerMemberReqCreatePartnerMemberFile[];

  // 삭제 파일 아이디
  deletePartnerMemberFileIds?: number[];
};


export type PartnerMemberResId = {
  // 파트너 멤버 아이디
  id?: number;
};


export type CommonResponsePartnerMemberResId = {
  code?: string;

  message?: string;

  data?: PartnerMemberResId;
};


export type PartnerMemberReqUpdateForInvite = {
  // 관한 유형
  administratorRoles: number;
};


export type PartnerMemberReqUpdateForInviteAccept = {
  // 로그인 패스워드
  loginPassword: string;
};


export type BranchReqCreateBranchFile = {
  // S3 파일 아이디
  fileId: string;

  // 브랜치 파일 타입
  branchFileTypeCode: string;
};


export type BranchReqUpdate = {
  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 아이디
  partnerId?: number;

  // 지사 유형
  branchTypeCode?: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // 상태
  status?: string;

  // 지점 파일
  branchFiles?: BranchReqCreateBranchFile[];

  // 삭제 파일 아이디
  deleteBranchFileIds?: number[];
};


export type BranchResId = {
  // 지점 아이디
  id?: number;
};


export type CommonResponseBranchResId = {
  code?: string;

  message?: string;

  data?: BranchResId;
};


export type InspectionReqUpdate = {
  // 외관 검사 아이디
  id?: number;
};


export type InspectionResId = {
  // 외관 검사 아이디
  id?: number;
};


export type CommonResponseInspectionResId = {
  code?: string;

  message?: string;

  data?: InspectionResId;
};


export type InspectionProfileReqUpdate = {};


export type DeviceDeletionReqUpdate = {};


export type DeviceDeletionResId = {
  // 아이디
  id?: number;
};


export type CommonResponseDeviceDeletionResId = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResId;
};


export type DeviceReqUpdate = {
  // 상태
  status?: string;
};


export type DeviceResId = {
  // 아이디
  id?: number;
};


export type CommonResponseDeviceResId = {
  code?: string;

  message?: string;

  data?: DeviceResId;
};


export type DeviceSeriesReqUpdate = {
  // 시리즈 이름
  name?: string;

  // 시리즈 설명
  description?: string;

  // 디바이스 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 시리즈 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceSeriesResId = {
  // 시리즈 아이디
  id?: number;
};


export type CommonResponseDeviceSeriesResId = {
  code?: string;

  message?: string;

  data?: DeviceSeriesResId;
};


export type DeviceModelReqUpdate = {
  // 모델 번호 ( e.g., SM-S908-1T)
  number?: string;

  // 모델 이름
  name?: string;

  // 모델 설명
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 시리즈 아이디
  deviceSeriesId?: number;

  // OS 유형
  osTypeCode?: string;

  // 스마트폰 외관 유형
  smartphoneAppearanceTypeCode?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // 모델 이미지 파일 아이디
  imageFileId?: string;

  // 출시 년월
  lunchingYymm?: string;

  // 출시 가격
  lunchingPrice?: number;

  // 저장 용량
  storageCapacity?: string;

  // 컬러
  color?: string;

  // 케이블 유형
  cableTypeCode?: string;

  // H/W 사이즈 (mm)
  sizeHardware?: string;

  // 디바이스 사이즈
  sizeDevice?: string;

  // 액정 사이즈
  sizeScreen?: string;

  // 볼륨업 버튼 위치 값
  posistionVolumUpButton?: string;

  // 볼륨다운 버튼 위치 값
  posistionVolumDownButton?: string;

  // 홈 버튼 위치 값
  positionHomeButton?: string;

  // 뒤로가기 버튼 위치 값
  positionGoBackButton?: string;

  // 메뉴 버튼 위치 값
  postionMenuButton?: string;

  // 전원 버튼 위치 값
  positionPowerButton?: string;

  // 전면 카메라 위치 값
  positionFrontCamera?: string;

  // 후면 카메라 위치 값
  positionBackCamera?: string;

  // 근접 센서 위치 값
  positionProximitySensor?: string;

  // 진동 버튼 위치 값
  positionVibrationButton?: string;

  // 매입 대상 여부
  purchaseTargetYn?: string;

  // 노출 순서
  displayNumber?: number;

  // 상태
  status?: string;
};


export type DeviceModelResId = {
  // 모델 아이디
  id?: number;
};


export type CommonResponseDeviceModelResId = {
  code?: string;

  message?: string;

  data?: DeviceModelResId;
};


export type DeviceManufactureReqUpdate = {
  // 제조사 이름
  name?: string;

  // 디바이스 유형 설명
  description?: string;

  // 제조사 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // 상태
  status?: string;
};


export type DeviceManufactureResId = {
  // 디바이스 유형 아이디
  id?: number;
};


export type CommonResponseDeviceManufactureResId = {
  code?: string;

  message?: string;

  data?: DeviceManufactureResId;
};


export type DeviceManufactureTypeReqUpdate = {
  // 디바이스 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceManufactureTypeResId = {
  // 디바이스 유형 아이디
  id?: number;
};


export type CommonResponseDeviceManufactureTypeResId = {
  code?: string;

  message?: string;

  data?: DeviceManufactureTypeResId;
};


export type TermsAgreementReqUpdate = {};


export type TermsAgreementResId = {
  // 약관 동의 아이디
  id?: string;
};


export type CommonResponseTermsAgreementResId = {
  code?: string;

  message?: string;

  data?: TermsAgreementResId;
};


export type EventApplicationReqUpdate = {};


export type EventApplicationResId = {
  // 약관 동의 아이디
  id?: number;
};


export type CommonResponseEventApplicationResId = {
  code?: string;

  message?: string;

  data?: EventApplicationResId;
};


export type TermsReqUpdate = {
  // 이름
  name?: string;

  // 설명
  description?: string;

  // 약관 카테고리 유형 코드
  termsCategoryCode?: string;

  // 필수 여부
  mandatoryYn?: string;

  // 반복 동의 여부
  repeatYn?: string;

  // 이력 관리 여부
  historyYn?: string;

  // 상태
  status?: string;
};


export type TermsResId = {
  // 국가 아이디
  id?: string;
};


export type CommonResponseTermsResId = {
  code?: string;

  message?: string;

  data?: TermsResId;
};


export type TermsContentReqUpdate = {
  // 약관 내용
  content?: string;

  // 상태
  status?: string;

  // 시행 일시
  executionAt?: Date;
};


export type TermsContentResId = {
  // 약관 내용 아이디
  id?: number;
};


export type CommonResponseTermsContentResId = {
  code?: string;

  message?: string;

  data?: TermsContentResId;
};


export type SigunguReqUpdate = {};


export type SigunguResId = {
  // 법정동 코드
  code?: string;
};


export type CommonResponseSigunguResId = {
  code?: string;

  message?: string;

  data?: SigunguResId;
};


export type ServiceSeviceReqUpdate = {};


export type MenuReqUpdate = {
  // 메뉴명
  menuName?: string;

  // 메뉴 설명
  description?: string;

  // 메뉴 URL
  menuUri?: string;

  // 노출 순서
  displayNumber?: number;

  // 메뉴 여부
  menuYn?: string;

  // 접근 가능 역할(s)
  roles?: number;
};


export type MenuResId = {
  // 페이지 아이디
  id?: number;
};


export type CommonResponseMenuResId = {
  code?: string;

  message?: string;

  data?: MenuResId;
};


export type MenuButtonReqUpdate = {
  // 버튼 설명
  description?: string;

  // 버튼 이름
  buttonName?: string;

  // 페이지 URI
  menuUri?: string;

  // 노출 순서
  displayNumber?: number;

  // 접근 가능 역할(s)
  roles?: number;
};


export type MenuButtonResId = {
  // 페이지 버튼 아이디
  id?: number;
};


export type CommonResponseMenuButtonResId = {
  code?: string;

  message?: string;

  data?: MenuButtonResId;
};


export type EventFileReqUpdate = {
  // 이벤트 파일 유형 코드
  eventFileTypeCode: string;

  // 파일 아이디
  fileId: string;

  // 노출 순서
  displayNumber: number;
};


export type EventReqUpdateForManage = {
  // 이름
  name?: string;

  // 설명
  description?: string;

  // 이벤트 시작 일시
  eventStartDatetime?: string;

  // 이벤트 종료 일시
  eventEndDatetime?: string;

  // 이벤트 응모 유형 코드
  eventApplicationTypeCode?: string;

  // 이벤트 당첨자 선정 방법 유형 코드
  eventWinnerSelectionMethodCode?: string;

  // Quiz (EAT000QUIZ)  + 전체 / PASS 인증(EAT000PASS) + 추첨
  eventAttributes?: string;

  // 노출 채널(s)
  displayChannels?: number;

  // 상위 이벤트 아이디
  parentEventId?: string;

  // 상태
  status?: string;

  // 이벤트 파일
  eventFiles?: EventFileReqUpdate[];

  // 삭제 파일 아이디
  deleteEventFileIds?: number[];
};


export type EventResId = {
  // 이벤트 아이디
  id?: string;
};


export type CommonResponseEventResId = {
  code?: string;

  message?: string;

  data?: EventResId;
};


export type EventTermsReqUpdate = {
  // 이벤트 아이디
  eventId?: string;

  // 약관 아이디
  termsId?: string;

  // 약관 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type EventBenefitReqUpdate = {
  // 이벤트 아이디
  eventId?: string;

  // 쿠폰 정책 아이디
  couponPolicyId?: number;

  // 쿠폰 노출 순서
  displayNumber?: number;

  // 매입가에 따른 조건
  eventBenefitPaidCondition?: string;

  // A : Activate / D : Deactivated
  status?: string;
};


export type CouponPolicyReqUpdate = {
  // 이름
  name?: string;

  // 설명
  description?: string;

  // 쿠폰 유형
  couponTypeCode?: string;

  // 정액 지급, 10,000원. e.g, 10000  정류 지급, 단말 대금의 10.00%. e.g., 1000  선 밸행된 쿠폰
  couponTypeValue?: string;

  // 쿠폰 발행 시작 일시
  couponIssuanceStartDatetime?: string;

  // 쿠폰 발행 종료 일시
  couponIssuanceEndDatetime?: string;

  // (제한) 최대 발행 수량
  limitedTotalNumber?: number;

  // (제한) 1일 최대 발행 수량
  limitedTotalNumberPerDay?: number;

  // (제한) 1일 최대 발행 수량
  limitedUserNumber?: number;

  // (제한) 1인당 1일 최대 발행 수량
  limitedTotalNumberPerDayUser?: number;

  // 쿠폰 사용 만료 유형
  couponUseExpirationTypeCode?: string;

  // 쿠폰 사용 만료 일자 지정 e.g., 20240105 / 쿠폰 생성 일자 기준 만료 일자 지정 e.g., 30
  couponUseExpirationTypeValue?: string;

  // 플랫폼 분담율
  shareRatePlatform?: number;

  // 제휴업체 분담율
  shareRatePartner?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type ContentDisplayReqUpdate = {
  // 배너 아이디
  id?: number;
};


export type ContentDisplayResId = {
  // 배너 아이디
  id?: number;
};


export type CommonResponseContentDisplayResId = {
  code?: string;

  message?: string;

  data?: ContentDisplayResId;
};


export type CommonCodeReqUpdate = {
  // 공통 코드 이름
  name?: string;

  // 출력 순서
  displayNumber?: number;

  // 외부 코드 #1 기존 코드 보관 용
  externalCode1?: string;

  // 외부 코드 #2 기존 코드 보관 용.
  externalCode2?: string;

  // 외부 코드 #3 기존 코드 보관 용.
  externalCode3?: string;

  // 상태
  status?: string;

  // 공통 코드 설명
  description?: string;

  // 공통 코드 이름
  commonCodeName?: string;
};


export type CommonCodeReqUpdateForOrder = {
  // 공통코드 아이디
  id: string;

  // 노출 순서
  displayNumber: number;
};


export type CommonCodeTypeReqUpdate = {
  // 공통 코드 유형 이름
  name?: string;

  // 공통 코드 유형 설명
  description?: string;
};


export type ApiReqUpdate = {
  // API 이름
  name?: string;

  // API 설명
  description?: string;

  // URI
  uri?: string;

  // HTTP method
  httpMethod?: string;

  // 접근 가능 역할(s)
  roles?: number;
};


export type ApiResId = {
  // API 아이디
  id?: number;
};


export type CommonResponseApiResId = {
  code?: string;

  message?: string;

  data?: ApiResId;
};


export type AtmReqUpdateForRecoveryComplete = {};


export type AtmResId = {
  // ATM 아이디
  id?: number;
};


export type CommonResponseAtmResId = {
  code?: string;

  message?: string;

  data?: AtmResId;
};


export type AtmReqUpdateForComponentVersionUpdate = {
  // 구성요소 코드
  atmComponentCode: string;

  // S/W 버전
  atmComponentVersion: string;
};


export type AtmComponentResItem = {
  // ATM 구성 요소 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // 구성요소 코드
  atmComponentCode?: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // 구성요소 코드
  attributes?: string;

  // 상태
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type AtmMaintenanceRequestCategoryResItem = {
  // ATM 점검 요청 분류 아이디
  id?: number;

  // ATM 점검 요청 분류 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // ATM 점검 요청 분류 설명
  description?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // ATM 점검 가이드
  guide?: string;

  // ATM 유형(s)
  atmTypes?: number;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type AtmMaintenanceRequestResItem = {
  // 아이디
  id?: number;

  // ATM 점검 아이디
  atmMaintenanceId?: number;

  // ATM 점검 요청 분류 아이디
  atmMaintenanceRequestCategoryId?: number;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  atmMaintenanceRequestCategory?: AtmMaintenanceRequestCategoryResItem;
};


export type AtmMaintenanceResItem = {
  // 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // ATM 점검 요청자
  atmMaintenanceRequesterTypeCode?: string;

  // ATM 점검 유형
  atmMaintenanceTypeCode?: string;

  // DRP에서 NPS에 현장 점검 요청 시 작성하는 내용
  atmMaintenanceRequest?: string;

  // (ATM 점거 가이드에 따른) ATM 점검 결과
  atmMaintenanceResult?: string;

  // 츨동 업체 아이디
  partnerId?: number;

  // 츨동 기사 아이디
  partnerMemberId?: number;

  // 유상/무상
  freeYn?: string;

  // 출동 업체에서 관리하는 코드
  externalId?: string;

  // 예약 일자 (YYYYMMDDHHMM)
  scheduledAt?: string;

  // S : Scheduled (예약 / 등록 됨) / R : Requested (NPS에 요청 됨) / C : Canceled (자동 복구에 따른 취소) / A : Assigned / P : Processing (ATM에 login한 시점) / N : Completed (NPS에서 처리 완료) / M : Confirm (민팃에서 확인 완료)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // ATM 점검 요청 유형
  atmMaintenanceRequests?: AtmMaintenanceRequestResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type AtmResItem = {
  // ATM 아이디
  id?: number;

  // ATM 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // ATM unique 이름
  nameUk?: string;

  // ATM 일련 번호
  atmSerialNumber?: string;

  // 마스터 인증번호
  atmPassword?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode?: string;

  // 설치 장소
  atmInstalledPlace?: string;

  // 시도 코드
  atmInstalledSidoCode?: string;

  // 시군구 코드
  atmInstalledSigunguCode?: string;

  // 경도
  atmInstalledLongitude?: string;

  // 위도
  atmInstalledLatitude?: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: Date;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: Date;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId?: number;

  // 거래처 번호
  branchId?: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: Date;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: Date;

  // N : Not Installed / I : Installed / A : Activated / U : Under Maintenance / S : Suspended / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;

  // ATM 점검
  atmMaintenances?: AtmMaintenanceResItem[];

  // ATM 구성요소
  atmComponents?: AtmComponentResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmResItem = {
  code?: string;

  message?: string;

  data?: AtmResItem;
};


export type AtmMaintenanceReqUpdateForCollectorComplate = {};


export type AtmMaintenanceReqUpdateForCollectorLogin = {};


export type AtmCollectionReqUpdate = {
  // (수거) 파트너 아이디
  partnerId?: number;

  // (수거) 파트너 멤버 아이디 (기사)
  partnerMemberId?: number;

  // 수거 예정 일자
  scheduledAt?: string;

  // 상태
  status?: string;

  // 파일 아이디
  fileId?: string;
};


export type AtmCollectionResId = {
  // 아이디
  id?: number;
};


export type CommonResponseAtmCollectionResId = {
  code?: string;

  message?: string;

  data?: AtmCollectionResId;
};


export type AtmCollectionReqUpdateForQuantityCollected = {
  // 수거 수량
  quantityCollected?: number;

  // 디바이스 아이디
  deviceIds?: number[];
};


export type AtmReqUpdate = {
  // ATM 이름
  name?: string;

  // ATM unique 이름
  nameUk?: string;

  // ATM 일련 번호
  atmSerialNumber?: string;

  // 마스터 인증번호
  atmPassword?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode?: string;

  // 설치 장소
  atmInstalledPlace?: string;

  // 동 코드
  atmInstalledDongCode?: string;

  // 경도
  atmInstalledLongitude?: string;

  // 위도
  atmInstalledLatitude?: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: string;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: string;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId?: number;

  // 거래처 번호
  branchId?: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: string;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: string;

  // 상태
  status?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;

  // 구성 요소
  atmComponents?: AtmReqUpdateAtmComponent[];
};


export type AtmReqUpdateAtmComponent = {
  // ATM 구성 요소 아이디
  id?: number;

  // 구성요소 코드
  atmComponentCode: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // 구성요소 코드
  attributes?: string;

  // 구성요소상태 설명
  atmComponentStatusDescription?: string;

  // 상태
  status: string;
};


export type AtmReqUpdateForWithdrawal = {};


export type AtmReqUpdateForWithdrawalRequest = {};


export type AtmReqUpdateForReplacement = {};


export type AtmReqUpdateForReplacementRequest = {};


export type AtmReqUpdateForRepairComplete = {};


export type AtmReqUpdateForOperating = {};


export type AtmReqUpdateForInstallRequest = {};


export type AtmReqUpdateForInstallComplate = {};


export type AtmReqUpdateForDelete = {};


export type AtmTypeComponentReqUpdateForOrder = {
  // ATM 유형 별 구성 요소 아이디
  id: number;

  // 노출 순서
  displayNumber: number;
};


export type AtmStatusReqUpdate = {};


export type AtmStatusResId = {
  // ATM 상태 아이디
  id?: number;
};


export type CommonResponseAtmStatusResId = {
  code?: string;

  message?: string;

  data?: AtmStatusResId;
};


export type AtmMaintenanceReqUpdate = {
  // (ATM 점거 가이드에 따른) ATM 점검 결과 OAM을 통한 원격 점검 내역 등록시 생략 가능
  atmMaintenanceResult?: string;

  // S : Scheduled (예약 / 등록 됨), R : Requested (NPS에 요청 됨), C : Canceled (자동 복구에 따른 취소), A : Assigned, P : Processing (ATM에 login한 시점), N : Completed (NPS에서 처리 완료), M : Confirm (민팃에서 확인 완료)
  status?: string;

  // ATM 점검 상태 이미지 아이디 리스트
  atmMaintenanceStatusFileIds?: string[];

  // ATM 구성요소 점검 내역 리스트
  atmComponentMaintenances?: AtmMaintenanceReqUpdateAtmComponentMaintenance[];
};


export type AtmMaintenanceReqUpdateAtmComponentMaintenance = {
  // 점검 요청 내역
  maintenanceRequest?: string;

  // 점검 처리 결과
  maintenanceResult?: string;

  atmComponentCode?: string;
};


export type AtmMaintenanceResId = {
  // 아이디
  id?: number;
};


export type CommonResponseAtmMaintenanceResId = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceResId;
};


export type AtmMaintenanceReqUpdateForEmergencyDispatch = {};


export type AtmMaintenanceReqUpdateForConfirm = {
  // H/W 일련 번호
  atmComponentSerialNumbers?: string[];
};


export type AtmMaintenanceReqUpdateForCollectorAssign = {
  // 츨동 기사 아이디
  partnerMemberId?: number;
};


export type AtmMaintenanceReqUpdateForCancelConfirm = {};


export type AtmMaintenanceStatusReqUpdate = {};


export type AtmMaintenanceStatusResId = {
  // 아이디
  id?: number;
};


export type CommonResponseAtmMaintenanceStatusResId = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceStatusResId;
};


export type AtmMaintenanceRequestCategoryReqUpdateForManage = {
  // ATM 점검 요청 분류 이름
  name?: string;

  // ATM 점검 요청 분류 설명
  description?: string;

  // ATM 점검 요청 분류 가이드
  guide?: string;

  // ATM 유형(s)
  atmTypes?: number;

  // 상태
  status?: string;
};


export type AtmMaintenanceRequestCategoryResId = {
  // ATM 점검 요청 분류 아이디
  id?: number;
};


export type CommonResponseAtmMaintenanceRequestCategoryResId = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceRequestCategoryResId;
};


export type AtmComponentStockReqUpdate = {
  // ATM 구성요소 코드
  atmComponentCode?: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // H/W 속성
  attributes?: string;

  // (수리 업체 관리) 파트너 아이디
  partnerId?: number;

  // (보관) 지점 아이디
  branchId?: number;

  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // S : Stock (재고 - 새 것) / B : Breakdown (고장) / R : Repaired (수리 완료) / I : Installed (설치 완료) / D : Deleted (폐기)
  status: string;

  // ATM 유형
  atmTypeCode?: string;
};


export type AtmComponentStockResId = {
  // ATM 구성 요소 재고 아이디
  id?: number;
};


export type CommonResponseAtmComponentStockResId = {
  code?: string;

  message?: string;

  data?: AtmComponentStockResId;
};


export type AtmComponentStockReqUpdateForRepaired = {};


export type AtmCollectionStatusReqUpdate = {};


export type AtmCollectionStatusResId = {
  // 아이디
  id?: number;
};


export type CommonResponseAtmCollectionStatusResId = {
  code?: string;

  message?: string;

  data?: AtmCollectionStatusResId;
};


export type AdministratorReqUpdateForManage = {
  // 권한 유형
  roles?: number;

  // 상태
  status?: string;
};


export type AdministratorResId = {
  // 아이디
  id?: string;
};


export type CommonResponseAdministratorResId = {
  code?: string;

  message?: string;

  data?: AdministratorResId;
};


export type AdministratorReqUpdateForLoginPassword = {
  // 로그인 패스워드
  loginPassword?: string;
};


export type DailyAtmStatusReqCreate = {
  // 통계 날짜
  yyyymmdd: string;

  // ATM 유형 코드
  atmTypeCode: string;

  // 법정동 시도 코드 (시군구 코드 → 노출 시 시도로 노출)
  sidoCode: string;

  // 법정동 시군구 코드 (시군구 코드 → 노출 시 시도로 노출)
  sigunguCode: string;

  // N Not installed (설치 전 - 새것), W Waiting for installation (설치 대기), I Installed (설치 완료), O In operation(운영 중), U Under maintenance (점검 중), R Waiting for replacement (교체 대기 중), F Under repair (fix) (수리 중) , A Waiting for withdrawal (철수 대기), S In storage (수리 후, 창고 보관), D Deleted (삭제 - 폐기)
  atmStatus: string;

  // ATM 개수
  atmCount?: number;

  // 검사 총 건수
  inspectionCount?: number;

  // 검사 휴대폰 (unique IMEI) 건수
  inspectionImeiCount?: number;

  // 매입 건수 반납률 = purchase_count / inspection_imei_count
  purchaseCount?: number;
};


export type DailyAtmStatusResId = {
  // 아이디
  id?: number;
};


export type CommonResponseDailyAtmStatusResId = {
  code?: string;

  message?: string;

  data?: DailyAtmStatusResId;
};


export type SmartVisionReqResult = {
  // 스마트비전 결과 ID
  RLTM_HNDL_OCUR_ID?: string;

  // 분류요청 Set ID
  SELL_ID?: string;

  // 결과코드
  REUSLT_CODE?: string;

  // 결과코드
  DESCRIPTION?: string;

  // AI 모델 버전
  AI_MODEL_VERSION?: string;

  // inference 타임 이미지 입력부터 전체 판정까지 걸린 시간
  INFERENCE_TIME?: string;

  // 이미지 집합
  CORNER?: any;

  // 전면 이미지 집합
  TOP?: any;

  // 측면 이미지 집합
  SIDE?: any;

  // 후면 이미지 집합
  BACK?: any;

  // LCD 이미지 집합
  LCD?: any;

  REPR_DEFT?: string;

  CLASSIFY_CODE?: string;

  // LCD Segmentation 모델 결과 등급
  SEG_GRADE?: string;

  // LCD Classification 모델 결과 등급
  CLF_GRADE?: string;

  // segGrade 결과와 clfGrade 결과가 동일한지 여부
  IS_EQ_GRADE?: string;

  // 코너필름 설치여부
  HAS_CORNER_FILM?: string;
};


export type SmartVisionReqResultSmartVisionImage = {
  // 이미지 아이디
  IMAGE_ID?: string;

  // 이미지 경로
  IMAGE_PATH?: string;

  // 예측 결과
  PREDICT_RESULT?: string;

  // 예측확률 아이디
  PROBABILITY_RESULT_ID?: string;

  // 예측확률 결과
  PROBABILITY_RESULT?: string;
};


export type PurchaseReqCreate = {
  // 회원 아이디
  memberId: string;

  // 디바이스 아이디
  deviceId: number;

  // 검사 아이디
  inspectionId: number;

  // 매입 방법 타입 코드
  purchaseMethodTypeCode?: string;

  // 보상 총 금액
  rewardTotalPrice: number;

  // 매입 보상
  purchaseRewards?: PurchaseReqCreatePurchaseReward[];
};


export type PurchaseReqCreatePurchaseReward = {
  // 보상 타입 코드
  rewardTypeCode: string;

  // 가격
  price: number;

  // 보상 가치
  rewardValue: string;
};


export type PurchaseRewardReqCreate = {};


export type PurchaseRewardResId = {
  // 매입 보상 아이디
  id?: number;
};


export type CommonResponsePurchaseRewardResId = {
  code?: string;

  message?: string;

  data?: PurchaseRewardResId;
};


export type PurchasePricePolicyReqCreate = {
  // 적용 시작 일자
  applicationStartDate: string;

  // 적용 종료 일자
  applicationEndDate: string;

  // A : Activated / D : Deleted
  status: string;

  // 서비스 아이디
  serviceId: string;

  // 디바이스 유형 코드
  deviceTypeCode: string;
};


export type PurchasePricePolicyResId = {
  // 매입 가격 정책 아이디
  id?: number;
};


export type CommonResponsePurchasePricePolicyResId = {
  code?: string;

  message?: string;

  data?: PurchasePricePolicyResId;
};


export type PurchaseDeviceModelReqCreate = {
  // 디바이스 모델 아이디
  deviceModelId: number;

  // 매입 가격 정책 아이디
  purchasePricePolicyId: number;

  // A : Activated / D : Deleted
  status: string;
};


export type PurchaseDeviceModelResId = {
  // 매입 디바이스 모델 아이디
  id?: number;
};


export type CommonResponsePurchaseDeviceModelResId = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelResId;
};


export type PurchaseDeviceModelGradePriceReqCreate = {
  // 매입 디바이스 모델 아이디
  purchaseDeviceModelId: number;

  // 디바이스 모델 아이디
  deviceModelId: number;

  // 매입 등급 코드
  purchaseGradeCode: string;

  // 가격
  price: number;

  // A : Activated / D : Deleted
  status: string;

  // 통화코드
  currencyCode: string;
};


export type PurchaseDeviceModelGradePriceResId = {
  // 매입 디바이스 모델 가격 아이디
  id?: number;
};


export type CommonResponsePurchaseDeviceModelGradePriceResId = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelGradePriceResId;
};


export type PartnerReqCreateForManage = {
  // 이름
  name: string;

  // 설명
  description?: string;

  // 파트너 유형
  partnerTypeCode: string;

  // 사업자 등록 번호
  companyRegistrationNumber: string;

  // 업태/종목
  companyBusinessType?: string;

  // 법인 등록 번호
  corporateRegistrationNumber?: string;

  // 법인명
  corporateName: string;

  // 대표자명
  corporateRepresentativeName: string;

  // 우편번호
  addressZipcode: string;

  // 도로명 주소
  addressStreetName: string;

  // 지번 주소
  addressStreetNumber: string;

  // 상세 주소
  addressDetail: string;

  // 홈페이지 주소
  homepageUrl: string;

  // 대표 전화번호
  phoneNumber: string;

  // 대표 이메일
  email: string;

  // 세금계산서 발행용 이메일
  emailTax: string;

  // 상태
  status: string;

  // 파트너 파일
  partnerFiles?: PartnerReqCreateForManagePartnerFile[];
};


export type PartnerReqCreateForManagePartnerFile = {
  // S3 파일 아이디
  fileId: string;

  // 파트너 파일 타입
  partnerFileTypeCode: string;
};


export type PartnerMemberBankAccountReqCreate = {
  // 은행코드
  bankCode?: string;

  // 계좌명
  bankAccountName?: string;

  // 계좌번호
  bankAccountNumber?: string;

  // 계좌 확인 상태
  bankAccountConfirmStatus?: string;
};


export type PartnerMemberReqCreate = {
  // (Encryped) 이름
  name: string;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber: string;

  // (Encryped) 이메일
  email: string;

  // 파트너 아이디
  partnerId: number;

  // 파트너 담당자 여부
  partnerMasterYn: string;

  // 지점 아이디
  branchId?: number;

  // 지점 담당자 여부
  branchMasterYn: string;

  // 파트너 멤버파일
  partnerMemberFiles?: PartnerMemberReqCreatePartnerMemberFile[];

  partnerMemberBankAccount?: PartnerMemberBankAccountReqCreate;
};


export type BranchReqCreate = {
  // 이름
  name: string;

  // 설명
  description: string;

  // 파트너 아이디
  partnerId: number;

  // 지사 유형
  branchTypeCode: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode: string;

  // 도로명 주소
  addressStreetName: string;

  // 지번 주소
  addressStreetNumber: string;

  // 상세 주소
  addressDetail: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // 지점 파일
  branchFiles?: BranchReqCreateBranchFile[];
};


export type InspectionReqCreate = {
  // 회원 아이디
  memberId: string;

  // ATM 아이디
  atmId: number;

  // 디바이스 아이디
  deviceId: number;

  // 디바이스 모델 아이디
  deviceModelId: number;

  // 디바이스 일련번호
  serialNumber?: string;

  // 디바이스 일련번호2
  serialNumber2?: string;

  // OS version
  osVersion: string;

  // rooting 여부
  rootingYn: string;

  // USIM 여부
  usimYn: string;

  // SD Card 여부
  sdcardYn: string;

  // 펜 여부
  penYn: string;

  sections?: InspectionReqCreateSection[];

  inspectionFiles?: InspectionReqCreateInspectionFile[];
};


export type InspectionReqCreateInspectionFile = {
  // 검사 부위 코드
  sectionCode: string;

  files?: InspectionReqCreateInspectionFileFile[];
};


export type InspectionReqCreateInspectionFileFile = {
  // 검사 파일 아이디
  fileId: string;

  // 검사 파일 순번
  fileNumber: number;
};


export type InspectionReqCreateSection = {
  // 검사 부위 코드
  sectionCode: string;

  // 결함 결과
  defects?: any;
};


export type InspectionProfileReqCreate = {};


export type InspectionProfileResId = {
  // 아이디
  id?: number;
};


export type CommonResponseInspectionProfileResId = {
  code?: string;

  message?: string;

  data?: InspectionProfileResId;
};


export type DeviceDeletionReqCreateSafe = {
  // 디바이스 아이디
  deviceId?: number;

  // 삭제 요청 유형 코드
  deletionRequestTypeCode?: string;

  // 삭제 앱 유형 코드
  deletionAppTypeCode?: string;

  // 삭제 앱 버전
  deletionAppVersion?: string;

  // 삭제 방법 코드
  deletionMethodCode: string;

  // 삭제 프로세스 진행률
  progressRate?: number;

  // 삭제 인증서 파일 아이디(pdf)
  deleteionCertificationFileId?: string;

  device?: DeviceReqCreate;

  // 사용자 아이디
  memberId: string;
};


export type DeviceReqCreate = {
  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 디바이스 일련번호
  serialNumber?: string;

  // 디바이스 일련번호2
  serialNumber2?: string;

  // imei
  imei: string;

  // imei2
  imei2?: string;

  // OS version
  osVersion?: string;

  // rooting 여부 YN
  rootingYn: string;

  // USIM 여부 YN
  usimYn: string;

  // SD Card 여부 YN
  sdcardYn: string;

  // 펜 여부
  penYn: string;

  // 스테이터스 상태값
  status: string;
};


export type ImeiReqFilter = {
  imei?: string;
};


export type DeviceReqCreateForImei = {
  // IMEI
  imei: string;

  // 2nd IMEI
  imei2?: string;
};


export type DeviceDeletionReqCreateAtm = {
  // 디바이스 아이디
  deviceId?: number;

  // 삭제 요청 유형 코드
  deletionRequestTypeCode?: string;

  // 삭제 앱 유형 코드
  deletionAppTypeCode?: string;

  // 삭제 앱 버전
  deletionAppVersion?: string;

  // 삭제 방법 코드
  deletionMethodCode: string;

  // 삭제 프로세스 진행률
  progressRate?: number;

  // 삭제 인증서 파일 아이디(pdf)
  deleteionCertificationFileId?: string;

  // 검사 아이디
  inspectionId: number;

  // ATM 아이디
  atmId?: number;

  // 매입 아이디
  purchaseId: number;
};


export type DeviceSeriesReqCreate = {
  // 시리즈 이름
  name: string;

  // 시리즈 설명
  description?: string;

  // 디바이스 제조사 아이디
  deviceManufactureId: number;

  // 디바이스 유형
  deviceTypeCode: string;

  // 시리즈 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber: number;

  // A : Activate / D : Deactivated
  status: string;
};


export type DeviceModelReqCreate = {
  // 모델 번호 ( e.g., SM-S908-1T)
  number: string;

  // 모델 이름
  name: string;

  // 모델 설명
  description?: string;

  // 디바이스 유형
  deviceTypeCode: string;

  // 제조사 아이디
  deviceManufactureId: number;

  // 디바이스 시리즈 아이디
  deviceSeriesId: number;

  // OS 유형
  osTypeCode: string;

  // 스마트폰 외관 유형
  smartphoneAppearanceTypeCode?: string;

  // 이동 통신사 코드
  mobileCarrierCode: string;

  // 모델 이미지 파일 아이디
  imageFileId?: string;

  // 출시 년월
  lunchingYymm: string;

  // 출시 가격
  lunchingPrice: number;

  // 저장 용량
  storageCapacity?: string;

  // 컬러
  color?: string;

  // 케이블 유형
  cableTypeCode?: string;

  // H/W 사이즈 (mm)
  sizeHardware?: string;

  // 디바이스 사이즈
  sizeDevice?: string;

  // 액정 사이즈
  sizeScreen?: string;

  // 볼륨업 버튼 위치 값
  posistionVolumUpButton?: string;

  // 볼륨다운 버튼 위치 값
  posistionVolumDownButton?: string;

  // 홈 버튼 위치 값
  positionHomeButton?: string;

  // 뒤로가기 버튼 위치 값
  positionGoBackButton?: string;

  // 메뉴 버튼 위치 값
  postionMenuButton?: string;

  // 전원 버튼 위치 값
  positionPowerButton?: string;

  // 전면 카메라 위치 값
  positionFrontCamera?: string;

  // 후면 카메라 위치 값
  positionBackCamera?: string;

  // 근접 센서 위치 값
  positionProximitySensor?: string;

  // 진동 버튼 위치 값
  positionVibrationButton?: string;

  // 매입 대상 여부
  purchaseTargetYn: string;

  // 노출 순서
  displayNumber: number;

  // 상태
  status: string;
};


export type DeviceManufactureReqCreate = {
  // 제조사 이름
  name: string;

  // 디바이스 유형 설명
  description: string;

  // 제조사 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber: number;

  // 상태
  status: string;
};


export type DeviceManufactureTypeReqCreate = {
  // 디바이스 제조사 아이디
  deviceManufactureId: number;

  // 디바이스 유형
  deviceTypeCode: string;

  // A : Activate / D : Deactivated
  status: string;
};


export type TermsAgreementReqCreate = {
  // 약관 동의 아이디
  id?: string;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  termsId?: string;

  // 동의 여부
  agreementYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type SurveyParticipationReqCreate = {
  // 회원 아이디
  memberId: string;

  // 설문 아이디
  surveyId: number;

  selectedAnswers?: SurveyParticipationReqCreateSelectedAnswer[];
};


export type SurveyParticipationReqCreateSelectedAnswer = {
  // 설문 질문 아이디
  surveyQuestionId: number;

  // 설문 답변 아이디
  selectedAnswer: number;
};


export type SurveyParticipationResId = {
  // 약관 동의 아이디
  id?: number;
};


export type CommonResponseSurveyParticipationResId = {
  code?: string;

  message?: string;

  data?: SurveyParticipationResId;
};


export type EventApplicationReqCreate = {
  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  termsId: string;

  // 이벤트 아이디
  eventId: string;

  // 채널
  channelCode: string;

  // 페이지 코드
  menuCode: string;

  // (Encryped) 이름
  name?: string;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // (Encryped) 이메일
  email?: string;

  // (Encryped) CI
  ci?: string;

  // 생년월일
  birthday?: string;

  // 성별 M : 남성 / W : 여성 / U : Unknown
  gender: string;

  // 외국인 여부 Y : 외국인 / N : 내국인
  foreignYn: string;

  // Cengold 가입요청
  cengoldSignUpYn: string;

  // Completed (본인 확인 완료) / Requested (본인 확인 알림톡 발송)
  status: string;

  // 약관정보 아이디
  term?: TermsAgreementReqFilter[];
};


export type TermsAgreementReqFilter = {
  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  termsId?: string;

  // 동의 여부
  agreementYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type TermsReqCreate = {
  // 이름
  name: string;

  // 설명
  description: string;

  // 약관 카테고리 유형 코드
  termsCategoryCode: string;

  // 필수 여부
  mandatoryYn: string;

  // 반복 동의 여부
  repeatYn: string;

  // 이력 관리 여부
  historyYn: string;

  // 상태
  status: string;
};


export type TermsContentReqCreate = {
  // 약관 내용
  content: string;

  // 약관 아이디
  termsId: string;

  // 상태
  status: string;

  // 시행 일시
  executionAt: Date;
};


export type SigunguReqCreate = {};


export type ServiceSeviceReqCreate = {};


export type ServiceSeviceResId = {
  // 아이디
  id?: string;
};


export type CommonResponseServiceSeviceResId = {
  code?: string;

  message?: string;

  data?: ServiceSeviceResId;
};


export type MenuReqCreate = {
  // 메뉴명
  menuName: string;

  // 메뉴 설명
  description?: string;

  // 메뉴 코드
  menuCode: string;

  // 메뉴 URL
  menuUri: string;

  // 상위 페이지 아이디
  parentMenuId: number;

  // 노출 순서
  displayNumber: number;

  // 메뉴 여부
  menuYn: string;

  // 접근 가능 역할(s)
  roles: number;
};


export type MenuButtonReqCreate = {
  // 페이지 아이디
  menuId: number;

  // 버튼 설명
  description?: string;

  // 버튼 코드 (client 에서 정의 됨)
  buttonCode: string;

  // 버튼 이름
  buttonName: string;

  // 페이지 URI
  menuUri: string;

  // 노출 순서
  displayNumber: number;

  // 접근 가능 역할(s)
  roles?: number;
};


export type EventFileReqCreate = {
  // 이벤트 파일 유형 코드
  eventFileTypeCode: string;

  // 파일 아이디
  fileId: string;

  // 노출 순서
  displayNumber: number;
};


export type EventReqCreateForManage = {
  // 이름
  name: string;

  // 설명
  description: string;

  // 이벤트 시작 일시
  eventStartDatetime: string;

  // 이벤트 종료 일시
  eventEndDatetime: string;

  // 이벤트 응모 유형 코드
  eventApplicationTypeCode: string;

  // 이벤트 당첨자 선정 방법 유형 코드
  eventWinnerSelectionMethodCode: string;

  // Quiz (EAT000QUIZ)  + 전체 / PASS 인증(EAT000PASS) + 추첨
  eventAttributes: string;

  // 노출 채널(s)
  displayChannels: number;

  // 상위 이벤트 아이디
  parentEventId?: string;

  // 상태
  status: string;

  // 이벤트 파일
  eventFiles?: EventFileReqCreate[];
};


export type EventTermsReqCreate = {
  // 이벤트 아이디
  eventId: string;

  // 약관 아이디
  termsId: string;

  // 약관 노출 순서
  displayNumber: number;

  // A : Activate / D : Deactivated
  status: string;
};


export type EventTermsResId = {
  // 이벤트 파일 아이디
  id?: number;
};


export type CommonResponseEventTermsResId = {
  code?: string;

  message?: string;

  data?: EventTermsResId;
};


export type EventBenefitReqCreate = {
  // 이벤트 아이디
  eventId: string;

  // 쿠폰 정책 아이디
  couponPolicyId: number;

  // 쿠폰 노출 순서
  displayNumber: number;

  // 매입가에 따른 조건
  eventBenefitPaidCondition: string;

  // A : Activate / D : Deactivated
  status: string;
};


export type EventBenefitResId = {
  // 이벤트 혜택 아이디
  id?: number;
};


export type CommonResponseEventBenefitResId = {
  code?: string;

  message?: string;

  data?: EventBenefitResId;
};


export type CouponPolicyReqCreate = {
  // 이름
  name: string;

  // 설명
  description: string;

  // 쿠폰 유형
  couponTypeCode: string;

  // 정액 지급, 10,000원. e.g, 10000  정류 지급, 단말 대금의 10.00%. e.g., 1000  선 밸행된 쿠폰
  couponTypeValue: string;

  // 쿠폰 발행 시작 일시
  couponIssuanceStartDatetime: string;

  // 쿠폰 발행 종료 일시
  couponIssuanceEndDatetime: string;

  // (제한) 최대 발행 수량
  limitedTotalNumber: number;

  // (제한) 1일 최대 발행 수량
  limitedTotalNumberPerDay: number;

  // (제한) 1일 최대 발행 수량
  limitedUserNumber: number;

  // (제한) 1인당 1일 최대 발행 수량
  limitedTotalNumberPerDayUser: number;

  // 쿠폰 사용 만료 유형
  couponUseExpirationTypeCode: string;

  // 쿠폰 사용 만료 일자 지정 e.g., 20240105 / 쿠폰 생성 일자 기준 만료 일자 지정 e.g., 30
  couponUseExpirationTypeValue: string;

  // 플랫폼 분담율
  shareRatePlatform: number;

  // 제휴업체 분담율
  shareRatePartner: number;

  // A : Activate / D : Deactivated
  status: string;
};


export type CouponPolicyResId = {
  // 쿠폰 정책 아이디
  id?: number;
};


export type CommonResponseCouponPolicyResId = {
  code?: string;

  message?: string;

  data?: CouponPolicyResId;
};


export type ContentDisplayReqCreate = {};


export type CommonCodeReqCreate = {
  // 공통 코드
  id: string;

  // 공통 코드 이름
  name: string;

  // 공통 코드 유형 아이디
  commonCodeTypeId: string;

  // 출력 순서
  displayNumber: number;

  // 외부 코드 #1 기존 코드 보관 용
  externalCode1?: string;

  // 외부 코드 #2 기존 코드 보관 용.
  externalCode2?: string;

  // 외부 코드 #3 기존 코드 보관 용.
  externalCode3?: string;

  // 상태
  status: string;

  // 공통 코드 설명
  description?: string;

  // 공통 코드 이름
  commonCodeName?: string;
};


export type CommonCodeResId = {
  // 공통 코드
  id?: string;
};


export type CommonResponseCommonCodeResId = {
  code?: string;

  message?: string;

  data?: CommonCodeResId;
};


export type CommonCodeTypeReqCreate = {
  // 공통 코드 유형 아이디
  id?: string;

  // 공통 코드 유형 이름
  name?: string;

  // 공통 코드 유형 설명
  description?: string;
};


export type CommonCodeTypeResId = {
  // 공통 코드 유형 아이디
  id?: string;
};


export type CommonResponseCommonCodeTypeResId = {
  code?: string;

  message?: string;

  data?: CommonCodeTypeResId;
};


export type ApiReqCreate = {
  // API 이름
  name: string;

  // API 설명
  description?: string;

  // URI
  uri: string;

  // HTTP method
  httpMethod: string;

  // 접근 가능 역할(s)
  roles?: number;
};


export type AtmMaintenanceReqCreateForRemoteMaintenance = {
  // ATM 아이디
  atmId: number;

  // ATM 점검 요청 분류 아이디
  atmMaintenanceRequestCategoryIds: number[];

  // 점검 구성요소
  atmComponentMaintenances?: AtmMaintenanceReqCreateForRemoteMaintenanceAtmComponentMaintenance[];
};


export type AtmMaintenanceReqCreateForRemoteMaintenanceAtmComponentMaintenance =
  {
    // 점검 요청 내역
    maintenanceRequest?: string;

    // 점검 처리 결과
    maintenanceResult?: string;

    atmComponentCode?: string;
  };


export type AtmMaintenanceReqCreateForOnsiteMaintenance = {
  // ATM 아이디
  atmId: number;

  // ATM 점검 요청 분류 아이디
  atmMaintenanceRequestCategoryIds: number[];

  // DRP에서 NPS에 현장 점검 요청 시 작성하는 내용
  atmMaintenanceRequest?: string;

  // 점검 구성요소
  atmComponentMaintenances?: AtmMaintenanceReqCreateForOnsiteMaintenanceAtmComponentMaintenance[];
};


export type AtmMaintenanceReqCreateForOnsiteMaintenanceAtmComponentMaintenance =
  {
    // 점검 요청 내역
    maintenanceRequest?: string;

    // 점검 처리 결과
    maintenanceResult?: string;

    atmComponentCode?: string;
  };


export type AtmMaintenanceReqUpdateForOnsiteNpsCallback = {
  // 장애 등록 번호
  atm_obst_rcv_num: number;

  // 처리 코드
  prcs_code: string;

  // 처리내용 또는 콜취소 시 사유
  prcs_ctts?: string;
};


export type AtmAcceptanceDeviceReqCreate = {
  // 디바이스 아이디
  deviceId: number;

  // ATM 아이디
  atmId: number;

  // ATM 수납 디바이스 파일
  atmAcceptanceDeviceFiles?: AtmAcceptanceDeviceReqCreateAtmAcceptanceDeviceFile[];
};


export type AtmAcceptanceDeviceReqCreateAtmAcceptanceDeviceFile = {
  // ATM 부품 코드
  atmPartCode: string;

  // 파일 아이디
  fileId: string;
};


export type AtmReqCreate = {
  // ATM 이름
  name: string;

  // ATM unique 이름
  nameUk: string;

  // ATM 일련 번호
  atmSerialNumber: string;

  // 마스터 인증번호
  atmPassword: string;

  // ATM 유형
  atmTypeCode: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode: string;

  // 설치 장소
  atmInstalledPlace: string;

  // 동 코드
  atmInstalledDongCode?: string;

  // 경도
  atmInstalledLongitude: string;

  // 위도
  atmInstalledLatitude: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: string;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: string;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId: number;

  // 거래처 번호
  branchId: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: string;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;

  atmComponents?: AtmReqCreateAtmComponent[];
};


export type AtmReqCreateAtmComponent = {
  // 구성요소 코드
  atmComponentCode: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // 구성요소 코드
  attributes: string;

  // 상태
  status: string;
};


export type AtmTypeComponentReqSave = {
  // ATM 유형 별 구성 요소 아이디
  id?: number;

  // ATM 유형
  atmTypeCode: string;

  // ATM 구성요소 코드
  atmComponentCode: string;

  // 노출 순서
  displayNumber: number;

  // 필수 여부
  mandatoryYn: string;

  // 상태
  status: string;
};


export type AtmStatusReqCreate = {};


export type AtmMaintenanceReqCreateForScheduledMaintenance = {
  // ATM 아이디
  atmId: number;

  // DRP에서 NPS에 현장 점검 요청 시 작성하는 내용
  atmMaintenanceRequest?: string;

  // ATM 점검 요청 분류 아이디
  atmMaintenanceRequestCategoryIds: number[];
};


export type AtmMaintenanceStatusReqCreate = {};


export type AtmMaintenanceRequestCategoryReqCreateForManage = {
  // ATM 점검 요청 분류 이름
  name: string;

  // ATM 점검 요청 분류 설명
  description?: string;

  // ATM 점검 요청 분류 가이드
  guide: string;

  // ATM 유형(s)
  atmTypes: number;

  // 상태
  status?: string;
};


export type AtmComponentReqCreate = {
  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // ATM 구성 요소 재고 아이디 (기존 ATM에 구성요소가 변경 될 경우)
  atmComponentStockId?: number;

  // ATM 구성 요소 교체 사유
  atmComponentStatusDescription?: string;
};


export type AtmComponentStockReqCreate = {
  // ATM 구성요소 코드
  atmComponentCode: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // H/W 속성
  attributes?: string;

  // (수리 업체 관리) 파트너 아이디
  partnerId: number;

  // (보관) 지점 아이디
  branchId: number;

  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // S : Stock (재고 - 새 것) / B : Breakdown (고장) / R : Repaired (수리 완료) / I : Installed (설치 완료) / D : Deleted (폐기)
  status: string;

  // ATM 유형
  atmTypeCode: string;
};


export type AtmCollectionReqCreate = {
  // ATM 아이디 리스트
  atmIds?: number[];
};


export type CommonResponseAtmCollectionResIdList = {
  code?: string;

  message?: string;

  data?: AtmCollectionResId[];
};


export type AtmCollectionStatusReqCreate = {};


export type AdministratorReqLogin = {
  // 로그인 아이디
  loginId?: string;

  // 로그인 패스워드
  loginPassword?: string;

  // 인증번호
  authenticationNumber?: string;
};


export type AdministratorResResponseForJwtToken = {
  // 토큰 타입
  tokenType?: string;

  // 엑세스 토큰
  accessToken?: string;

  // 토큰 만료 시간
  accessTokenExpiresIn?: number;

  // 리프레시 토큰
  refreshToken?: string;

  // 리프레시 토큰 만료 시간
  refreshTokenExpiresIn?: number;

  // 권한
  role?: number;
};


export type CommonResponseAdministratorResResponseForJwtToken = {
  code?: string;

  message?: string;

  data?: AdministratorResResponseForJwtToken;
};


export type AdministratorReqRefreshToken = {
  // 리프레시 토큰
  refreshToken: string;
};


export type AdministratorReqLoginForOtp = {
  // 로그인 아이디
  loginId?: string;

  // 로그인 패스워드
  loginPassword?: string;

  // 인증번호
  authenticationNumber?: string;
};


export type AdministratorReqCreateForAuthenticationNumber = {
  // (Encryped) 이름
  name?: string;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // 로그인 아이디
  loginId?: string;

  // 로그인 패스워드
  loginPassword?: string;
};


export type AdministratorReqCreateForAuthentication = {
  // (Encryped) 이름
  name?: string;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // 로그인 아이디
  loginId?: string;

  // 로그인 패스워드
  loginPassword?: string;

  // 인증번호
  authenticationNumber?: string;
};


export type AdministratorResResponseForAuthentication = {
  // 인증 토큰
  token?: string;
};


export type CommonResponseAdministratorResResponseForAuthentication = {
  code?: string;

  message?: string;

  data?: AdministratorResResponseForAuthentication;
};


export type AtmStatisticsReqFilter = {
  // ATM 통계 기준일
  yyyymmdd?: string;

  // ATM 통계 타입
  statisticsType?: string;
};


export type AtmResResponseForStatistics = {
  // 그룹 키
  groupKey?: string;

  // 설치 대기 ATM 수
  installWaitCount?: number;

  // 운영 중 ATM 수
  operatingCount?: number;

  // 점검 중 ATM 수
  maintenanceCount?: number;

  // 폐기 ATM 수
  deleteCount?: number;
};


export type AtmStatisticsResItemForStatistics = {
  // 실시간 매입 건수
  purchaseStatistics?: BosPurchaseResResponseForStatistics[];

  // 실시간 ATM 통계
  atmStatistics?: AtmResResponseForStatistics[];

  // 일별 ATM 현황 통계
  dailyAtmStatusStatistics?: DailyAtmStatusResResponseForStatistics[];
};


export type DailyAtmStatusResResponseForStatistics = {
  // 그룹 키
  groupKey?: string;

  // 설치 대기 ATM 수
  installWaitCount?: number;

  // 운영 중 ATM 수
  operatingCount?: number;

  // 점검 중 ATM 수
  maintenanceCount?: number;

  // 폐기 ATM 수
  deleteCount?: number;

  // 매입 건수
  purchaseCount?: number;

  // 검사 휴대폰 (unique IMEI) 건수
  inspectionImeiCount?: number;

  // 검사 총 건수
  inspectionCount?: number;
};


export type BosPurchaseResResponseForStatistics = {
  // 그룹 키
  groupKey?: string;

  // 매입 건수
  purchaseCount?: number;
};


export type CommonResponseAtmStatisticsResItemForStatistics = {
  code?: string;

  message?: string;

  data?: AtmStatisticsResItemForStatistics;
};


export type PurchaseReqFilter = {};


export type Sort = {
  sort?: string[];
};


export type PurchaseResItem = {
  // 매입 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 디바이스 아이디
  deviceId?: number;

  // 검사 아이디
  inspectionId?: number;

  // 매입 방법
  purchaseMethodTypeCode?: string;

  // 원화로 환산된 총 금액
  rewardTotalPrice?: number;

  // R : requested
  status?: string;

  // 통화코드
  currencyCode?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponsePurchaseResItemList = {
  code?: string;

  message?: string;

  data?: PurchaseResItem[];
};


export type CommonResponsePurchaseResItem = {
  code?: string;

  message?: string;

  data?: PurchaseResItem;
};


export type Pageable = {
  page?: number;

  size?: number;

  sort?: string[];
};


export type PageableObject = {
  offset?: number;

  sort?: SortObject;

  pageNumber?: number;

  unpaged?: boolean;

  pageSize?: number;

  paged?: boolean;
};


export type SortObject = {
  empty?: boolean;

  unsorted?: boolean;

  sorted?: boolean;
};


export type CommonResponsePurchaseResItemWithPage = {
  code?: string;

  message?: string;

  data?: PurchaseResItemWithPage;
};


export type PurchaseResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PurchaseResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PurchaseRewardReqFilter = {
  // 매입 보상 아이디
  id?: number;

  // 매입 아이디
  purchaseId?: number;

  // 보상 유형
  rewardTypeCode?: string;

  // 원
  price?: number;

  // e.g..현금 지급 시, 지급 금액/ e금 지급시, 금 중량
  rewardValue?: string;

  // 지급 예정 일자
  scheduledDate?: string;

  // 계좌 이체 시, 회원 은행 계좌 아이디
  payTo?: string;

  // R : requested / C : Completed
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type PurchaseRewardResSingle = {
  // 매입 보상 아이디
  id?: number;

  // 매입 아이디
  purchaseId?: number;

  // 보상 유형
  rewardTypeCode?: string;

  // 원
  price?: number;

  // e.g..현금 지급 시, 지급 금액/ e금 지급시, 금 중량
  rewardValue?: string;

  // 지급 예정 일자
  scheduledDate?: string;

  // 계좌 이체 시, 회원 은행 계좌 아이디
  payTo?: string;

  // R : requested / C : Completed
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type CommonResponsePurchaseRewardResSingleList = {
  code?: string;

  message?: string;

  data?: PurchaseRewardResSingle[];
};


export type PurchaseRewardResItem = {
  // 매입 보상 아이디
  id?: number;

  // 매입 아이디
  purchaseId?: number;

  // 보상 유형
  rewardTypeCode?: string;

  // 원
  price?: number;

  // e.g..현금 지급 시, 지급 금액/ e금 지급시, 금 중량
  rewardValue?: string;

  // 지급 예정 일자
  scheduledDate?: string;

  // 계좌 이체 시, 회원 은행 계좌 아이디
  payTo?: string;

  // R : requested / C : Completed
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type CommonResponsePurchaseRewardResItem = {
  code?: string;

  message?: string;

  data?: PurchaseRewardResItem;
};


export type CommonResponsePurchaseRewardResSingleWithPage = {
  code?: string;

  message?: string;

  data?: PurchaseRewardResSingleWithPage;
};


export type PurchaseRewardResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PurchaseRewardResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PurchasePricePolicyReqFilter = {
  // 매입 가격 정책 아이디
  id?: number;

  // 적용 시작 일자
  applicationStartDate?: string;

  // 적용 종료 일자
  applicationEndDate?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 서비스 아이디
  serviceId?: string;

  // 디바이스 유형 코드
  deviceTypeCode?: string;
};


export type PurchasePricePolicyResSingle = {
  // 매입 가격 정책 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 적용 시작 일자
  applicationStartDate?: string;

  // 적용 종료 일자
  applicationEndDate?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 디바이스 유형 코드
  deviceTypeCode?: string;
};


export type CommonResponsePurchasePricePolicyResSingleList = {
  code?: string;

  message?: string;

  data?: PurchasePricePolicyResSingle[];
};


export type PurchasePricePolicyResItem = {
  // 매입 가격 정책 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 적용 시작 일자
  applicationStartDate?: string;

  // 적용 종료 일자
  applicationEndDate?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 디바이스 유형 코드
  deviceTypeCode?: string;
};


export type CommonResponsePurchasePricePolicyResItem = {
  code?: string;

  message?: string;

  data?: PurchasePricePolicyResItem;
};


export type CommonResponsePurchasePricePolicyResSingleWithPage = {
  code?: string;

  message?: string;

  data?: PurchasePricePolicyResSingleWithPage;
};


export type PurchasePricePolicyResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PurchasePricePolicyResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PurchaseDeviceModelReqFilter = {
  // 매입 디바이스 모델 아이디
  id?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 가격 정책 아이디
  purchasePricePolicyId?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type PurchaseDeviceModelResSingle = {
  // 매입 디바이스 모델 아이디
  id?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 가격 정책 아이디
  purchasePricePolicyId?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponsePurchaseDeviceModelResSingleList = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelResSingle[];
};


export type PurchaseDeviceModelResItem = {
  // 매입 디바이스 모델 아이디
  id?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 가격 정책 아이디
  purchasePricePolicyId?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponsePurchaseDeviceModelResItem = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelResItem;
};


export type CommonResponsePurchaseDeviceModelResSingleWithPage = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelResSingleWithPage;
};


export type PurchaseDeviceModelResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PurchaseDeviceModelResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PurchaseDeviceModelGradePriceReqFilter = {
  // 매입 디바이스 모델 가격 아이디
  id?: number;

  // 매입 디바이스 모델 아이디
  purchaseDeviceModelId?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 등급 코드
  purchaseGradeCode?: string;

  // 가격
  price?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type PurchaseDeviceModelGradePriceResSingle = {
  // 매입 디바이스 모델 가격 아이디
  id?: number;

  // 매입 디바이스 모델 아이디
  purchaseDeviceModelId?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 등급 코드
  purchaseGradeCode?: string;

  // 가격
  price?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type CommonResponsePurchaseDeviceModelGradePriceResSingleList = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelGradePriceResSingle[];
};


export type PurchaseDeviceModelGradePriceResItem = {
  // 매입 디바이스 모델 가격 아이디
  id?: number;

  // 매입 디바이스 모델 아이디
  purchaseDeviceModelId?: number;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 매입 등급 코드
  purchaseGradeCode?: string;

  // 가격
  price?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 통화코드
  currencyCode?: string;
};


export type CommonResponsePurchaseDeviceModelGradePriceResItem = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelGradePriceResItem;
};


export type CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage = {
  code?: string;

  message?: string;

  data?: PurchaseDeviceModelGradePriceResSingleWithPage;
};


export type PurchaseDeviceModelGradePriceResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PurchaseDeviceModelGradePriceResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PartnerReqFilter = {
  // 파트너 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 유형
  partnerTypeCode?: string;

  // 관리자 유형
  partnerRoles?: number;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 법인 등록 번호
  corporateRegistrationNumber?: string;

  // 법인명
  corporateName?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // A : Activated / D : Deleted
  status?: string;
};


export type PartnerResSingle = {
  // 파트너 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 유형
  partnerTypeCode?: string;

  // 관리자 유형
  partnerRoles?: number;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 법인 등록 번호
  corporateRegistrationNumber?: string;

  // 법인명
  corporateName?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponsePartnerResSingleList = {
  code?: string;

  message?: string;

  data?: PartnerResSingle[];
};


export type PartnerFileResItem = {
  // 지점 아이디
  id?: number;

  // S3 파일 아이디
  fileId?: string;

  // 파트너 파일 타입
  partnerFileTypeCode?: string;

  // 파트너 아이디
  partnerId?: number;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  file?: FileResItem;

  fileUrl?: string;
};


export type PartnerResItem = {
  // 파트너 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 유형
  partnerTypeCode?: string;

  // 관리자 유형
  partnerRoles?: number;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 법인 등록 번호
  corporateRegistrationNumber?: string;

  // 법인명
  corporateName?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 파트너 파일
  partnerFiles?: PartnerFileResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type FileResItem = {
  // 파일 아이디
  id?: string;

  // 파일 이름
  uploadedFileName?: string;

  // 파일 분류
  namespace?: string;

  // 컨텐츠 타입
  contentType?: string;

  // 컨텐츠 크기
  contentLength?: string;

  // 상태
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponsePartnerResItem = {
  code?: string;

  message?: string;

  data?: PartnerResItem;
};


export type CommonResponsePartnerResSingleWithPage = {
  code?: string;

  message?: string;

  data?: PartnerResSingleWithPage;
};


export type PartnerResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PartnerResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type PartnerMemberReqFilter = {
  // 파트너 멤버 아이디
  id?: number;

  // (Encryped) 이름
  name?: string;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // 파트너 아이디
  partnerId?: number;

  // 지점 아이디
  branchId?: number;

  // (Encryped) 이메일
  email?: string;

  // 파트너 담당자 여부
  partnerMasterYn?: string;

  // 관한 유형
  administratorRoles?: number;

  // 파트너 관리자 아이디
  administratorId?: string;

  // 상태
  status?: string;

  // 상태
  statuses?: string[];
};


export type PartnerMemberResSingle = {
  // 파트너 멤버 아이디
  id?: number;

  // (Encryped) 이름
  name?: string;

  // 파트너 관리자 아이디
  administratorId?: string;

  // 권한 유형
  administratorRoles?: number;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // (Encryped) 이메일
  email?: string;

  // (Encryped) CI
  ci?: string;

  // 생년월일
  birthday?: string;

  // M : 남성 / W : 여성 / U : Unknown
  gender?: string;

  // Y : 외국인 / N : 내국인
  foreignYn?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // (hashed) 이름
  nameSha?: string;

  // (hashed) 휴대폰번호
  mobilePhoneNumberSha?: string;

  // (hashed) 이메일
  emailSha?: string;

  // (hashed) CI
  ciSha?: string;

  // 암호화 키 아이디 (co_cipher_key)
  cipherKeyId?: string;

  // 파트너 아이디
  partnerId?: number;

  // 파트너 담당자 여부
  partnerMasterYn?: string;

  // 지점 아이디
  branchId?: number;

  // 지점 담당자 여부
  branchMasterYn?: string;

  // I : Installed / A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponsePartnerMemberResSingleList = {
  code?: string;

  message?: string;

  data?: PartnerMemberResSingle[];
};


export type BranchFileResItem = {
  // 지점 파일 아이디
  id?: number;

  // S3 파일 아이디
  fileId?: string;

  // 파트너 지점 아이디
  branchId?: number;

  // 파트너 지점 타입
  branchFileTypeCode?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  file?: FileResItem;

  fileUrl?: string;
};


export type BranchResItem = {
  // 지점 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 아이디
  partnerId?: number;

  // 지사 유형
  branchTypeCode?: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 파트너 지점 파일
  branchFiles?: BranchFileResItem[];

  partner?: PartnerResItem;

  creatorName?: string;

  updatorName?: string;
};


export type PartnerMemberBankAccountResItem = {
  // 파트너 멤버 파일 아이디
  id?: number;

  // 파트너 자 아이디
  partnerMemberId?: number;

  bankCode?: string;

  bankAccountName?: string;

  bankAccountNumber?: string;

  // Y : 예금주 일치 / N : 예금주 불 일치 / E : 연동 오류 / R : 미확인
  bankAccountConfirmStatus?: string;

  // C : customer(판매 고객) / M : MINTIT 회원
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type PartnerMemberFileResItem = {
  // 파트너 멤버 파일 아이디
  id?: number;

  // 파트너 멤버 아이디
  partnerMemberId?: number;

  // S3 파일 아이디
  fileId?: string;

  // 파트너 파일 멤버 타입
  partnerMemberFileTypeCode?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  file?: FileResItem;

  fileUrl?: string;
};


export type PartnerMemberResItem = {
  // 파트너 멤버 아이디
  id?: number;

  // (Encryped) 이름
  name?: string;

  // 파트너 관리자 아이디
  administratorId?: string;

  // 권한 유형
  administratorRoles?: number;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // (Encryped) 이메일
  email?: string;

  // (Encryped) CI
  ci?: string;

  // 생년월일
  birthday?: string;

  // M : 남성 / W : 여성 / U : Unknown
  gender?: string;

  // Y : 외국인 / N : 내국인
  foreignYn?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // (hashed) 이름
  nameSha?: string;

  // (hashed) 휴대폰번호
  mobilePhoneNumberSha?: string;

  // (hashed) 이메일
  emailSha?: string;

  // (hashed) CI
  ciSha?: string;

  // 암호화 키 아이디 (co_cipher_key)
  cipherKeyId?: string;

  // 파트너 아이디
  partnerId?: number;

  // 파트너 담당자 여부
  partnerMasterYn?: string;

  // 지점 아이디
  branchId?: number;

  // 지점 담당자 여부
  branchMasterYn?: string;

  // I : Installed / A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  partner?: PartnerResItem;

  branch?: BranchResItem;

  // 파트너 멤버 파일
  partnerMemberFiles?: PartnerMemberFileResItem[];

  // 파트너 멤버 은행 계좌
  partnerMemberBankAccounts?: PartnerMemberBankAccountResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponsePartnerMemberResItem = {
  code?: string;

  message?: string;

  data?: PartnerMemberResItem;
};


export type PartnerMemberResSingleExField = {
  // 파트너 멤버 아이디
  id?: number;

  // (Encryped) 이름
  name?: string;

  // 파트너 관리자 아이디
  administratorId?: string;

  // 권한 유형
  administratorRoles?: number;

  // (Encryped) 휴대폰번호
  mobilePhoneNumber?: string;

  // (Encryped) 이메일
  email?: string;

  // (Encryped) CI
  ci?: string;

  // 생년월일
  birthday?: string;

  // M : 남성 / W : 여성 / U : Unknown
  gender?: string;

  // Y : 외국인 / N : 내국인
  foreignYn?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // (hashed) 이름
  nameSha?: string;

  // (hashed) 휴대폰번호
  mobilePhoneNumberSha?: string;

  // (hashed) 이메일
  emailSha?: string;

  // (hashed) CI
  ciSha?: string;

  // 암호화 키 아이디 (co_cipher_key)
  cipherKeyId?: string;

  // 파트너 아이디
  partnerId?: number;

  // 파트너 담당자 여부
  partnerMasterYn?: string;

  // 지점 아이디
  branchId?: number;

  // 지점 담당자 여부
  branchMasterYn?: string;

  // I : Installed / A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 파트너 이름
  partnerName?: string;

  // 지점 이름
  branchName?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponsePartnerMemberResSingleExFieldWithPage = {
  code?: string;

  message?: string;

  data?: PartnerMemberResSingleExFieldWithPage;
};


export type PartnerMemberResSingleExFieldWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: PartnerMemberResSingleExField[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type BranchReqFilter = {
  // 지점 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 아이디
  partnerId?: number;

  // 지사 유형
  branchTypeCode?: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // 상태
  status?: string;
};


export type BranchResSingle = {
  // 지점 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 파트너 아이디
  partnerId?: number;

  // 지사 유형
  branchTypeCode?: string;

  // 사업자 등록 번호
  companyRegistrationNumber?: string;

  // 업태/종목
  companyBusinessType?: string;

  // 대표자명
  corporateRepresentativeName?: string;

  // 우편번호
  addressZipcode?: string;

  // 도로명 주소
  addressStreetName?: string;

  // 지번 주소
  addressStreetNumber?: string;

  // 상세 주소
  addressDetail?: string;

  // 홈페이지 주소
  homepageUrl?: string;

  // 대표 전화번호
  phoneNumber?: string;

  // 대표 이메일
  email?: string;

  // 세금계산서 발행용 이메일
  emailTax?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseBranchResSingleList = {
  code?: string;

  message?: string;

  data?: BranchResSingle[];
};


export type CommonResponseBranchResItem = {
  code?: string;

  message?: string;

  data?: BranchResItem;
};


export type CommonResponseBranchResItemWithPage = {
  code?: string;

  message?: string;

  data?: BranchResItemWithPage;
};


export type BranchResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: BranchResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type InspectionResItem = {
  // 외관 검사 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 회원 아이디
  memberId?: string;

  // ATM 아이디
  atmId?: number;

  // 디바이스 아이디
  deviceId?: number;

  // 분류 아이디
  classficationId?: number;

  // 매입 등급 코드
  purchaseGradeCode?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseInspectionResItem = {
  code?: string;

  message?: string;

  data?: InspectionResItem;
};


export type SseEmitter = {
  timeout?: number;
};


export type InspectionReqFilter = {};


export type CommonResponseInspectionResItemList = {
  code?: string;

  message?: string;

  data?: InspectionResItem[];
};


export type CommonResponseInspectionResItemWithPage = {
  code?: string;

  message?: string;

  data?: InspectionResItemWithPage;
};


export type InspectionResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: InspectionResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type InspectionProfileReqFilter = {
  // 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 등록일시
  applicationStartDatetime?: string;

  // 등록일시
  applicationEndDatetime?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type InspectionProfileResSingle = {
  // 아이디
  id?: number;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 등록일시
  applicationStartDatetime?: string;

  // 등록일시
  applicationEndDatetime?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseInspectionProfileResSingleList = {
  code?: string;

  message?: string;

  data?: InspectionProfileResSingle[];
};


export type InspectionProfileResItem = {
  // 아이디
  id?: number;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 등록일시
  applicationStartDatetime?: string;

  // 등록일시
  applicationEndDatetime?: string;

  // A : Activated / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseInspectionProfileResItem = {
  code?: string;

  message?: string;

  data?: InspectionProfileResItem;
};


export type CommonResponseInspectionProfileResSingleWithPage = {
  code?: string;

  message?: string;

  data?: InspectionProfileResSingleWithPage;
};


export type InspectionProfileResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: InspectionProfileResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceDeletionReqFilter = {};


export type DeviceDeletionResSingle = {
  // 아이디
  id?: number;

  // 디바이스 아이디
  deviceId?: number;

  // 데이터 삭제 요청 유형
  deletionRequestTypeCode?: string;

  // ATM을 통한 요청 시, 필수
  atmId?: number;

  // 삭제 앱 유형, connector app을 통해서 삭제할 경우 / 매입 이용 시/ slot 이용 시/ 에 대한 구분이 필요한지 확인 필요
  deletionAppTypeCode?: string;

  // 삭제 앱 버전
  deletionAppVersion?: string;

  // 삭제 방식
  deletionMethodCode?: string;

  // 삭제 인증서 파일 아이디(pdf)
  deleteionCertificationFileId?: string;

  // 검사 아이디
  inspectionId?: number;

  // 매입 아이디
  purchaseId?: number;

  // 삭제 프로세스 진행률
  progressRate?: number;

  // P : Processing / C : Completed / F : Failure
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseDeviceDeletionResSingleList = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResSingle[];
};


export type DeviceDeletionResItem = {
  // 아이디
  id?: number;

  // 디바이스 아이디
  deviceId?: number;

  // 데이터 삭제 요청 유형
  deletionRequestTypeCode?: string;

  // ATM을 통한 요청 시, 필수
  atmId?: number;

  // 삭제 앱 유형, connector app을 통해서 삭제할 경우 / 매입 이용 시/ slot 이용 시/ 에 대한 구분이 필요한지 확인 필요
  deletionAppTypeCode?: string;

  // 삭제 앱 버전
  deletionAppVersion?: string;

  // 삭제 방식
  deletionMethodCode?: string;

  // 삭제 인증서 파일 아이디(pdf)
  deleteionCertificationFileId?: string;

  // 검사 아이디
  inspectionId?: number;

  // 매입 아이디
  purchaseId?: number;

  // 삭제 프로세스 진행률
  progressRate?: number;

  // P : Processing / C : Completed / F : Failure
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseDeviceDeletionResItem = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResItem;
};


export type CommonResponseDeviceDeletionResItemList = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResItem[];
};


export type CommonResponseDeviceDeletionResSingleWithPage = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResSingleWithPage;
};


export type DeviceDeletionResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceDeletionResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceModelReqFilter = {
  // 모델 아이디
  id?: number;

  // 모델 번호 ( e.g., SM-S908-1T)
  number?: string;

  // 모델 이름 (펫네임)  e.g., 갤럭시 S22 울트라 1T
  name?: string;

  // 모델 설명 e.g., 갤럭시 S23 512G 라벤더
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 시리즈 아이디
  deviceSeriesId?: number;

  // OS 유형
  osTypeCode?: string;

  // 스마트폰 외관 유형
  smartphoneAppearanceTypeCode?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // 모델 이미지 파일 아이디
  imageFileId?: string;

  // 출시 년월
  lunchingYymm?: string;

  // 출시 가격
  lunchingPrice?: number;

  // 저장 용량
  storageCapacity?: string;

  // 컬러
  color?: string;

  // 케이블 유형
  cableTypeCode?: string;

  // H/W 사이즈 (mm)
  sizeHardware?: string;

  // 디바이스 사이즈
  sizeDevice?: string;

  // 액정 사이즈
  sizeScreen?: string;

  // 볼륨업 버튼 위치 값
  posistionVolumUpButton?: string;

  // 볼륨다운 버튼 위치 값
  posistionVolumDownButton?: string;

  // 홈 버튼 위치 값
  positionHomeButton?: string;

  // 뒤로가기 버튼 위치 값
  positionGoBackButton?: string;

  // 메뉴 버튼 위치 값
  postionMenuButton?: string;

  // 전원 버튼 위치 값
  positionPowerButton?: string;

  // 전면 카메라 위치 값
  positionFrontCamera?: string;

  // 후면 카메라 위치 값
  positionBackCamera?: string;

  // 근접 센서 위치 값
  positionProximitySensor?: string;

  // 진동 버튼 위치 값
  positionVibrationButton?: string;

  // 매입 대상 여부
  purchaseTargetYn?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceModelResSingle = {
  // 모델 아이디
  id?: number;

  // 모델 이름 (펫네임)  e.g., 갤럭시 S22 울트라 1T
  name?: string;

  // 모델 번호 ( e.g., SM-S908-1T)
  number?: string;

  // 모델 설명 e.g., 갤럭시 S23 512G 라벤더
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 시리즈 아이디
  deviceSeriesId?: number;

  // OS 유형
  osTypeCode?: string;

  // 스마트폰 외관 유형
  smartphoneAppearanceTypeCode?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // 모델 이미지 파일 아이디
  imageFileId?: string;

  // 출시 년월
  lunchingYymm?: string;

  // 출시 가격
  lunchingPrice?: number;

  // 저장 용량
  storageCapacity?: string;

  // 컬러
  color?: string;

  // 케이블 유형
  cableTypeCode?: string;

  // H/W 사이즈 (mm)
  sizeHardware?: string;

  // 디바이스 사이즈
  sizeDevice?: string;

  // 액정 사이즈
  sizeScreen?: string;

  // 볼륨업 버튼 위치 값
  posistionVolumUpButton?: string;

  // 볼륨다운 버튼 위치 값
  posistionVolumDownButton?: string;

  // 홈 버튼 위치 값
  positionHomeButton?: string;

  // 뒤로가기 버튼 위치 값
  positionGoBackButton?: string;

  // 메뉴 버튼 위치 값
  postionMenuButton?: string;

  // 전원 버튼 위치 값
  positionPowerButton?: string;

  // 전면 카메라 위치 값
  positionFrontCamera?: string;

  // 후면 카메라 위치 값
  positionBackCamera?: string;

  // 근접 센서 위치 값
  positionProximitySensor?: string;

  // 진동 버튼 위치 값
  positionVibrationButton?: string;

  // 매입 대상 여부
  purchaseTargetYn?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  imageFileUrl?: string;
};


export type CommonResponseDeviceModelResSingleList = {
  code?: string;

  message?: string;

  data?: DeviceModelResSingle[];
};


export type DeviceReqFilter = {};


export type DeviceResItem = {
  // 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 디바이스 모델 아이디
  deviceModelId?: number;

  // 디바이스 일련번호
  serialNumber?: string;

  // 디바이스 일련번호2
  serialNumber2?: string;

  // IMEI
  imei?: string;

  // 2nd IMEI
  imei2?: string;

  // OS version
  osVersion?: string;

  // rooting 여부
  rootingYn?: string;

  // USIM 여부
  usimYn?: string;

  // SD Card 여부
  sdcardYn?: string;

  // 펜 여부
  penYn?: string;

  // 1 : connector app 설치 완료 / 2 : ATM 검사 중 / 3 : ATM 검사 완료 / 4 : 판매 취소 / 5 : ATM 보관 / 6 : 물류 창고로 이동
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseDeviceResItemList = {
  code?: string;

  message?: string;

  data?: DeviceResItem[];
};


export type CommonResponseDeviceResItem = {
  code?: string;

  message?: string;

  data?: DeviceResItem;
};


export type CommonResponseDeviceResItemWithPage = {
  code?: string;

  message?: string;

  data?: DeviceResItemWithPage;
};


export type DeviceResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceSeriesReqFilter = {
  // 시리즈 아이디
  id?: number;

  // 시리즈 이름 e.g., 갤럭시 S
  name?: string;

  // 시리즈 설명
  description?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 시리즈 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceManufactureResItem = {
  // 디바이스 유형 아이디
  id?: number;

  // 제조사 이름 e.g., 삼성전자
  name?: string;

  // 디바이스 유형 설명
  description?: string;

  // 제조사 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  imageFileUrl?: string;
};


export type DeviceSeriesResItem = {
  // 시리즈 아이디
  id?: number;

  // 시리즈 이름 e.g., 갤럭시 S
  name?: string;

  // 시리즈 설명
  description?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 시리즈 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  deviceManufacture?: DeviceManufactureResItem;

  imageFileUrl?: string;
};


export type CommonResponseDeviceSeriesResItemList = {
  code?: string;

  message?: string;

  data?: DeviceSeriesResItem[];
};


export type CommonResponseDeviceSeriesResItem = {
  code?: string;

  message?: string;

  data?: DeviceSeriesResItem;
};


export type DeviceSeriesResSingle = {
  // 시리즈 아이디
  id?: number;

  // 시리즈 이름 e.g., 갤럭시 S
  name?: string;

  // 시리즈 설명
  description?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 시리즈 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  imageFileUrl?: string;
};


export type CommonResponseDeviceSeriesResSingleWithPage = {
  code?: string;

  message?: string;

  data?: DeviceSeriesResSingleWithPage;
};


export type DeviceSeriesResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceSeriesResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceModelResItem = {
  // 모델 아이디
  id?: number;

  // 모델 이름 (펫네임)  e.g., 갤럭시 S22 울트라 1T
  name?: string;

  // 모델 번호 ( e.g., SM-S908-1T)
  number?: string;

  // 모델 설명 e.g., 갤럭시 S23 512G 라벤더
  description?: string;

  // 디바이스 유형
  deviceTypeCode?: string;

  // 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 시리즈 아이디
  deviceSeriesId?: number;

  // OS 유형
  osTypeCode?: string;

  // 스마트폰 외관 유형
  smartphoneAppearanceTypeCode?: string;

  // 이동 통신사 코드
  mobileCarrierCode?: string;

  // 모델 이미지 파일 아이디
  imageFileId?: string;

  // 출시 년월
  lunchingYymm?: string;

  // 출시 가격
  lunchingPrice?: number;

  // 저장 용량
  storageCapacity?: string;

  // 컬러
  color?: string;

  // 케이블 유형
  cableTypeCode?: string;

  // H/W 사이즈 (mm)
  sizeHardware?: string;

  // 디바이스 사이즈
  sizeDevice?: string;

  // 액정 사이즈
  sizeScreen?: string;

  // 볼륨업 버튼 위치 값
  posistionVolumUpButton?: string;

  // 볼륨다운 버튼 위치 값
  posistionVolumDownButton?: string;

  // 홈 버튼 위치 값
  positionHomeButton?: string;

  // 뒤로가기 버튼 위치 값
  positionGoBackButton?: string;

  // 메뉴 버튼 위치 값
  postionMenuButton?: string;

  // 전원 버튼 위치 값
  positionPowerButton?: string;

  // 전면 카메라 위치 값
  positionFrontCamera?: string;

  // 후면 카메라 위치 값
  positionBackCamera?: string;

  // 근접 센서 위치 값
  positionProximitySensor?: string;

  // 진동 버튼 위치 값
  positionVibrationButton?: string;

  // 매입 대상 여부
  purchaseTargetYn?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  deviceManufacture?: DeviceManufactureResItem;

  deviceSeries?: DeviceSeriesResItem;

  imageFileUrl?: string;
};


export type CommonResponseDeviceModelResItem = {
  code?: string;

  message?: string;

  data?: DeviceModelResItem;
};


export type CommonResponseDeviceModelResItemWithPage = {
  code?: string;

  message?: string;

  data?: DeviceModelResItemWithPage;
};


export type DeviceModelResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceModelResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceManufactureReqFilter = {
  // 디바이스 유형 아이디
  id?: number;

  // 제조사 이름 e.g., 삼성전자
  name?: string;

  // 디바이스 유형 설명
  description?: string;

  // 제조사 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceManufactureResSingle = {
  // 디바이스 유형 아이디
  id?: number;

  // 제조사 이름 e.g., 삼성전자
  name?: string;

  // 디바이스 유형 설명
  description?: string;

  // 제조사 이미지 파일 아이디
  imageFileId?: string;

  // 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  imageFileUrl?: string;
};


export type CommonResponseDeviceManufactureResSingleList = {
  code?: string;

  message?: string;

  data?: DeviceManufactureResSingle[];
};


export type CommonResponseDeviceManufactureResItem = {
  code?: string;

  message?: string;

  data?: DeviceManufactureResItem;
};


export type CommonResponseDeviceManufactureResSingleWithPage = {
  code?: string;

  message?: string;

  data?: DeviceManufactureResSingleWithPage;
};


export type DeviceManufactureResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceManufactureResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceManufactureTypeReqFilter = {
  // 디바이스 유형 아이디
  id?: number;

  // 디바이스 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // A : Activate / D : Deactivated
  status?: string;
};


export type DeviceManufactureTypeResSingle = {
  // 디바이스 유형 아이디
  id?: number;

  // 디바이스 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseDeviceManufactureTypeResSingleList = {
  code?: string;

  message?: string;

  data?: DeviceManufactureTypeResSingle[];
};


export type DeviceManufactureTypeResItem = {
  // 디바이스 유형 아이디
  id?: number;

  // 디바이스 제조사 아이디
  deviceManufactureId?: number;

  // 디바이스 유형
  deviceTypeCode?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  deviceManufacture?: DeviceManufactureResItem;
};


export type CommonResponseDeviceManufactureTypeResItem = {
  code?: string;

  message?: string;

  data?: DeviceManufactureTypeResItem;
};


export type CommonResponseDeviceManufactureTypeResItemWithPage = {
  code?: string;

  message?: string;

  data?: DeviceManufactureTypeResItemWithPage;
};


export type DeviceManufactureTypeResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceManufactureTypeResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type DeviceDeletionReqFilterForManage = {
  // 삭제 시작 일시
  deleteStartAt?: Date;

  // 삭제 종료 일시
  deleteEndAt?: Date;

  // IMEI
  imei?: string;

  // 모델명
  modelNumber?: string;

  // OS 유형
  osTypeCode?: string;

  // 상태
  status?: string;
};


export type DeviceDeletionResResponseForManage = {
  // 삭제 아이디
  deviceDeletionId?: number;

  // 멤버 이름
  memberName?: string;

  // 멤버 아이디
  memberId?: string;

  // 멤버 전화번호
  memberPhoneNumber?: string;

  // OS 유형
  osTypeCode?: string;

  // 모델 번호
  modelNumber?: string;

  // 모델 이름(펫 네임)
  modelName?: string;

  // Imei
  imei?: string;

  // Imei2
  imei2?: string;

  // 모델 번호
  status?: string;

  // 삭제 인증서 파일 아이디(pdf)
  deleteionCertificationFileId?: string;

  fileUrl?: string;
};


export type CommonResponseDeviceDeletionResResponseForManageWithPage = {
  code?: string;

  message?: string;

  data?: DeviceDeletionResResponseForManageWithPage;
};


export type DeviceDeletionResResponseForManageWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: DeviceDeletionResResponseForManage[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type TermsAgreementResSingle = {
  // 약관 동의 아이디
  id?: string;

  // 서비스 아이디
  serviceId?: string;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  termsId?: string;

  // 동의 여부
  agreementYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseTermsAgreementResSingleList = {
  code?: string;

  message?: string;

  data?: TermsAgreementResSingle[];
};


export type TermsAgreementResItem = {
  // 약관 동의 아이디
  id?: string;

  // 서비스 아이디
  serviceId?: string;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  termsId?: string;

  // 동의 여부
  agreementYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseTermsAgreementResItem = {
  code?: string;

  message?: string;

  data?: TermsAgreementResItem;
};


export type CommonResponseTermsAgreementResSingleWithPage = {
  code?: string;

  message?: string;

  data?: TermsAgreementResSingleWithPage;
};


export type TermsAgreementResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: TermsAgreementResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type EventApplicationReqFilter = {
  // 약관 동의 아이디
  id?: number;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  eventId?: string;

  // F: Failure to apply (Quiz 이벤트에서 정답을 마추지 못 함) / A: Applied suiccessfully /  W : Winner (당첨)
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type EventApplicationResSingle = {
  // 약관 동의 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  eventId?: string;

  // F: Failure to apply (Quiz 이벤트에서 정답을 마추지 못 함) / A: Applied suiccessfully /  W : Winner (당첨)
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventApplicationResSingleList = {
  code?: string;

  message?: string;

  data?: EventApplicationResSingle[];
};


export type EventApplicationResItem = {
  // 약관 동의 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // 회원 아이디
  memberId?: string;

  // 약관 아이디
  eventId?: string;

  // F: Failure to apply (Quiz 이벤트에서 정답을 마추지 못 함) / A: Applied suiccessfully /  W : Winner (당첨)
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventApplicationResItem = {
  code?: string;

  message?: string;

  data?: EventApplicationResItem;
};


export type CommonResponseEventApplicationResSingleWithPage = {
  code?: string;

  message?: string;

  data?: EventApplicationResSingleWithPage;
};


export type EventApplicationResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: EventApplicationResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type EventFileResItem = {
  // 이벤트 파일 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 이벤트 파일 유형 코드
  eventFileTypeCode?: string;

  // 파일 아이디
  fileId?: string;

  // 약관 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  fileUrl?: string;
};


export type EventResItemForTerms = {
  // 이벤트 아이디
  id?: string;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 이벤트 시작 일시
  eventStartDatetime?: Date;

  // 이벤트 종료 일시
  eventEndDatetime?: Date;

  // 이벤트 응모 유형 코드
  eventApplicationTypeCode?: string;

  // 이벤트 당첨자 선정 방법 유형 코드
  eventWinnerSelectionMethodCode?: string;

  // Quiz (EAT000QUIZ)  + 전체 / PASS 인증(EAT000PASS) + 추첨
  eventAttributes?: string;

  // 노출 채널(s)
  displayChannels?: number;

  // 상위 이벤트 아이디
  parentEventId?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 이벤트 파일
  eventFiles?: EventFileResItem[];

  // 이벤트 파일
  eventTerms?: EventTermsResItem[];
};


export type EventTermsResItem = {
  // 이벤트 파일 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 약관 아이디
  termsId?: string;

  // 약관 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;

  terms?: TermsResItem;
};


export type TermsContentResItem = {
  // 약관 내용 아이디
  id?: number;

  // 약관 아이디
  termsId?: string;

  // 약관 내용
  content?: string;

  // 시행 일시
  executionAt?: Date;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type TermsResItem = {
  // 국가 아이디
  id?: string;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 약관 카테고리 유형 코드
  termsCategoryCode?: string;

  // 필수 여부
  mandatoryYn?: string;

  // 반복 동의 여부
  repeatYn?: string;

  // 이력 관리 여부
  historyYn?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  termsContents?: TermsContentResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseEventResItemForTerms = {
  code?: string;

  message?: string;

  data?: EventResItemForTerms;
};


export type SurveyAnswerResItem = {
  // 설문 답변 아이디
  id?: number;

  // 답변
  answer?: string;

  // 설명
  description?: string;

  // 질문 아이디
  surveyQuestionId?: number;

  // 노출 순서
  displayNumber?: number;

  // A : Activate(활성) / D : Deactivated(비활성)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type SurveyQuestionResItem = {
  // 설문 질문 아이디
  id?: number;

  // 질문
  question?: string;

  // 설명
  description?: string;

  // 설문 아이디
  surveyId?: number;

  // 노출 순서
  displayNumber?: number;

  // A : Activate(활성) / D : Deactivated(비활성)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  surveyAnswers?: SurveyAnswerResItem[];
};


export type SurveyResItem = {
  // 설문 아이디
  id?: number;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 노출 채널(s)
  displayChannels?: number;

  // A : Activate(활성) / D : Deactivated(비활성)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  surveyQuestions?: SurveyQuestionResItem[];
};


export type CommonResponseSurveyResItemList = {
  code?: string;

  message?: string;

  data?: SurveyResItem[];
};


export type ContentDisplayReqFilter = {
  // 컨텐츠 노출 방식
  contentDisplayMethodCode?: string;
};


export type CommonCodeReqFilter = {
  // 공통 코드
  id?: string;

  // 제외 할 공통 코드
  excludeIds?: string[];

  // 공통 코드 이름
  name?: string;

  // 공통 코드 유형 아이디
  commonCodeTypeId?: string;

  // 외부 코드 #1 기존 코드 보관 용
  externalCode1?: string;

  // 외부 코드 #2 기존 코드 보관 용.
  externalCode2?: string;

  // 외부 코드 #3 기존 코드 보관 용.
  externalCode3?: string;

  // 상태
  status?: string;

  // 외부 코드 #1 리스트
  externalCode1s?: string[];
};


export type CommonCodeNameResItem = {
  // 공통 코드
  commonCodeId?: string;

  // 공통 코드 이름 (i18n)
  commonCodeName?: string;

  // 공통 코드 유형 아이디
  commonCodeTypeId?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonCodeResItem = {
  // 공통 코드
  id?: string;

  // 공통 코드 이름
  name?: string;

  // 공통 코드 유형 아이디
  commonCodeTypeId?: string;

  // 출력 순서
  displayNumber?: number;

  // 외부 코드 #1 기존 코드 보관 용
  externalCode1?: string;

  // 외부 코드 #2 기존 코드 보관 용.
  externalCode2?: string;

  // 외부 코드 #3 기존 코드 보관 용.
  externalCode3?: string;

  // A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 공통 코드 설명
  description?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  commonCodeTypeSingle?: CommonCodeTypeResSingle;

  commonCodeName?: CommonCodeNameResItem;

  creatorName?: string;

  updatorName?: string;
};


export type CommonCodeTypeResSingle = {
  // 공통 코드 유형 아이디
  id?: string;

  // 공통 코드 유형 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 공통 코드 유형 설명
  description?: string;

  // A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  updatorName?: string;
};


export type CommonResponseCommonCodeResItemList = {
  code?: string;

  message?: string;

  data?: CommonCodeResItem[];
};


export type TermsReqFilter = {
  // 약관 아이디
  id?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 약관 카테고리 유형 코드
  termsCategoryCode?: string;

  // 필수 여부
  mandatoryYn?: string;

  // 반복 동의 여부
  repeatYn?: string;

  // 이력 관리 여부
  historyYn?: string;

  // 상태
  status?: string;
};


export type TermsResSingle = {
  // 국가 아이디
  id?: string;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 약관 카테고리 유형 코드
  termsCategoryCode?: string;

  // 필수 여부
  mandatoryYn?: string;

  // 반복 동의 여부
  repeatYn?: string;

  // 이력 관리 여부
  historyYn?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseTermsResSingleList = {
  code?: string;

  message?: string;

  data?: TermsResSingle[];
};


export type CommonResponseTermsResItem = {
  code?: string;

  message?: string;

  data?: TermsResItem;
};


export type CommonResponseTermsResSingleWithPage = {
  code?: string;

  message?: string;

  data?: TermsResSingleWithPage;
};


export type TermsResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: TermsResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type TermsContentReqFilter = {
  // 약관 내용 아이디
  id?: number;

  // 약관 아이디
  termsId?: string;

  // 약관 내용
  content?: string;

  // 시행 일시
  executionAt?: Date;

  // A : Activate / D : Deactivated
  status?: string;
};


export type TermsContentResSingle = {
  // 약관 내용 아이디
  id?: number;

  // 약관 아이디
  termsId?: string;

  // 약관 내용
  content?: string;

  // 시행 일시
  executionAt?: Date;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseTermsContentResSingleList = {
  code?: string;

  message?: string;

  data?: TermsContentResSingle[];
};


export type CommonResponseTermsContentResItem = {
  code?: string;

  message?: string;

  data?: TermsContentResItem;
};


export type CommonResponseTermsContentResSingleWithPage = {
  code?: string;

  message?: string;

  data?: TermsContentResSingleWithPage;
};


export type TermsContentResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: TermsContentResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type SigunguReqFilter = {
  // 법정동 코드 접두사
  prefix?: string;

  // 법정동 코드 레벨
  depth: number;

  // 법정동 이름
  name?: string;

  // 상태
  status?: string;
};


export type SigunguResSingle = {
  // 법정동 코드
  code?: string;

  // 법정동 이름
  name?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseSigunguResSingleList = {
  code?: string;

  message?: string;

  data?: SigunguResSingle[];
};


export type SigunguResItem = {
  // 법정동 코드
  code?: string;

  // 법정동 이름
  name?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseSigunguResItem = {
  code?: string;

  message?: string;

  data?: SigunguResItem;
};


export type CommonResponseSigunguResSingleWithPage = {
  code?: string;

  message?: string;

  data?: SigunguResSingleWithPage;
};


export type SigunguResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: SigunguResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type ServiceSeviceReqFilter = {
  // 아이디
  id?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // P : Preparing / A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type ServiceSeviceResSingle = {
  // 아이디
  id?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // P : Preparing / A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseServiceSeviceResSingleList = {
  code?: string;

  message?: string;

  data?: ServiceSeviceResSingle[];
};


export type ServiceSeviceResItem = {
  // 아이디
  id?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // P : Preparing / A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseServiceSeviceResItem = {
  code?: string;

  message?: string;

  data?: ServiceSeviceResItem;
};


export type CommonResponseServiceSeviceResSingleWithPage = {
  code?: string;

  message?: string;

  data?: ServiceSeviceResSingleWithPage;
};


export type ServiceSeviceResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: ServiceSeviceResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type MenuReqFilter = {
  // 메뉴명
  menuName?: string;

  // 메뉴 설명
  description?: string;

  // 메뉴 코드
  menuCode?: string;

  // 메뉴 URL
  menuUri?: string;

  // 상위 페이지 아이디
  parentMenuId?: number;

  // 노출 순서
  displayNumber?: number;

  // 메뉴 여부
  menuYn?: string;

  // 접근 가능 역할(s)
  roles?: number;
};


export type MenuResSingle = {
  // 페이지 아이디
  id?: number;

  // 메뉴명
  menuName?: string;

  // 메뉴 설명
  description?: string;

  // 메뉴 코드
  menuCode?: string;

  // 메뉴 URL
  menuUri?: string;

  // 상위 페이지 아이디
  parentMenuId?: number;

  // 노출 순서
  displayNumber?: number;

  // 메뉴 여부
  menuYn?: string;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseMenuResSingleList = {
  code?: string;

  message?: string;

  data?: MenuResSingle[];
};


export type MenuResItem = {
  // 페이지 아이디
  id?: number;

  // 메뉴명
  menuName?: string;

  // 메뉴 설명
  description?: string;

  // 메뉴 코드
  menuCode?: string;

  // 메뉴 URL
  menuUri?: string;

  // 상위 페이지 아이디
  parentMenuId?: number;

  // 노출 순서
  displayNumber?: number;

  // 메뉴 여부
  menuYn?: string;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseMenuResItem = {
  code?: string;

  message?: string;

  data?: MenuResItem;
};


export type MenuResResponseForMenuTree = {
  // 메뉴명
  menuName?: string;

  // 메뉴 코드
  menuCode?: string;

  // 메뉴 URL
  menuUri?: string;

  // 메뉴 레벨
  depth?: number;

  // 하위 메뉴 목록
  childrens?: MenuResResponseForMenuTree[];
};


export type CommonResponseMenuResResponseForMenuTreeList = {
  code?: string;

  message?: string;

  data?: MenuResResponseForMenuTree[];
};


export type CommonResponseMenuResSingleWithPage = {
  code?: string;

  message?: string;

  data?: MenuResSingleWithPage;
};


export type MenuResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: MenuResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type MenuButtonReqFilter = {
  // 페이지 버튼 아이디
  id?: number;

  // 페이지 아이디
  menuId?: number;

  // 버튼 설명
  description?: string;

  // 버튼 코드 (client 에서 정의 됨)
  buttonCode?: string;

  // 버튼 이름
  buttonName?: string;

  // 페이지 URI
  menuUri?: string;

  // 노출 순서
  displayNumber?: number;

  // 접근 가능 역할(s)
  roles?: number;

  // 상태
  status?: string;
};


export type MenuButtonResSingle = {
  // 페이지 버튼 아이디
  id?: number;

  // 페이지 아이디
  menuId?: number;

  // 버튼 설명
  description?: string;

  // 버튼 코드 (client 에서 정의 됨)
  buttonCode?: string;

  // 버튼 이름
  buttonName?: string;

  // 페이지 URI
  menuUri?: string;

  // 노출 순서
  displayNumber?: number;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseMenuButtonResSingleList = {
  code?: string;

  message?: string;

  data?: MenuButtonResSingle[];
};


export type MenuButtonResItem = {
  // 페이지 버튼 아이디
  id?: number;

  // 페이지 아이디
  menuId?: number;

  // 버튼 설명
  description?: string;

  // 버튼 코드 (client 에서 정의 됨)
  buttonCode?: string;

  // 버튼 이름
  buttonName?: string;

  // 페이지 URI
  menuUri?: string;

  // 노출 순서
  displayNumber?: number;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseMenuButtonResItem = {
  code?: string;

  message?: string;

  data?: MenuButtonResItem;
};


export type CommonResponseMenuButtonResSingleWithPage = {
  code?: string;

  message?: string;

  data?: MenuButtonResSingleWithPage;
};


export type MenuButtonResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: MenuButtonResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type MenuButtonResResponseForAuthorized = {
  // 버튼 코드 (client 에서 정의 됨)
  buttonCode?: string;

  // 접근 가능 역할(s)
  roles?: number;
};


export type CommonResponseMenuButtonResResponseForAuthorizedList = {
  code?: string;

  message?: string;

  data?: MenuButtonResResponseForAuthorized[];
};


export type EventReqFilter = {
  // 이벤트 아이디
  id?: string;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 이벤트 시작 일시
  eventStartDatetime?: string;

  // 이벤트 종료 일시
  eventEndDatetime?: string;

  // 이벤트 응모 유형 코드
  eventApplicationTypeCode?: string;

  // 이벤트 당첨자 선정 방법 유형 코드
  eventWinnerSelectionMethodCode?: string;

  // Quiz (EAT000QUIZ)  + 전체 / PASS 인증(EAT000PASS) + 추첨
  eventAttributes?: string;

  // 노출 채널(s)
  displayChannels?: number;

  // 상위 이벤트 아이디
  parentEventId?: string;

  // A : Activate / D : Deactivated
  status?: string;
};


export type EventResSingle = {
  // 이벤트 아이디
  id?: string;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 이벤트 시작 일시
  eventStartDatetime?: Date;

  // 이벤트 종료 일시
  eventEndDatetime?: Date;

  // 이벤트 응모 유형 코드
  eventApplicationTypeCode?: string;

  // 이벤트 당첨자 선정 방법 유형 코드
  eventWinnerSelectionMethodCode?: string;

  // Quiz (EAT000QUIZ)  + 전체 / PASS 인증(EAT000PASS) + 추첨
  eventAttributes?: string;

  // 노출 채널(s)
  displayChannels?: number;

  // 상위 이벤트 아이디
  parentEventId?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventResSingleList = {
  code?: string;

  message?: string;

  data?: EventResSingle[];
};


export type CommonResponseEventResSingleWithPage = {
  code?: string;

  message?: string;

  data?: EventResSingleWithPage;
};


export type EventResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: EventResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type EventTermsReqFilter = {
  // 이벤트 약관 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 약관 아이디
  termsId?: string;

  // 약관 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type EventTermsResSingle = {
  // 이벤트 파일 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 약관 아이디
  termsId?: string;

  // 약관 노출 순서
  displayNumber?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventTermsResSingleList = {
  code?: string;

  message?: string;

  data?: EventTermsResSingle[];
};


export type CommonResponseEventTermsResItem = {
  code?: string;

  message?: string;

  data?: EventTermsResItem;
};


export type CommonResponseEventTermsResSingleWithPage = {
  code?: string;

  message?: string;

  data?: EventTermsResSingleWithPage;
};


export type EventTermsResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: EventTermsResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type EventBenefitReqFilter = {
  // 이벤트 혜택 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 쿠폰 정책 아이디
  couponPolicyId?: number;

  // 쿠폰 노출 순서
  displayNumber?: number;

  // 매입가에 따른 조건
  eventBenefitPaidCondition?: string;

  // A : Activate / D : Deactivated
  status?: string;
};


export type EventBenefitResSingle = {
  // 이벤트 혜택 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 쿠폰 정책 아이디
  couponPolicyId?: number;

  // 쿠폰 노출 순서
  displayNumber?: number;

  // 매입가에 따른 조건
  eventBenefitPaidCondition?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventBenefitResSingleList = {
  code?: string;

  message?: string;

  data?: EventBenefitResSingle[];
};


export type EventBenefitResItem = {
  // 이벤트 혜택 아이디
  id?: number;

  // 이벤트 아이디
  eventId?: string;

  // 쿠폰 정책 아이디
  couponPolicyId?: number;

  // 쿠폰 노출 순서
  displayNumber?: number;

  // 매입가에 따른 조건
  eventBenefitPaidCondition?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseEventBenefitResItem = {
  code?: string;

  message?: string;

  data?: EventBenefitResItem;
};


export type CommonResponseEventBenefitResSingleWithPage = {
  code?: string;

  message?: string;

  data?: EventBenefitResSingleWithPage;
};


export type EventBenefitResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: EventBenefitResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type CouponPolicyReqFilter = {
  // 쿠폰 정책 아이디
  id?: number;

  // 이름
  name?: string;

  // 설명
  description?: string;

  // 쿠폰 유형
  couponTypeCode?: string;

  // 정액 지급, 10,000원. e.g, 10000  정류 지급, 단말 대금의 10.00%. e.g., 1000  선 밸행된 쿠폰
  couponTypeValue?: string;

  // 쿠폰 발행 시작 일시
  couponIssuanceStartDatetime?: string;

  // 쿠폰 발행 종료 일시
  couponIssuanceEndDatetime?: string;

  // (제한) 최대 발행 수량
  limitedTotalNumber?: number;

  // (제한) 1일 최대 발행 수량
  limitedTotalNumberPerDay?: number;

  // (제한) 1일 최대 발행 수량
  limitedUserNumber?: number;

  // (제한) 1인당 1일 최대 발행 수량
  limitedTotalNumberPerDayUser?: number;

  // 쿠폰 사용 만료 유형
  couponUseExpirationTypeCode?: string;

  // 쿠폰 사용 만료 일자 지정 e.g., 20240105 / 쿠폰 생성 일자 기준 만료 일자 지정 e.g., 30
  couponUseExpirationTypeValue?: string;

  // 플랫폼 분담율
  shareRatePlatform?: number;

  // 제휴업체 분담율
  shareRatePartner?: number;

  // A : Activate / D : Deactivated
  status?: string;
};


export type CouponPolicyResSingle = {
  // 쿠폰 정책 아이디
  id?: number;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 쿠폰 유형
  couponTypeCode?: string;

  // 정액 지급, 10,000원. e.g, 10000  정류 지급, 단말 대금의 10.00%. e.g., 1000  선 밸행된 쿠폰
  couponTypeValue?: string;

  // 쿠폰 발행 시작 일시
  couponIssuanceStartDatetime?: string;

  // 쿠폰 발행 종료 일시
  couponIssuanceEndDatetime?: string;

  // (제한) 최대 발행 수량
  limitedTotalNumber?: number;

  // (제한) 1일 최대 발행 수량
  limitedTotalNumberPerDay?: number;

  // (제한) 1일 최대 발행 수량
  limitedUserNumber?: number;

  // (제한) 1인당 1일 최대 발행 수량
  limitedTotalNumberPerDayUser?: number;

  // 쿠폰 사용 만료 유형
  couponUseExpirationTypeCode?: string;

  // 쿠폰 사용 만료 일자 지정 e.g., 20240105 / 쿠폰 생성 일자 기준 만료 일자 지정 e.g., 30
  couponUseExpirationTypeValue?: string;

  // 플랫폼 분담율
  shareRatePlatform?: number;

  // 제휴업체 분담율
  shareRatePartner?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseCouponPolicyResSingleList = {
  code?: string;

  message?: string;

  data?: CouponPolicyResSingle[];
};


export type CouponPolicyResItem = {
  // 쿠폰 정책 아이디
  id?: number;

  // 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 설명
  description?: string;

  // 쿠폰 유형
  couponTypeCode?: string;

  // 정액 지급, 10,000원. e.g, 10000  정류 지급, 단말 대금의 10.00%. e.g., 1000  선 밸행된 쿠폰
  couponTypeValue?: string;

  // 쿠폰 발행 시작 일시
  couponIssuanceStartDatetime?: string;

  // 쿠폰 발행 종료 일시
  couponIssuanceEndDatetime?: string;

  // (제한) 최대 발행 수량
  limitedTotalNumber?: number;

  // (제한) 1일 최대 발행 수량
  limitedTotalNumberPerDay?: number;

  // (제한) 1일 최대 발행 수량
  limitedUserNumber?: number;

  // (제한) 1인당 1일 최대 발행 수량
  limitedTotalNumberPerDayUser?: number;

  // 쿠폰 사용 만료 유형
  couponUseExpirationTypeCode?: string;

  // 쿠폰 사용 만료 일자 지정 e.g., 20240105 / 쿠폰 생성 일자 기준 만료 일자 지정 e.g., 30
  couponUseExpirationTypeValue?: string;

  // 플랫폼 분담율
  shareRatePlatform?: number;

  // 제휴업체 분담율
  shareRatePartner?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: string;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseCouponPolicyResItem = {
  code?: string;

  message?: string;

  data?: CouponPolicyResItem;
};


export type CommonResponseCouponPolicyResSingleWithPage = {
  code?: string;

  message?: string;

  data?: CouponPolicyResSingleWithPage;
};


export type CouponPolicyResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: CouponPolicyResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type ContentDisplayResItem = {
  // 배너 아이디
  id?: number;

  // 배너 컨텐츠 이름
  name?: string;

  // 배너 컨텐츠 설명
  description?: string;

  // 컨텐츠 노출 위치
  contentDisplayPositionCode?: string;

  // 컨텐츠 노출 방식
  contentDisplayMethodCode?: string;

  // 노출 순서
  displayNumber?: number;

  // 파일 아이디
  fileId?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseContentDisplayResItemList = {
  code?: string;

  message?: string;

  data?: ContentDisplayResItem[];
};


export type CommonResponseContentDisplayResItem = {
  code?: string;

  message?: string;

  data?: ContentDisplayResItem;
};


export type CommonResponseContentDisplayResItemWithPage = {
  code?: string;

  message?: string;

  data?: ContentDisplayResItemWithPage;
};


export type ContentDisplayResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: ContentDisplayResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type CommonResponseCommonCodeResItem = {
  code?: string;

  message?: string;

  data?: CommonCodeResItem;
};


export type CommonCodeResSingle = {
  // 공통 코드
  id?: string;

  // 공통 코드 이름
  name?: string;

  // 공통 코드 유형 아이디
  commonCodeTypeId?: string;

  // 출력 순서
  displayNumber?: number;

  // 외부 코드 #1 기존 코드 보관 용
  externalCode1?: string;

  // 외부 코드 #2 기존 코드 보관 용.
  externalCode2?: string;

  // 외부 코드 #3 기존 코드 보관 용.
  externalCode3?: string;

  // A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 공통 코드 설명
  description?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseCommonCodeResSingleWithPage = {
  code?: string;

  message?: string;

  data?: CommonCodeResSingleWithPage;
};


export type CommonCodeResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: CommonCodeResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type CommonCodeTypeReqFilter = {
  // 공통 코드 유형 아이디
  id?: string;

  // 공통 코드 유형 이름
  name?: string;

  // 공통 코드 유형 설명
  description?: string;
};


export type CommonResponseCommonCodeTypeResSingleList = {
  code?: string;

  message?: string;

  data?: CommonCodeTypeResSingle[];
};


export type CommonCodeTypeResItem = {
  // 공통 코드 유형 아이디
  id?: string;

  // 공통 코드 유형 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 공통 코드 유형 설명
  description?: string;

  // A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 공통 코드 리스트
  commonCodeSigleList?: CommonCodeResSingle[];

  updatorName?: string;
};


export type CommonResponseCommonCodeTypeResItem = {
  code?: string;

  message?: string;

  data?: CommonCodeTypeResItem;
};


export type CommonResponseCommonCodeTypeResSingleWithPage = {
  code?: string;

  message?: string;

  data?: CommonCodeTypeResSingleWithPage;
};


export type CommonCodeTypeResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: CommonCodeTypeResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type ApiReqFilter = {};


export type ApiResSingle = {
  // API 아이디
  id?: number;

  // API 이름
  name?: string;

  // API 설명
  description?: string;

  // URI
  uri?: string;

  // HTTP method
  httpMethod?: string;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseApiResSingleList = {
  code?: string;

  message?: string;

  data?: ApiResSingle[];
};


export type ApiResItem = {
  // API 아이디
  id?: number;

  // API 이름
  name?: string;

  // API 설명
  description?: string;

  // URI
  uri?: string;

  // HTTP method
  httpMethod?: string;

  // 접근 가능 역할(s)
  roles?: number;

  // A : Activate / D : Deactivated
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseApiResItem = {
  code?: string;

  message?: string;

  data?: ApiResItem;
};


export type CommonResponseApiResSingleWithPage = {
  code?: string;

  message?: string;

  data?: ApiResSingleWithPage;
};


export type ApiResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: ApiResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmTypeComponentReqFilter = {
  // ATM Type 코드
  atmTypeCode?: string;

  // 상태
  status?: string;
};


export type AtmTypeComponentResItem = {
  // ATM 유형 별 구성 요소 아이디
  id?: number;

  // 서비스 아이디
  serviceId?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 노출 순서
  displayNumber?: number;

  // 필수 여부
  mandatoryYn?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseAtmTypeComponentResItemList = {
  code?: string;

  message?: string;

  data?: AtmTypeComponentResItem[];
};


export type AtmMaintenanceRequestCategoryReqFilter = {
  // ATM 점검 요청 분류 이름
  name?: string;

  // ATM 점검 요청 분류 설명
  description?: string;

  // 상태
  status?: string;

  // ATM 유형(s)
  atmTypes?: number;
};


export type AtmMaintenanceRequestCategoryResSingle = {
  // ATM 점검 요청 분류 아이디
  id?: number;

  // ATM 점검 요청 분류 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // ATM 점검 요청 분류 설명
  description?: string;

  // A : Activate / D : Deactivated
  status?: string;

  // ATM 점검 가이드
  guide?: string;

  // ATM 유형(s)
  atmTypes?: number;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceRequestCategoryResSingleWithPage;
};


export type AtmMaintenanceRequestCategoryResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmMaintenanceRequestCategoryResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmAcceptanceDeviceResSingle = {
  // ATM 수납 디바이스 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // 디바이스 아이디
  deviceId?: number;

  // ATM 회수 아이디
  atmWithdrawalId?: number;

  // A : Acceptance Completed / C : Acceptance Canceled / W : Withdrawal Completed
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type AtmMaintenanceResSingle = {
  // 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // ATM 점검 요청자
  atmMaintenanceRequesterTypeCode?: string;

  // ATM 점검 유형
  atmMaintenanceTypeCode?: string;

  // DRP에서 NPS에 현장 점검 요청 시 작성하는 내용
  atmMaintenanceRequest?: string;

  // (ATM 점거 가이드에 따른) ATM 점검 결과
  atmMaintenanceResult?: string;

  // 츨동 업체 아이디
  partnerId?: number;

  // 츨동 기사 아이디
  partnerMemberId?: number;

  // 유상/무상
  freeYn?: string;

  // 출동 업체에서 관리하는 코드
  externalId?: string;

  // 예약 일자 (YYYYMMDDHHMM)
  scheduledAt?: string;

  // S : Scheduled (예약 / 등록 됨) / R : Requested (NPS에 요청 됨) / C : Canceled (자동 복구에 따른 취소) / A : Assigned / P : Processing (ATM에 login한 시점) / N : Completed (NPS에서 처리 완료) / M : Confirm (민팃에서 확인 완료)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type AtmResSingleExFieldForDetail = {
  // ATM 아이디
  id?: number;

  // ATM 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // ATM unique 이름
  nameUk?: string;

  // ATM 일련 번호
  atmSerialNumber?: string;

  // 마스터 인증번호
  atmPassword?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode?: string;

  // 설치 장소
  atmInstalledPlace?: string;

  // 시도 코드
  atmInstalledSidoCode?: string;

  // 시군구 코드
  atmInstalledSigunguCode?: string;

  // 경도
  atmInstalledLongitude?: string;

  // 위도
  atmInstalledLatitude?: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: Date;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: Date;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId?: number;

  // 거래처 번호
  branchId?: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: Date;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: Date;

  // N : Not Installed / I : Installed / A : Activated / U : Under Maintenance / S : Suspended / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;

  // 수납 디바이스 수량
  acceptanceDeviceCount?: number;

  atmMaintenance?: AtmMaintenanceResSingle;

  atmAcceptanceDevice?: AtmAcceptanceDeviceResSingle;

  // ATM 구성요소
  atmComponents?: AtmComponentResItem[];

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmResSingleExFieldForDetail = {
  code?: string;

  message?: string;

  data?: AtmResSingleExFieldForDetail;
};


export type AtmAcceptanceDeviceReqFilter = {
  // ATM 아이디
  atmId?: number;

  // 상태
  status?: string;
};


export type CommonResponseAtmAcceptanceDeviceResSingleList = {
  code?: string;

  message?: string;

  data?: AtmAcceptanceDeviceResSingle[];
};


export type AtmReqFilter = {
  // ATM 아이디
  id?: number;

  // ATM unique 이름
  nameUk?: string;

  // ATM 이름
  name?: string;

  // ATM 일련 번호
  atmSerialNumber?: string;

  // 마스터 인증번호
  atmPassword?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode?: string;

  // 설치 장소
  atmInstalledPlace?: string;

  // 시도 코드
  atmInstalledSidoCode?: string;

  // 시군구 코드
  atmInstalledSigunguCode?: string;

  // 경도
  atmInstalledLongitude?: string;

  // 위도
  atmInstalledLatitude?: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: Date;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: Date;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId?: number;

  // 거래처 번호
  branchId?: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: Date;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: Date;

  // 상태
  status?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;
};


export type CommonResponseAtmResItemList = {
  code?: string;

  message?: string;

  data?: AtmResItem[];
};


export type AtmReqFilterForStatistics = {
  // ATM 통계 타입
  statisticsType?: string;
};


export type CommonResponseAtmResResponseForStatisticsList = {
  code?: string;

  message?: string;

  data?: AtmResResponseForStatistics[];
};


export type AtmResSingleExField = {
  // ATM 아이디
  id?: number;

  // ATM 이름
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // ATM unique 이름
  nameUk?: string;

  // ATM 일련 번호
  atmSerialNumber?: string;

  // 마스터 인증번호
  atmPassword?: string;

  // ATM 유형
  atmTypeCode?: string;

  // ATM 매입 설치 유형
  atmInstalledTypeCode?: string;

  // 설치 장소
  atmInstalledPlace?: string;

  // 시도 코드
  atmInstalledSidoCode?: string;

  // 시군구 코드
  atmInstalledSigunguCode?: string;

  // 경도
  atmInstalledLongitude?: string;

  // 위도
  atmInstalledLatitude?: string;

  // ATM 지도 노출 여부
  atmDisplayYn?: string;

  // ATM 노출 이름
  atmDisplayName?: string;

  // 운영 시작 시간
  atmOperationStartTime?: string;

  // 운영 종료 시간
  atmOperationEndTime?: string;

  // 무료 유지 보수 기간
  atmFreeWarrantyStartDate?: Date;

  // 무료 유진 보수 기간료
  atmFreeWarrantyEndDate?: Date;

  // 제조사 파트너 아이디
  manufacturePartnerId?: number;

  // 상위 거래처 번호
  partnerId?: number;

  // 거래처 번호
  branchId?: number;

  // WIFI SSID
  ssid?: string;

  // WIFI 비밀번호
  ssidPassword?: string;

  // 모뎀 회선 번호
  modemLineNumber?: string;

  // 모뎀 약정 기간 시작
  modemContractStartDate?: Date;

  // 모뎀 약정 기간 종료
  modemContractEndDate?: Date;

  // N : Not Installed / I : Installed / A : Activated / U : Under Maintenance / S : Suspended / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 우편번호
  atmInstalledAddressZipcode?: string;

  // 도로명 주소
  atmInstalledAddressStreetName?: string;

  // 지번 주소
  atmInstalledAddressStreetNumber?: string;

  // 상세 주소
  atmInstalledAddressDetail?: string;

  // Seetrol을 통한 ATM 접속을 위한 정보
  seetrolId?: string;

  // Teamviewer을 통한 ATM 접속을 위한 정보
  teamviewerId?: string;

  // NPS 기기 관리 번호
  npsId?: string;

  // 수납 디바이스 수량
  acceptanceDeviceCount?: number;

  // 수납 디바이스 아이디
  atmAcceptanceDeviceId?: number;

  // 수납 디바이스 상태
  atmAcceptanceDeviceStatus?: string;

  // 점검 아이디
  atmMaintenanceId?: number;

  // 점검 상태
  atmMaintenanceStatus?: string;

  // 상위 거래처 이름
  partnerName?: string;

  // 거래처 이름
  branchName?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmResSingleExFieldWithPage = {
  code?: string;

  message?: string;

  data?: AtmResSingleExFieldWithPage;
};


export type AtmResSingleExFieldWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmResSingleExField[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmReqFilterForDailyAtmStatus = {};


export type AtmResResponseForDailyAtmStatus = {
  // ATM 유형 코드
  atmTypeCode?: string;

  // 시도 코드
  atmInstalledSidoCode?: string;

  // 시군구 코드
  atmInstalledSigunguCode?: string;

  // ATM 상태
  status?: string;

  // ATM 수
  atmCount?: number;
};


export type CommonResponseAtmResResponseForDailyAtmStatusWithPage = {
  code?: string;

  message?: string;

  data?: AtmResResponseForDailyAtmStatusWithPage;
};


export type AtmResResponseForDailyAtmStatusWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmResResponseForDailyAtmStatus[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmTypeComponentResResponseForUnregister = {
  // ATM 유형 별 구성 요소 아이디
  id?: number;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // ATM 구성요소 코드 이름
  atmComponentName?: string;

  // 상태
  status?: string;
};


export type CommonResponseAtmTypeComponentResResponseForUnregisterList = {
  code?: string;

  message?: string;

  data?: AtmTypeComponentResResponseForUnregister[];
};


export type AtmTypeComponentResResponseForRegister = {
  // ATM 유형 별 구성 요소 아이디
  id?: number;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // ATM 구성요소 코드 이름
  atmComponentName?: string;

  // 상태
  status?: string;

  // 노출 순서
  displayNumber?: number;

  // 필수 여부
  mandatoryYn?: string;
};


export type CommonResponseAtmTypeComponentResResponseForRegisterList = {
  code?: string;

  message?: string;

  data?: AtmTypeComponentResResponseForRegister[];
};


export type AtmStatusReqFilter = {
  // ATM 아이디
  atmId?: number;

  // N : Not Installed / I : Installed / A : Activated / U : Under Maintenance / S : Suspended / D : Deleted
  status?: string;
};


export type AtmStatusResSingle = {
  // ATM 상태 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // 상태
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseAtmStatusResSingleList = {
  code?: string;

  message?: string;

  data?: AtmStatusResSingle[];
};


export type AtmStatusResItem = {
  // ATM 상태 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // 상태
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseAtmStatusResItem = {
  code?: string;

  message?: string;

  data?: AtmStatusResItem;
};


export type CommonResponseAtmStatusResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmStatusResSingleWithPage;
};


export type AtmStatusResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmStatusResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmMaintenanceReqFilter = {
  // ATM 아이디
  atmId?: number;

  // ATM 점검 요청자
  atmMaintenanceRequesterTypeCode?: string;

  // ATM 점검 유형
  atmMaintenanceTypeCode?: string;

  // ATM 점검 요청 분류 아이디
  atmMaintenanceRequestCategoryId?: number;

  // (ATM 점거 가이드에 따른) ATM 점검 결과
  atmMaintenanceResult?: string;

  // 츨동 업체 아이디
  partnerId?: number;

  // 츨동 기사 아이디
  partnerMemberId?: number;

  // 유상/무상
  freeYn?: string;

  // 출동 업체에서 관리하는 코드
  externalId?: string;

  // 예약 일자 (YYYYMMDDHHMM)
  scheduledAt?: string;
};


export type CommonResponseAtmMaintenanceResSingleList = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceResSingle[];
};


export type CommonResponseAtmMaintenanceResItem = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceResItem;
};


export type CommonResponseAtmMaintenanceResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceResSingleWithPage;
};


export type AtmMaintenanceResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmMaintenanceResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmMaintenanceStatusReqFilter = {
  // ATM 점검 아이디
  atmMaintenanceId?: number;
};


export type AtmMaintenanceStatusResSingle = {
  // 아이디
  id?: number;

  // ATM 점검 아이디
  atmMaintenanceId?: number;

  // S : Scheduled (예약 / 등록 됨) / R : Requested (NPS에 요청 됨) / C : Canceled (자동 복구에 따른 취소) / A : Assigned / P : Processing (ATM에 login한 시점) / N : Completed (NPS에서 처리 완료) / M : Confirm (민팃에서 확인 완료)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAtmMaintenanceStatusResSingleList = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceStatusResSingle[];
};


export type AtmMaintenanceStatusResItem = {
  // 아이디
  id?: number;

  // ATM 점검 아이디
  atmMaintenanceId?: number;

  // S : Scheduled (예약 / 등록 됨) / R : Requested (NPS에 요청 됨) / C : Canceled (자동 복구에 따른 취소) / A : Assigned / P : Processing (ATM에 login한 시점) / N : Completed (NPS에서 처리 완료) / M : Confirm (민팃에서 확인 완료)
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAtmMaintenanceStatusResItem = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceStatusResItem;
};


export type CommonResponseAtmMaintenanceStatusResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceStatusResSingleWithPage;
};


export type AtmMaintenanceStatusResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmMaintenanceStatusResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type CommonResponseAtmMaintenanceRequestCategoryResSingleList = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceRequestCategoryResSingle[];
};


export type CommonResponseAtmMaintenanceRequestCategoryResSingle = {
  code?: string;

  message?: string;

  data?: AtmMaintenanceRequestCategoryResSingle;
};


export type AtmComponentStockReqFilter = {
  // ATM 유형
  atmTypeCode?: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // S : Stock (재고 - 새 것) / B : Breakdown (고장) / R : Repaired (수리 완료) / I : Installed (설치 완료) / D : Deleted (폐기)
  status?: string;

  // (수리 업체 관리) 파트너 아이디
  partnerId?: number;
};


export type AtmComponentStockResSingle = {
  // ATM 구성 요소 재고 아이디
  id?: number;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // H/W 속성
  attributes?: string;

  // (수리 업체 관리) 파트너 아이디
  partnerId?: number;

  // (보관) 지점 아이디
  branchId?: number;

  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // ATM  유형 ATM Type
  atmTypeCode?: string;

  // R : Stock / R : Repair / I : Installed / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmComponentStockResSingleList = {
  code?: string;

  message?: string;

  data?: AtmComponentStockResSingle[];
};


export type CommonResponseAtmComponentStockResSingle = {
  code?: string;

  message?: string;

  data?: AtmComponentStockResSingle;
};


export type AtmComponentStockResSingleExField = {
  // ATM 구성 요소 재고 아이디
  id?: number;

  // ATM 구성요소 코드
  atmComponentCode?: string;

  // H/W 일련 번호
  atmComponentSerialNumber?: string;

  // S/W 버전
  atmComponentVersion?: string;

  // H/W 속성
  attributes?: string;

  // (수리 업체 관리) 파트너 아이디
  partnerId?: number;

  // (보관) 지점 아이디
  branchId?: number;

  // ATM 아이디 (설치 시 업데이트 됨)
  atmId?: number;

  // ATM  유형 ATM Type
  atmTypeCode?: string;

  // R : Stock / R : Repair / I : Installed / D : Deleted
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // 파트너명
  partnerName?: string;

  // 지점명
  branchName?: string;

  // ATM 이름
  atmName?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAtmComponentStockResSingleExFieldWithPage = {
  code?: string;

  message?: string;

  data?: AtmComponentStockResSingleExFieldWithPage;
};


export type AtmComponentStockResSingleExFieldWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmComponentStockResSingleExField[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmCollectionReqFilter = {};


export type AtmCollectionResItem = {
  // 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // (수거) 파트너 아이디
  partnerId?: number;

  // (수거) 파트너 멤버 아이디 (기사)
  partnerMemberId?: number;

  // 수량
  quantity?: number;

  // 수거 수량
  quantityCollected?: number;

  // 수거 예정 일자
  scheduledAt?: Date;

  // R : Requested 수거 요청 / W : Wating 수거예정 / L : Login 로그인 / O : Open 문열림 / C : Completed 수거 완료 / F : Finished 수거 종료
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;
};


export type CommonResponseAtmCollectionResItemList = {
  code?: string;

  message?: string;

  data?: AtmCollectionResItem[];
};


export type CommonResponseAtmCollectionResItem = {
  code?: string;

  message?: string;

  data?: AtmCollectionResItem;
};


export type CommonResponseAtmCollectionResItemWithPage = {
  code?: string;

  message?: string;

  data?: AtmCollectionResItemWithPage;
};


export type AtmCollectionResItemWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmCollectionResItem[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmCollectionStatusReqFilter = {
  // ATM 회수 아이디
  atmCollectionId?: number;

  // 상태
  status?: string;
};


export type AtmCollectionStatusResSingle = {
  // 아이디
  id?: number;

  // ATM 회수 아이디
  atmCollectionId?: number;

  // R : Requested 수거 요청 / W : Wating 수거예정 / L : Login 로그인 / O : Open 문열림 / C : Completed 수거 완료 / F : Finished 수거 종료
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAtmCollectionStatusResSingleList = {
  code?: string;

  message?: string;

  data?: AtmCollectionStatusResSingle[];
};


export type AtmCollectionStatusResItem = {
  // 아이디
  id?: number;

  // ATM 회수 아이디
  atmCollectionId?: number;

  // R : Requested 수거 요청 / W : Wating 수거예정 / L : Login 로그인 / O : Open 문열림 / C : Completed 수거 완료 / F : Finished 수거 종료
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAtmCollectionStatusResItem = {
  code?: string;

  message?: string;

  data?: AtmCollectionStatusResItem;
};


export type CommonResponseAtmCollectionStatusResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmCollectionStatusResSingleWithPage;
};


export type AtmCollectionStatusResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmCollectionStatusResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmChangedHistoryReqFilter = {
  // ATM 아이디
  atmId?: number;

  // ATM 변경 히스토리 유형 코드
  atmChangedHistoryTypeCode?: string;

  // 변경 전
  oldValue?: string;

  // 변경 후
  newValue?: string;
};


export type AtmChangedHistoryResSingle = {
  // ATM 현장 점검 내역 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // ATM 변경 히스토리 유형 코드
  atmChangedHistoryTypeCode?: string;

  // 변경 전
  oldValue?: string;

  // 변경 후
  newValue?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAtmChangedHistoryResSingleList = {
  code?: string;

  message?: string;

  data?: AtmChangedHistoryResSingle[];
};


export type CommonResponseAtmChangedHistoryResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmChangedHistoryResSingleWithPage;
};


export type AtmChangedHistoryResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmChangedHistoryResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AtmAcceptanceDeviceFileResItem = {
  // ATM 구성 요소 아이디
  id?: number;

  // ATM 수납 디바이스 아이디
  atmAcceptanceDeviceId?: number;

  // ATM 촬영 부위 코드
  atmPartCode?: string;

  // 파일 아이디
  fileId?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  fileUrl?: string;
};


export type AtmAcceptanceDeviceResItem = {
  // ATM 수납 디바이스 아이디
  id?: number;

  // ATM 아이디
  atmId?: number;

  // 디바이스 아이디
  deviceId?: number;

  // ATM 회수 아이디
  atmWithdrawalId?: number;

  // A : Acceptance Completed / C : Acceptance Canceled / W : Withdrawal Completed
  status?: string;

  // 등록일시
  createdAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정일시
  updatedAt?: Date;

  // 수정자 아이디
  updatedBy?: string;

  // ATM 수납 디바이스 파일
  atmAcceptanceDeviceFiles?: AtmAcceptanceDeviceFileResItem[];
};


export type CommonResponseAtmAcceptanceDeviceResItem = {
  code?: string;

  message?: string;

  data?: AtmAcceptanceDeviceResItem;
};


export type CommonResponseAtmAcceptanceDeviceResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AtmAcceptanceDeviceResSingleWithPage;
};


export type AtmAcceptanceDeviceResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AtmAcceptanceDeviceResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AdministratorResItem = {
  // 아이디
  id?: string;

  // 관리자 로그인 아이디
  loginId?: string;

  // 패스워드 salt key
  loginPasswordSaltKey?: string;

  // 권한 유형
  roles?: number;

  // cipher Key Id
  cipherKeyId?: string;

  //  A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 버전
  version?: number;

  partnerMember?: PartnerMemberResItem;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAdministratorResItem = {
  code?: string;

  message?: string;

  data?: AdministratorResItem;
};


export type AdministratorReqFilterForManage = {
  // 휴대폰번호
  mobilePhoneNumber?: string;

  // 이름
  name?: string;

  // 상태
  status?: string;

  // 권한 유형
  administratorRoles?: number;

  // 파트너 아이디
  partnerId?: number;

  // 지점 아이디
  branchId?: number;
};


export type AdministratorResSingleExField = {
  // 아이디
  id?: string;

  // 관리자 로그인 아이디
  loginId?: string;

  // 패스워드 salt key
  loginPasswordSaltKey?: string;

  // 권한 유형
  roles?: number;

  // cipher Key Id
  cipherKeyId?: string;

  //  A : Activated 활성, D : Deactivated 비활성
  status?: string;

  // 등록 일시
  createdAt?: Date;

  // 수정 일시
  updatedAt?: Date;

  // 등록자 아이디
  createdBy?: string;

  // 수정자 아이디
  updatedBy?: string;

  // 버전
  version?: number;

  // 파트너 이름
  partnerName?: string;

  // 지점 이름
  branchName?: string;

  // 파트너 멤버 이름
  partnerMemberName?: string;

  creatorName?: string;

  updatorName?: string;
};


export type CommonResponseAdministratorResSingleExFieldWithPage = {
  code?: string;

  message?: string;

  data?: AdministratorResSingleExFieldWithPage;
};


export type AdministratorResSingleExFieldWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AdministratorResSingleExField[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export type AdministratorLoginHistoryReqFilter = {
  // 아이디
  id?: number;

  // 관리자 아이디
  administratorId?: string;

  // 로그인 일시
  loginAt?: string;

  // 로그인 이력 사용자 에이전트
  loginHistoryUserAgent?: string;

  // 로그인 이력 사용자 IP 주소
  loginHistoryIp?: string;

  // 로그인 성공 여부
  loginSuccessYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;
};


export type AdministratorLoginHistoryResSingle = {
  // 아이디
  id?: number;

  // 관리자 아이디
  administratorId?: string;

  // 로그인 일시
  loginAt?: string;

  // 로그인 이력 사용자 에이전트
  loginHistoryUserAgent?: string;

  // 로그인 이력 사용자 IP 주소
  loginHistoryIp?: string;

  // 로그인 성공 여부
  loginSuccessYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAdministratorLoginHistoryResSingleList = {
  code?: string;

  message?: string;

  data?: AdministratorLoginHistoryResSingle[];
};


export type AdministratorLoginHistoryResItem = {
  // 아이디
  id?: number;

  // 관리자 아이디
  administratorId?: string;

  // 로그인 일시
  loginAt?: string;

  // 로그인 이력 사용자 에이전트
  loginHistoryUserAgent?: string;

  // 로그인 이력 사용자 IP 주소
  loginHistoryIp?: string;

  // 로그인 성공 여부
  loginSuccessYn?: string;

  // 등록일시
  createdAt?: string;

  // 등록자 아이디
  createdBy?: string;
};


export type CommonResponseAdministratorLoginHistoryResItem = {
  code?: string;

  message?: string;

  data?: AdministratorLoginHistoryResItem;
};


export type CommonResponseAdministratorLoginHistoryResSingleWithPage = {
  code?: string;

  message?: string;

  data?: AdministratorLoginHistoryResSingleWithPage;
};


export type AdministratorLoginHistoryResSingleWithPage = {
  totalPages?: number;

  totalElements?: number;

  first?: boolean;

  last?: boolean;

  size?: number;

  content?: AdministratorLoginHistoryResSingle[];

  number?: number;

  sort?: SortObject;

  pageable?: PageableObject;

  numberOfElements?: number;

  empty?: boolean;
};


export const PurchaseApiAdminPurchasesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseResItem>(
    `/purchase/api-admin/purchases/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesIdGet"];

  return useQuery<CommonResponsePurchaseResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesIdGet"];

  return useQuery<CommonResponsePurchaseResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PurchaseReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseResId>(
    `/purchase/api-admin/purchases/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesIdPutMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasesIdPut";

  return useMutation<
    CommonResponsePurchaseResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PurchaseReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchasesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchasesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchases/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesIdDeleteMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchasesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseRewardsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseRewardResItem>(
    `/purchase/api-admin/purchase-rewards/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsIdGet"];

  return useQuery<CommonResponsePurchaseRewardResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseRewardsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsIdGet"];

  return useQuery<CommonResponsePurchaseRewardResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseRewardsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PurchaseRewardReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-rewards/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsIdPutMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseRewardsIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PurchaseRewardReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchaseRewardsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseRewardsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-rewards/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsIdDeleteMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseRewardsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchaseRewardsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchasePricePolicyResItem>(
    `/purchase/api-admin/purchase-price-policies/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesIdGet"];

  return useQuery<CommonResponsePurchasePricePolicyResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasePricePoliciesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesIdGet"];

  return useQuery<CommonResponsePurchasePricePolicyResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PurchasePricePolicyReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-price-policies/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesIdPutMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasePricePoliciesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PurchasePricePolicyReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchasePricePoliciesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-price-policies/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesIdDeleteMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasePricePoliciesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await PurchaseApiAdminPurchasePricePoliciesIdDeleteMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseDeviceModelResItem>(
    `/purchase/api-admin/purchase-device-models/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsIdGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseDeviceModelsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsIdGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PurchaseDeviceModelReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-device-models/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsIdPutMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseDeviceModelsIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PurchaseDeviceModelReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/purchase/api-admin/purchase-device-models/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsIdDeleteMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseDeviceModelsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await PurchaseApiAdminPurchaseDeviceModelsIdDeleteMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelGradePricesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchaseDeviceModelGradePriceResItem>(
      `/purchase/api-admin/purchase-device-model-grade-prices/${params.path.id}`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelGradePricesIdGet"];

  return useQuery<CommonResponsePurchaseDeviceModelGradePriceResItem>({
    queryKey,
    queryFn: async () => {
      const response =
        await PurchaseApiAdminPurchaseDeviceModelGradePricesIdGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelGradePricesIdGet"];

  return useQuery<CommonResponsePurchaseDeviceModelGradePriceResItem>({
    queryKey,
    queryFn: async () => {
      const response =
        await PurchaseApiAdminPurchaseDeviceModelGradePricesIdGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelGradePricesIdPutMutation =
  async (
    params: {
      path: {
        id: number;
      };

      body: PurchaseDeviceModelGradePriceReqUpdate;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response = await axiosClient<CommonResponseObject>(
      `/purchase/api-admin/purchase-device-model-grade-prices/${params.path.id}`,
      {
        method: "put",
        data: params.body,
        ...options,
      },
    );
    return response.data;
  };


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesIdPutMutation =
  () => {
    const mutationKey = "PurchaseApiAdminPurchaseDeviceModelGradePricesIdPut";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          path: {
            id: number;
          };

          body: PurchaseDeviceModelGradePriceReqUpdate;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await PurchaseApiAdminPurchaseDeviceModelGradePricesIdPutMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const PurchaseApiAdminPurchaseDeviceModelGradePricesIdDeleteMutation =
  async (
    params: {
      path: {
        id: number;
      };
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response = await axiosClient<CommonResponseObject>(
      `/purchase/api-admin/purchase-device-model-grade-prices/${params.path.id}`,
      {
        method: "delete",

        ...options,
      },
    );
    return response.data;
  };


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesIdDeleteMutation =
  () => {
    const mutationKey =
      "PurchaseApiAdminPurchaseDeviceModelGradePricesIdDelete";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          path: {
            id: number;
          };
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await PurchaseApiAdminPurchaseDeviceModelGradePricesIdDeleteMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const PartnerApiAdminPartnersIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerResItem>(
    `/partner/api-admin/partners/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersIdGet"];

  return useQuery<CommonResponsePartnerResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnersIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersIdGet"];

  return useQuery<CommonResponsePartnerResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminPartnersIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PartnerReqUpdateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerResId>(
    `/partner/api-admin/partners/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersIdPutMutation = () => {
  const mutationKey = "PartnerApiAdminPartnersIdPut";

  return useMutation<
    CommonResponsePartnerResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PartnerReqUpdateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnersIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnersIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/partner/api-admin/partners/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersIdDeleteMutation = () => {
  const mutationKey = "PartnerApiAdminPartnersIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnersIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnerMembersIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerMemberResItem>(
    `/partner/api-admin/partner-members/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersIdGet"];

  return useQuery<CommonResponsePartnerMemberResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnerMembersIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersIdGet"];

  return useQuery<CommonResponsePartnerMemberResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminPartnerMembersIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PartnerMemberReqUpdateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerMemberResId>(
    `/partner/api-admin/partner-members/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersIdPutMutation = () => {
  const mutationKey = "PartnerApiAdminPartnerMembersIdPut";

  return useMutation<
    CommonResponsePartnerMemberResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PartnerMemberReqUpdateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnerMembersIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnerMembersIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/partner/api-admin/partner-members/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersIdDeleteMutation = () => {
  const mutationKey = "PartnerApiAdminPartnerMembersIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnerMembersIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnerMembersIdInvitePutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: PartnerMemberReqUpdateForInvite;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/partner/api-admin/partner-members/${params.path.id}/invite`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersIdInvitePutMutation = () => {
  const mutationKey = "PartnerApiAdminPartnerMembersIdInvitePut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: PartnerMemberReqUpdateForInvite;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnerMembersIdInvitePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnerMembersRegistPutMutation = async (
  params: {
    body: PartnerMemberReqUpdateForInviteAccept;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/partner/api-admin/partner-members/regist`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersRegistPutMutation = () => {
  const mutationKey = "PartnerApiAdminPartnerMembersRegistPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        body: PartnerMemberReqUpdateForInviteAccept;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnerMembersRegistPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminBranchesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseBranchResItem>(
    `/partner/api-admin/branches/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesIdGet"];

  return useQuery<CommonResponseBranchResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminBranchesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesIdGet"];

  return useQuery<CommonResponseBranchResItem>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminBranchesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: BranchReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseBranchResId>(
    `/partner/api-admin/branches/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesIdPutMutation = () => {
  const mutationKey = "PartnerApiAdminBranchesIdPut";

  return useMutation<
    CommonResponseBranchResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: BranchReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminBranchesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminBranchesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/partner/api-admin/branches/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesIdDeleteMutation = () => {
  const mutationKey = "PartnerApiAdminBranchesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminBranchesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionResItem>(
    `/inspection/api-admin/inspections/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsIdGet"];

  return useQuery<CommonResponseInspectionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsIdGet"];

  return useQuery<CommonResponseInspectionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: InspectionReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionResId>(
    `/inspection/api-admin/inspections/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsIdPutMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionsIdPut";

  return useMutation<
    CommonResponseInspectionResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: InspectionReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await InspectionApiAdminInspectionsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/inspection/api-admin/inspections/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsIdDeleteMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await InspectionApiAdminInspectionsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionProfilesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionProfileResItem>(
    `/inspection/api-admin/inspection-profiles/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesIdGet"];

  return useQuery<CommonResponseInspectionProfileResItem>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionProfilesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesIdGet"];

  return useQuery<CommonResponseInspectionProfileResItem>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionProfilesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: InspectionProfileReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/inspection/api-admin/inspection-profiles/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesIdPutMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionProfilesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: InspectionProfileReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await InspectionApiAdminInspectionProfilesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionProfilesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/inspection/api-admin/inspection-profiles/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesIdDeleteMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionProfilesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await InspectionApiAdminInspectionProfilesIdDeleteMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDevicesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceResItem>(
    `/device/api-admin/devices/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesIdGet"];

  return useQuery<CommonResponseDeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDevicesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesIdGet"];

  return useQuery<CommonResponseDeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDevicesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceResId>(
    `/device/api-admin/devices/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDevicesIdPut";

  return useMutation<
    CommonResponseDeviceResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDevicesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDevicesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/devices/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDevicesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDevicesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceSeriessIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceSeriesResItem>(
    `/device/api-admin/device-seriess/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessIdGet"];

  return useQuery<CommonResponseDeviceSeriesResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceSeriessIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessIdGet"];

  return useQuery<CommonResponseDeviceSeriesResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceSeriessIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceSeriesReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceSeriesResId>(
    `/device/api-admin/device-seriess/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceSeriessIdPut";

  return useMutation<
    CommonResponseDeviceSeriesResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceSeriesReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceSeriessIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceSeriessIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/device-seriess/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceSeriessIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceSeriessIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceModelsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceModelResItem>(
    `/device/api-admin/device-models/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsIdGet"];

  return useQuery<CommonResponseDeviceModelResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceModelsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsIdGet"];

  return useQuery<CommonResponseDeviceModelResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceModelsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceModelReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceModelResId>(
    `/device/api-admin/device-models/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceModelsIdPut";

  return useMutation<
    CommonResponseDeviceModelResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceModelReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceModelsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceModelsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/device-models/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceModelsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceModelsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufacturesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceManufactureResItem>(
    `/device/api-admin/device-manufactures/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesIdGet"];

  return useQuery<CommonResponseDeviceManufactureResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufacturesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesIdGet"];

  return useQuery<CommonResponseDeviceManufactureResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufacturesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceManufactureReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceManufactureResId>(
    `/device/api-admin/device-manufactures/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufacturesIdPut";

  return useMutation<
    CommonResponseDeviceManufactureResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceManufactureReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceManufacturesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufacturesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/device-manufactures/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufacturesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceManufacturesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufactureTypesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceManufactureTypeResItem>(
      `/device/api-admin/device-manufacture-types/${params.path.id}`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesIdGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufactureTypesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesIdGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufactureTypesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceManufactureTypeReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceManufactureTypeResId>(
    `/device/api-admin/device-manufacture-types/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufactureTypesIdPut";

  return useMutation<
    CommonResponseDeviceManufactureTypeResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceManufactureTypeReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceManufactureTypesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufactureTypesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/device-manufacture-types/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufactureTypesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await DeviceApiAdminDeviceManufactureTypesIdDeleteMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceDeletionsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceDeletionResItem>(
    `/device/api-admin/device-deletions/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsIdGet"];

  return useQuery<CommonResponseDeviceDeletionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceDeletionsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsIdGet"];

  return useQuery<CommonResponseDeviceDeletionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceDeletionsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: DeviceDeletionReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceDeletionResId>(
    `/device/api-admin/device-deletions/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsIdPutMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceDeletionsIdPut";

  return useMutation<
    CommonResponseDeviceDeletionResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: DeviceDeletionReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceDeletionsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceDeletionsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/device/api-admin/device-deletions/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsIdDeleteMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceDeletionsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceDeletionsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminTermsAgreementsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsAgreementResItem>(
    `/customer/api-admin/terms-agreements/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsIdGet"];

  return useQuery<CommonResponseTermsAgreementResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminTermsAgreementsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsIdGet"];

  return useQuery<CommonResponseTermsAgreementResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminTermsAgreementsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: TermsAgreementReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsAgreementResId>(
    `/customer/api-admin/terms-agreements/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsIdPutMutation = () => {
  const mutationKey = "CustomerApiAdminTermsAgreementsIdPut";

  return useMutation<
    CommonResponseTermsAgreementResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: TermsAgreementReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminTermsAgreementsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminTermsAgreementsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/customer/api-admin/terms-agreements/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsIdDeleteMutation = () => {
  const mutationKey = "CustomerApiAdminTermsAgreementsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminTermsAgreementsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminEventApplicationsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventApplicationResItem>(
    `/customer/api-admin/event-applications/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsIdGet"];

  return useQuery<CommonResponseEventApplicationResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminEventApplicationsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsIdGet"];

  return useQuery<CommonResponseEventApplicationResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminEventApplicationsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: EventApplicationReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventApplicationResId>(
    `/customer/api-admin/event-applications/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsIdPutMutation = () => {
  const mutationKey = "CustomerApiAdminEventApplicationsIdPut";

  return useMutation<
    CommonResponseEventApplicationResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: EventApplicationReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminEventApplicationsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminEventApplicationsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/customer/api-admin/event-applications/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsIdDeleteMutation = () => {
  const mutationKey = "CustomerApiAdminEventApplicationsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminEventApplicationsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsResItem>(
    `/common/api-admin/terms/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsIdGet"];

  return useQuery<CommonResponseTermsResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsIdGet"];

  return useQuery<CommonResponseTermsResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: TermsReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsResId>(
    `/common/api-admin/terms/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminTermsIdPut";

  return useMutation<
    CommonResponseTermsResId,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: TermsReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsIdDeleteMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/terms/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminTermsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: string;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsContentsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsContentResItem>(
    `/common/api-admin/terms-contents/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsContentsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsIdGet"];

  return useQuery<CommonResponseTermsContentResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsContentsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsIdGet"];

  return useQuery<CommonResponseTermsContentResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsContentsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: TermsContentReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsContentResId>(
    `/common/api-admin/terms-contents/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsContentsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminTermsContentsIdPut";

  return useMutation<
    CommonResponseTermsContentResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: TermsContentReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsContentsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsContentsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/terms-contents/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsContentsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminTermsContentsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsContentsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminSigungusIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSigunguResItem>(
    `/common/api-admin/sigungus/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusIdGet"];

  return useQuery<CommonResponseSigunguResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminSigungusIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusIdGet"];

  return useQuery<CommonResponseSigunguResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminSigungusIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: SigunguReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSigunguResId>(
    `/common/api-admin/sigungus/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusIdPutMutation = () => {
  const mutationKey = "CommonApiAdminSigungusIdPut";

  return useMutation<
    CommonResponseSigunguResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: SigunguReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminSigungusIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminSigungusIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/sigungus/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminSigungusIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminSigungusIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminServicesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseServiceSeviceResItem>(
    `/common/api-admin/services/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminServicesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesIdGet"];

  return useQuery<CommonResponseServiceSeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminServicesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesIdGet"];

  return useQuery<CommonResponseServiceSeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminServicesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: ServiceSeviceReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/services/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminServicesIdPutMutation = () => {
  const mutationKey = "CommonApiAdminServicesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: ServiceSeviceReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminServicesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminServicesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/services/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminServicesIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminServicesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminServicesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenusIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuResItem>(
    `/common/api-admin/menus/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusIdGet"];

  return useQuery<CommonResponseMenuResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenusIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusIdGet"];

  return useQuery<CommonResponseMenuResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenusIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: MenuReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuResId>(
    `/common/api-admin/menus/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusIdPutMutation = () => {
  const mutationKey = "CommonApiAdminMenusIdPut";

  return useMutation<
    CommonResponseMenuResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: MenuReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenusIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenusIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/menus/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminMenusIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenusIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenuButtonsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuButtonResItem>(
    `/common/api-admin/menu-buttons/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsIdGet"];

  return useQuery<CommonResponseMenuButtonResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenuButtonsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsIdGet"];

  return useQuery<CommonResponseMenuButtonResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenuButtonsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: MenuButtonReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuButtonResId>(
    `/common/api-admin/menu-buttons/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminMenuButtonsIdPut";

  return useMutation<
    CommonResponseMenuButtonResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: MenuButtonReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenuButtonsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenuButtonsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/menu-buttons/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminMenuButtonsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenuButtonsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventsIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventResItemForTerms>(
    `/common/api-admin/events/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResItemForTerms>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsIdGet"];

  return useQuery<CommonResponseEventResItemForTerms>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventsIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResItemForTerms>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsIdGet"];

  return useQuery<CommonResponseEventResItemForTerms>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventsIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: EventReqUpdateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventResId>(
    `/common/api-admin/events/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminEventsIdPut";

  return useMutation<
    CommonResponseEventResId,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: EventReqUpdateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventsIdDeleteMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/events/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminEventsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: string;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventTermsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventTermsResItem>(
    `/common/api-admin/event-terms/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsIdGet"];

  return useQuery<CommonResponseEventTermsResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventTermsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsIdGet"];

  return useQuery<CommonResponseEventTermsResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventTermsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: EventTermsReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/event-terms/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminEventTermsIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: EventTermsReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventTermsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventTermsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/event-terms/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminEventTermsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventTermsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventBenefitsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventBenefitResItem>(
    `/common/api-admin/event-benefits/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventBenefitsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsIdGet"];

  return useQuery<CommonResponseEventBenefitResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventBenefitsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsIdGet"];

  return useQuery<CommonResponseEventBenefitResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventBenefitsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: EventBenefitReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/event-benefits/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventBenefitsIdPutMutation = () => {
  const mutationKey = "CommonApiAdminEventBenefitsIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: EventBenefitReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventBenefitsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventBenefitsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/event-benefits/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventBenefitsIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminEventBenefitsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventBenefitsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCouponPoliciesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCouponPolicyResItem>(
    `/common/api-admin/coupon-policies/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesIdGet"];

  return useQuery<CommonResponseCouponPolicyResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCouponPoliciesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesIdGet"];

  return useQuery<CommonResponseCouponPolicyResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCouponPoliciesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: CouponPolicyReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/coupon-policies/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesIdPutMutation = () => {
  const mutationKey = "CommonApiAdminCouponPoliciesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: CouponPolicyReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCouponPoliciesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCouponPoliciesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/coupon-policies/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminCouponPoliciesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCouponPoliciesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminContentDisplaysIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseContentDisplayResItem>(
    `/common/api-admin/content-displays/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminContentDisplaysIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysIdGet"];

  return useQuery<CommonResponseContentDisplayResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminContentDisplaysIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysIdGet"];

  return useQuery<CommonResponseContentDisplayResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminContentDisplaysIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: ContentDisplayReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseContentDisplayResId>(
    `/common/api-admin/content-displays/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminContentDisplaysIdPutMutation = () => {
  const mutationKey = "CommonApiAdminContentDisplaysIdPut";

  return useMutation<
    CommonResponseContentDisplayResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: ContentDisplayReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminContentDisplaysIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminContentDisplaysIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/content-displays/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminContentDisplaysIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminContentDisplaysIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminContentDisplaysIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCommonCodesIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeResItem>(
    `/common/api-admin/common-codes/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesIdGet"];

  return useQuery<CommonResponseCommonCodeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodesIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesIdGet"];

  return useQuery<CommonResponseCommonCodeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodesIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: CommonCodeReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/common-codes/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesIdPutMutation = () => {
  const mutationKey = "CommonApiAdminCommonCodesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: CommonCodeReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCommonCodesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCommonCodesOrderPutMutation = async (
  params: {
    body: CommonCodeReqUpdateForOrder[];
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/common-codes/order`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesOrderPutMutation = () => {
  const mutationKey = "CommonApiAdminCommonCodesOrderPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        body: CommonCodeReqUpdateForOrder[];
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCommonCodesOrderPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCommonCodeTypesIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeTypeResItem>(
    `/common/api-admin/common-code-types/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodeTypesIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesIdGet"];

  return useQuery<CommonResponseCommonCodeTypeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodeTypesIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesIdGet"];

  return useQuery<CommonResponseCommonCodeTypeResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodeTypesIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: CommonCodeTypeReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/common-code-types/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodeTypesIdPutMutation = () => {
  const mutationKey = "CommonApiAdminCommonCodeTypesIdPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: CommonCodeTypeReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCommonCodeTypesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminApisIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseApiResItem>(
    `/common/api-admin/apis/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisIdGet"];

  return useQuery<CommonResponseApiResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisIdGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminApisIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisIdGet"];

  return useQuery<CommonResponseApiResItem>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisIdGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminApisIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: ApiReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseApiResId>(
    `/common/api-admin/apis/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisIdPutMutation = () => {
  const mutationKey = "CommonApiAdminApisIdPut";

  return useMutation<
    CommonResponseApiResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: ApiReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminApisIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminApisIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/common/api-admin/apis/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisIdDeleteMutation = () => {
  const mutationKey = "CommonApiAdminApisIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminApisIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmResSingleExFieldForDetail>(
      `/atm/api-admin/atms/${params.path.id}`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResSingleExFieldForDetail>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsIdGet"];

  return useQuery<CommonResponseAtmResSingleExFieldForDetail>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsIdGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResSingleExFieldForDetail>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsIdGet"];

  return useQuery<CommonResponseAtmResSingleExFieldForDetail>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsIdGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdPut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atms/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdWithdrawalPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForWithdrawal;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/withdrawal`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdWithdrawalPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdWithdrawalPut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForWithdrawal;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdWithdrawalPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdWithdrawalRequestPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForWithdrawalRequest;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/withdrawal-request`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdWithdrawalRequestPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdWithdrawalRequestPut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForWithdrawalRequest;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdWithdrawalRequestPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdReplacementPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForReplacement;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/replacement`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdReplacementPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdReplacementPut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForReplacement;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdReplacementPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdReplacementRequestPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForReplacementRequest;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/replacement-request`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdReplacementRequestPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdReplacementRequestPut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForReplacementRequest;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdReplacementRequestPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdRepairCompletePutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForRepairComplete;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/repair-complete`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdRepairCompletePutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdRepairCompletePut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForRepairComplete;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdRepairCompletePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdRecoveryCompletePutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForRecoveryComplete;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/recovery-complete`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdRecoveryCompletePutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdRecoveryCompletePut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForRecoveryComplete;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdRecoveryCompletePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdOperatingPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForOperating;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atms/${params.path.id}/operating`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdOperatingPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdOperatingPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForOperating;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdOperatingPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdInstallRequestPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForInstallRequest;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atms/${params.path.id}/install-request`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdInstallRequestPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdInstallRequestPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForInstallRequest;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdInstallRequestPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdInstallComplatePutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForInstallComplate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atms/${params.path.id}/install-complate`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdInstallComplatePutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdInstallComplatePut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForInstallComplate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdInstallComplatePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsIdDeletePutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmReqUpdateForDelete;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms/${params.path.id}/delete`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsIdDeletePutMutation = () => {
  const mutationKey = "AtmApiAdminAtmsIdDeletePut";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmReqUpdateForDelete;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsIdDeletePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmTypeComponentsOrderPutMutation = async (
  params: {
    body: AtmTypeComponentReqUpdateForOrder[];
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-type-components/order`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmTypeComponentsOrderPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmTypeComponentsOrderPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        body: AtmTypeComponentReqUpdateForOrder[];
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmTypeComponentsOrderPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmStatusesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmStatusResItem>(
    `/atm/api-admin/atm-statuses/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesIdGet"];

  return useQuery<CommonResponseAtmStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmStatusesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesIdGet"];

  return useQuery<CommonResponseAtmStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmStatusesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmStatusReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmStatusResId>(
    `/atm/api-admin/atm-statuses/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmStatusesIdPut";

  return useMutation<
    CommonResponseAtmStatusResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmStatusReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmStatusesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmStatusesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-statuses/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmStatusesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmStatusesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceResItem>(
    `/atm/api-admin/atm-maintenance/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceIdGet"];

  return useQuery<CommonResponseAtmMaintenanceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceIdGet"];

  return useQuery<CommonResponseAtmMaintenanceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceResId>(
    `/atm/api-admin/atm-maintenance/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceIdPut";

  return useMutation<
    CommonResponseAtmMaintenanceResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmMaintenanceReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceIdEmergencyDispatchPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceReqUpdateForEmergencyDispatch;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance/${params.path.id}/emergency-dispatch`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdEmergencyDispatchPutMutation =
  () => {
    const mutationKey = "AtmApiAdminAtmMaintenanceIdEmergencyDispatchPut";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          path: {
            id: number;
          };

          body: AtmMaintenanceReqUpdateForEmergencyDispatch;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AtmApiAdminAtmMaintenanceIdEmergencyDispatchPutMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const AtmApiAdminAtmMaintenanceIdConfirmPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceReqUpdateForConfirm;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance/${params.path.id}/confirm`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdConfirmPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceIdConfirmPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmMaintenanceReqUpdateForConfirm;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceIdConfirmPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceIdCollectorAssignPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceReqUpdateForCollectorAssign;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance/${params.path.id}/collector-assign`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdCollectorAssignPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceIdCollectorAssignPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmMaintenanceReqUpdateForCollectorAssign;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await AtmApiAdminAtmMaintenanceIdCollectorAssignPutMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceIdCancelConfirmPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceReqUpdateForCancelConfirm;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance/${params.path.id}/cancel-confirm`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceIdCancelConfirmPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceIdCancelConfirmPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmMaintenanceReqUpdateForCancelConfirm;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await AtmApiAdminAtmMaintenanceIdCancelConfirmPutMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceStatusResItem>(
    `/atm/api-admin/atm-maintenance-statuses/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesIdGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceStatusesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesIdGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceStatusReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceStatusResId>(
    `/atm/api-admin/atm-maintenance-statuses/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceStatusesIdPut";

  return useMutation<
    CommonResponseAtmMaintenanceStatusResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmMaintenanceStatusReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceStatusesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-maintenance-statuses/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceStatusesIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceStatusesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceRequestCategoriesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceRequestCategoryResSingle>(
      `/atm/api-admin/atm-maintenance-request-categories/${params.path.id}`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesIdGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingle>({
    queryKey,
    queryFn: async () => {
      const response =
        await AtmApiAdminAtmMaintenanceRequestCategoriesIdGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesIdGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingle>({
    queryKey,
    queryFn: async () => {
      const response =
        await AtmApiAdminAtmMaintenanceRequestCategoriesIdGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceRequestCategoriesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmMaintenanceRequestCategoryReqUpdateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceRequestCategoryResId>(
      `/atm/api-admin/atm-maintenance-request-categories/${params.path.id}`,
      {
        method: "put",
        data: params.body,
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesIdPutMutation =
  () => {
    const mutationKey = "AtmApiAdminAtmMaintenanceRequestCategoriesIdPut";

    return useMutation<
      CommonResponseAtmMaintenanceRequestCategoryResId,
      Error,
      {
        params: {
          path: {
            id: number;
          };

          body: AtmMaintenanceRequestCategoryReqUpdateForManage;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AtmApiAdminAtmMaintenanceRequestCategoriesIdPutMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const AtmApiAdminAtmMaintenanceRequestCategoriesIdDeleteMutation =
  async (
    params: {
      path: {
        id: number;
      };
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response = await axiosClient<CommonResponseObject>(
      `/atm/api-admin/atm-maintenance-request-categories/${params.path.id}`,
      {
        method: "delete",

        ...options,
      },
    );
    return response.data;
  };


export const useAtmApiAdminAtmMaintenanceRequestCategoriesIdDeleteMutation =
  () => {
    const mutationKey = "AtmApiAdminAtmMaintenanceRequestCategoriesIdDelete";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          path: {
            id: number;
          };
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AtmApiAdminAtmMaintenanceRequestCategoriesIdDeleteMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const AtmApiAdminAtmComponentStocksIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmComponentStockResSingle>(
    `/atm/api-admin/atm-component-stocks/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksIdGet"];

  return useQuery<CommonResponseAtmComponentStockResSingle>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmComponentStocksIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksIdGet"];

  return useQuery<CommonResponseAtmComponentStockResSingle>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmComponentStocksIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmComponentStockReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmComponentStockResId>(
    `/atm/api-admin/atm-component-stocks/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmComponentStocksIdPut";

  return useMutation<
    CommonResponseAtmComponentStockResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmComponentStockReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmComponentStocksIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmComponentStocksIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-component-stocks/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmComponentStocksIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmComponentStocksIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmComponentStocksIdRepairedPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmComponentStockReqUpdateForRepaired;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-component-stocks/${params.path.id}/repaired`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksIdRepairedPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmComponentStocksIdRepairedPut";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmComponentStockReqUpdateForRepaired;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmComponentStocksIdRepairedPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmCollectionsIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionResItem>(
    `/atm/api-admin/atm-collections/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsIdGet"];

  return useQuery<CommonResponseAtmCollectionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionsIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsIdGet"];

  return useQuery<CommonResponseAtmCollectionResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionsIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmCollectionReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionResId>(
    `/atm/api-admin/atm-collections/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmCollectionsIdPut";

  return useMutation<
    CommonResponseAtmCollectionResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmCollectionReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmCollectionsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmCollectionsIdDeleteMutation = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-collections/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsIdDeleteMutation = () => {
  const mutationKey = "AtmApiAdminAtmCollectionsIdDelete";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        path: {
          id: number;
        };
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmCollectionsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmCollectionStatusesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionStatusResItem>(
    `/atm/api-admin/atm-collection-statuses/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionStatusesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesIdGet"];

  return useQuery<CommonResponseAtmCollectionStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionStatusesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesIdGet"];

  return useQuery<CommonResponseAtmCollectionStatusResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionStatusesIdPutMutation = async (
  params: {
    path: {
      id: number;
    };

    body: AtmCollectionStatusReqUpdate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionStatusResId>(
    `/atm/api-admin/atm-collection-statuses/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionStatusesIdPutMutation = () => {
  const mutationKey = "AtmApiAdminAtmCollectionStatusesIdPut";

  return useMutation<
    CommonResponseAtmCollectionStatusResId,
    Error,
    {
      params: {
        path: {
          id: number;
        };

        body: AtmCollectionStatusReqUpdate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmCollectionStatusesIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AdministratorApiAdminAdministratorsIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAdministratorResItem>(
    `/administrator/api-admin/administrators/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAdministratorApiAdminAdministratorsIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsIdGet"];

  return useQuery<CommonResponseAdministratorResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorsIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsIdGet"];

  return useQuery<CommonResponseAdministratorResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AdministratorApiAdminAdministratorsIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: AdministratorReqUpdateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAdministratorResId>(
    `/administrator/api-admin/administrators/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAdministratorApiAdminAdministratorsIdPutMutation = () => {
  const mutationKey = "AdministratorApiAdminAdministratorsIdPut";

  return useMutation<
    CommonResponseAdministratorResId,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: AdministratorReqUpdateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AdministratorApiAdminAdministratorsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AdministratorApiAdminAdministratorsMeLoginPasswordPutMutation =
  async (
    params: {
      body: AdministratorReqUpdateForLoginPassword;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response = await axiosClient<CommonResponseObject>(
      `/administrator/api-admin/administrators/me/login-password`,
      {
        method: "put",
        data: params.body,
        ...options,
      },
    );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorsMeLoginPasswordPutMutation =
  () => {
    const mutationKey = "AdministratorApiAdminAdministratorsMeLoginPasswordPut";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          body: AdministratorReqUpdateForLoginPassword;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AdministratorApiAdminAdministratorsMeLoginPasswordPutMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const StatisticsApiAdminDailyAtmStatusesPostMutation = async (
  params: {
    body: DailyAtmStatusReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDailyAtmStatusResId>(
    `/statistics/api-admin/daily-atm-statuses`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useStatisticsApiAdminDailyAtmStatusesPostMutation = () => {
  const mutationKey = "StatisticsApiAdminDailyAtmStatusesPost";

  return useMutation<
    CommonResponseDailyAtmStatusResId,
    Error,
    {
      params: {
        body: DailyAtmStatusReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await StatisticsApiAdminDailyAtmStatusesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchasesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseResItemList>(
    `/purchase/api-admin/purchases`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesGet"];

  return useQuery<CommonResponsePurchaseResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesGet"];

  return useQuery<CommonResponsePurchaseResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasesPostMutation = async (
  params: {
    body: PurchaseReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseResId>(
    `/purchase/api-admin/purchases`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesPostMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasesPost";

  return useMutation<
    CommonResponsePurchaseResId,
    Error,
    {
      params: {
        body: PurchaseReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchasesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseRewardsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseRewardResSingleList>(
    `/purchase/api-admin/purchase-rewards`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsGet"];

  return useQuery<CommonResponsePurchaseRewardResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseRewardsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsGet"];

  return useQuery<CommonResponsePurchaseRewardResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseRewardsPostMutation = async (
  params: {
    body: PurchaseRewardReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseRewardResId>(
    `/purchase/api-admin/purchase-rewards`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsPostMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseRewardsPost";

  return useMutation<
    CommonResponsePurchaseRewardResId,
    Error,
    {
      params: {
        body: PurchaseRewardReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchaseRewardsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchasePricePolicyResSingleList>(
      `/purchase/api-admin/purchase-price-policies`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesGet"];

  return useQuery<CommonResponsePurchasePricePolicyResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasePricePoliciesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesGet"];

  return useQuery<CommonResponsePurchasePricePolicyResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesPostMutation = async (
  params: {
    body: PurchasePricePolicyReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchasePricePolicyResId>(
    `/purchase/api-admin/purchase-price-policies`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesPostMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchasePricePoliciesPost";

  return useMutation<
    CommonResponsePurchasePricePolicyResId,
    Error,
    {
      params: {
        body: PurchasePricePolicyReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchasePricePoliciesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchaseDeviceModelResSingleList>(
      `/purchase/api-admin/purchase-device-models`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseDeviceModelsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsPostMutation = async (
  params: {
    body: PurchaseDeviceModelReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseDeviceModelResId>(
    `/purchase/api-admin/purchase-device-models`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsPostMutation = () => {
  const mutationKey = "PurchaseApiAdminPurchaseDeviceModelsPost";

  return useMutation<
    CommonResponsePurchaseDeviceModelResId,
    Error,
    {
      params: {
        body: PurchaseDeviceModelReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelGradePricesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchaseDeviceModelGradePriceResSingleList>(
      `/purchase/api-admin/purchase-device-model-grade-prices`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelGradePricesGet"];

  return useQuery<CommonResponsePurchaseDeviceModelGradePriceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response =
        await PurchaseApiAdminPurchaseDeviceModelGradePricesGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelGradePricesGet"];

  return useQuery<CommonResponsePurchaseDeviceModelGradePriceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response =
        await PurchaseApiAdminPurchaseDeviceModelGradePricesGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelGradePricesPostMutation =
  async (
    params: {
      body: PurchaseDeviceModelGradePriceReqCreate;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponsePurchaseDeviceModelGradePriceResId>(
        `/purchase/api-admin/purchase-device-model-grade-prices`,
        {
          method: "post",
          data: params.body,
          ...options,
        },
      );
    return response.data;
  };


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesPostMutation =
  () => {
    const mutationKey = "PurchaseApiAdminPurchaseDeviceModelGradePricesPost";

    return useMutation<
      CommonResponsePurchaseDeviceModelGradePriceResId,
      Error,
      {
        params: {
          body: PurchaseDeviceModelGradePriceReqCreate;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await PurchaseApiAdminPurchaseDeviceModelGradePricesPostMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const PartnerApiAdminPartnersGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerResSingleList>(
    `/partner/api-admin/partners`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersGetQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersGet"];

  return useQuery<CommonResponsePartnerResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnersGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersGet"];

  return useQuery<CommonResponsePartnerResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminPartnersPostMutation = async (
  params: {
    body: PartnerReqCreateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerResId>(
    `/partner/api-admin/partners`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersPostMutation = () => {
  const mutationKey = "PartnerApiAdminPartnersPost";

  return useMutation<
    CommonResponsePartnerResId,
    Error,
    {
      params: {
        body: PartnerReqCreateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnersPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminPartnerMembersGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerMemberResSingleList>(
    `/partner/api-admin/partner-members`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersGetQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersGet"];

  return useQuery<CommonResponsePartnerMemberResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnerMembersGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersGet"];

  return useQuery<CommonResponsePartnerMemberResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminPartnerMembersPostMutation = async (
  params: {
    body: PartnerMemberReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerMemberResId>(
    `/partner/api-admin/partner-members`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersPostMutation = () => {
  const mutationKey = "PartnerApiAdminPartnerMembersPost";

  return useMutation<
    CommonResponsePartnerMemberResId,
    Error,
    {
      params: {
        body: PartnerMemberReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminPartnerMembersPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const PartnerApiAdminBranchesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseBranchResSingleList>(
    `/partner/api-admin/branches`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesGetQuery = (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesGet"];

  return useQuery<CommonResponseBranchResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminBranchesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesGet"];

  return useQuery<CommonResponseBranchResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminBranchesPostMutation = async (
  params: {
    body: BranchReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseBranchResId>(
    `/partner/api-admin/branches`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesPostMutation = () => {
  const mutationKey = "PartnerApiAdminBranchesPost";

  return useMutation<
    CommonResponseBranchResId,
    Error,
    {
      params: {
        body: BranchReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await PartnerApiAdminBranchesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionResItemList>(
    `/inspection/api-admin/inspections`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsGetQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsGet"];

  return useQuery<CommonResponseInspectionResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsGet"];

  return useQuery<CommonResponseInspectionResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionsPostMutation = async (
  params: {
    body: InspectionReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionResId>(
    `/inspection/api-admin/inspections`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsPostMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionsPost";

  return useMutation<
    CommonResponseInspectionResId,
    Error,
    {
      params: {
        body: InspectionReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await InspectionApiAdminInspectionsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const InspectionApiAdminInspectionProfilesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseInspectionProfileResSingleList>(
      `/inspection/api-admin/inspection-profiles`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesGetQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesGet"];

  return useQuery<CommonResponseInspectionProfileResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionProfilesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesGet"];

  return useQuery<CommonResponseInspectionProfileResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionProfilesPostMutation = async (
  params: {
    body: InspectionProfileReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionProfileResId>(
    `/inspection/api-admin/inspection-profiles`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesPostMutation = () => {
  const mutationKey = "InspectionApiAdminInspectionProfilesPost";

  return useMutation<
    CommonResponseInspectionProfileResId,
    Error,
    {
      params: {
        body: InspectionProfileReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await InspectionApiAdminInspectionProfilesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDevicesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceResItemList>(
    `/device/api-admin/devices`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesGet"];

  return useQuery<CommonResponseDeviceResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDevicesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesGet"];

  return useQuery<CommonResponseDeviceResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDevicesPostMutation = async (
  params: {
    body: DeviceReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceResId>(
    `/device/api-admin/devices`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesPostMutation = () => {
  const mutationKey = "DeviceApiAdminDevicesPost";

  return useMutation<
    CommonResponseDeviceResId,
    Error,
    {
      params: {
        body: DeviceReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDevicesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceSeriessGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceSeriesResItemList>(
    `/device/api-admin/device-seriess`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessGet"];

  return useQuery<CommonResponseDeviceSeriesResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceSeriessGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessGet"];

  return useQuery<CommonResponseDeviceSeriesResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceSeriessPostMutation = async (
  params: {
    body: DeviceSeriesReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceSeriesResId>(
    `/device/api-admin/device-seriess`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessPostMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceSeriessPost";

  return useMutation<
    CommonResponseDeviceSeriesResId,
    Error,
    {
      params: {
        body: DeviceSeriesReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceSeriessPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceModelsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceModelResSingleList>(
    `/device/api-admin/device-models`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsGet"];

  return useQuery<CommonResponseDeviceModelResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceModelsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsGet"];

  return useQuery<CommonResponseDeviceModelResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceModelsPostMutation = async (
  params: {
    body: DeviceModelReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceModelResId>(
    `/device/api-admin/device-models`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsPostMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceModelsPost";

  return useMutation<
    CommonResponseDeviceModelResId,
    Error,
    {
      params: {
        body: DeviceModelReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceModelsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufacturesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceManufactureResSingleList>(
      `/device/api-admin/device-manufactures`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesGet"];

  return useQuery<CommonResponseDeviceManufactureResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufacturesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesGet"];

  return useQuery<CommonResponseDeviceManufactureResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufacturesPostMutation = async (
  params: {
    body: DeviceManufactureReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceManufactureResId>(
    `/device/api-admin/device-manufactures`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesPostMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufacturesPost";

  return useMutation<
    CommonResponseDeviceManufactureResId,
    Error,
    {
      params: {
        body: DeviceManufactureReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceManufacturesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceManufactureTypesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceManufactureTypeResSingleList>(
      `/device/api-admin/device-manufacture-types`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufactureTypesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufactureTypesPostMutation = async (
  params: {
    body: DeviceManufactureTypeReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceManufactureTypeResId>(
    `/device/api-admin/device-manufacture-types`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesPostMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceManufactureTypesPost";

  return useMutation<
    CommonResponseDeviceManufactureTypeResId,
    Error,
    {
      params: {
        body: DeviceManufactureTypeReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceManufactureTypesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const DeviceApiAdminDeviceDeletionsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceDeletionResSingleList>(
    `/device/api-admin/device-deletions`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsGet"];

  return useQuery<CommonResponseDeviceDeletionResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceDeletionsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsGet"];

  return useQuery<CommonResponseDeviceDeletionResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceDeletionsPostMutation = async (
  params: {
    body: DeviceDeletionReqCreateAtm;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceDeletionResId>(
    `/device/api-admin/device-deletions`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsPostMutation = () => {
  const mutationKey = "DeviceApiAdminDeviceDeletionsPost";

  return useMutation<
    CommonResponseDeviceDeletionResId,
    Error,
    {
      params: {
        body: DeviceDeletionReqCreateAtm;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await DeviceApiAdminDeviceDeletionsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminTermsAgreementsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsAgreementResSingleList>(
    `/customer/api-admin/terms-agreements`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsGet"];

  return useQuery<CommonResponseTermsAgreementResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminTermsAgreementsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsGet"];

  return useQuery<CommonResponseTermsAgreementResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminTermsAgreementsPostMutation = async (
  params: {
    body: TermsAgreementReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsAgreementResId>(
    `/customer/api-admin/terms-agreements`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsPostMutation = () => {
  const mutationKey = "CustomerApiAdminTermsAgreementsPost";

  return useMutation<
    CommonResponseTermsAgreementResId,
    Error,
    {
      params: {
        body: TermsAgreementReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminTermsAgreementsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminSurveyParticipationsPostMutation = async (
  params: {
    body: SurveyParticipationReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSurveyParticipationResId>(
    `/customer/api-admin/survey-participations`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminSurveyParticipationsPostMutation = () => {
  const mutationKey = "CustomerApiAdminSurveyParticipationsPost";

  return useMutation<
    CommonResponseSurveyParticipationResId,
    Error,
    {
      params: {
        body: SurveyParticipationReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminSurveyParticipationsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CustomerApiAdminEventApplicationsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseEventApplicationResSingleList>(
      `/customer/api-admin/event-applications`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsGet"];

  return useQuery<CommonResponseEventApplicationResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminEventApplicationsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsGet"];

  return useQuery<CommonResponseEventApplicationResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminEventApplicationsPostMutation = async (
  params: {
    body: EventApplicationReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventApplicationResId>(
    `/customer/api-admin/event-applications`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsPostMutation = () => {
  const mutationKey = "CustomerApiAdminEventApplicationsPost";

  return useMutation<
    CommonResponseEventApplicationResId,
    Error,
    {
      params: {
        body: EventApplicationReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CustomerApiAdminEventApplicationsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsResSingleList>(
    `/common/api-admin/terms`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsGet"];

  return useQuery<CommonResponseTermsResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsGet"];

  return useQuery<CommonResponseTermsResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsPostMutation = async (
  params: {
    body: TermsReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsResId>(
    `/common/api-admin/terms`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsPostMutation = () => {
  const mutationKey = "CommonApiAdminTermsPost";

  return useMutation<
    CommonResponseTermsResId,
    Error,
    {
      params: {
        body: TermsReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminTermsContentsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsContentResSingleList>(
    `/common/api-admin/terms-contents`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsContentsGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsGet"];

  return useQuery<CommonResponseTermsContentResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsContentsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsGet"];

  return useQuery<CommonResponseTermsContentResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsContentsPostMutation = async (
  params: {
    body: TermsContentReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsContentResId>(
    `/common/api-admin/terms-contents`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsContentsPostMutation = () => {
  const mutationKey = "CommonApiAdminTermsContentsPost";

  return useMutation<
    CommonResponseTermsContentResId,
    Error,
    {
      params: {
        body: TermsContentReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminTermsContentsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminSigungusGetQuery = async (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSigunguResSingleList>(
    `/common/api-admin/sigungus`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusGetQuery = (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusGet"];

  return useQuery<CommonResponseSigunguResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminSigungusGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusGet"];

  return useQuery<CommonResponseSigunguResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminSigungusPostMutation = async (
  params: {
    body: SigunguReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSigunguResId>(
    `/common/api-admin/sigungus`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusPostMutation = () => {
  const mutationKey = "CommonApiAdminSigungusPost";

  return useMutation<
    CommonResponseSigunguResId,
    Error,
    {
      params: {
        body: SigunguReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminSigungusPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminServicesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseServiceSeviceResSingleList>(
    `/common/api-admin/services`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminServicesGetQuery = (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesGet"];

  return useQuery<CommonResponseServiceSeviceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminServicesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesGet"];

  return useQuery<CommonResponseServiceSeviceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminServicesPostMutation = async (
  params: {
    body: ServiceSeviceReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseServiceSeviceResId>(
    `/common/api-admin/services`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminServicesPostMutation = () => {
  const mutationKey = "CommonApiAdminServicesPost";

  return useMutation<
    CommonResponseServiceSeviceResId,
    Error,
    {
      params: {
        body: ServiceSeviceReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminServicesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenusGetQuery = async (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuResSingleList>(
    `/common/api-admin/menus`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusGetQuery = (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusGet"];

  return useQuery<CommonResponseMenuResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenusGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusGet"];

  return useQuery<CommonResponseMenuResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenusPostMutation = async (
  params: {
    body: MenuReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuResId>(
    `/common/api-admin/menus`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusPostMutation = () => {
  const mutationKey = "CommonApiAdminMenusPost";

  return useMutation<
    CommonResponseMenuResId,
    Error,
    {
      params: {
        body: MenuReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenusPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminMenuButtonsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuButtonResSingleList>(
    `/common/api-admin/menu-buttons`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsGetQuery = (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsGet"];

  return useQuery<CommonResponseMenuButtonResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenuButtonsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsGet"];

  return useQuery<CommonResponseMenuButtonResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenuButtonsPostMutation = async (
  params: {
    body: MenuButtonReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuButtonResId>(
    `/common/api-admin/menu-buttons`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsPostMutation = () => {
  const mutationKey = "CommonApiAdminMenuButtonsPost";

  return useMutation<
    CommonResponseMenuButtonResId,
    Error,
    {
      params: {
        body: MenuButtonReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminMenuButtonsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventResSingleList>(
    `/common/api-admin/events`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsGet"];

  return useQuery<CommonResponseEventResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsGet"];

  return useQuery<CommonResponseEventResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventsPostMutation = async (
  params: {
    body: EventReqCreateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventResId>(
    `/common/api-admin/events`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsPostMutation = () => {
  const mutationKey = "CommonApiAdminEventsPost";

  return useMutation<
    CommonResponseEventResId,
    Error,
    {
      params: {
        body: EventReqCreateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventTermsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventTermsResSingleList>(
    `/common/api-admin/event-terms`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsGet"];

  return useQuery<CommonResponseEventTermsResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventTermsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsGet"];

  return useQuery<CommonResponseEventTermsResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventTermsPostMutation = async (
  params: {
    body: EventTermsReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventTermsResId>(
    `/common/api-admin/event-terms`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsPostMutation = () => {
  const mutationKey = "CommonApiAdminEventTermsPost";

  return useMutation<
    CommonResponseEventTermsResId,
    Error,
    {
      params: {
        body: EventTermsReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventTermsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminEventBenefitsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventBenefitResSingleList>(
    `/common/api-admin/event-benefits`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventBenefitsGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsGet"];

  return useQuery<CommonResponseEventBenefitResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventBenefitsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsGet"];

  return useQuery<CommonResponseEventBenefitResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventBenefitsPostMutation = async (
  params: {
    body: EventBenefitReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventBenefitResId>(
    `/common/api-admin/event-benefits`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventBenefitsPostMutation = () => {
  const mutationKey = "CommonApiAdminEventBenefitsPost";

  return useMutation<
    CommonResponseEventBenefitResId,
    Error,
    {
      params: {
        body: EventBenefitReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminEventBenefitsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCouponPoliciesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCouponPolicyResSingleList>(
    `/common/api-admin/coupon-policies`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesGetQuery = (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesGet"];

  return useQuery<CommonResponseCouponPolicyResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCouponPoliciesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesGet"];

  return useQuery<CommonResponseCouponPolicyResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCouponPoliciesPostMutation = async (
  params: {
    body: CouponPolicyReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCouponPolicyResId>(
    `/common/api-admin/coupon-policies`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesPostMutation = () => {
  const mutationKey = "CommonApiAdminCouponPoliciesPost";

  return useMutation<
    CommonResponseCouponPolicyResId,
    Error,
    {
      params: {
        body: CouponPolicyReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCouponPoliciesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminContentDisplaysGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseContentDisplayResItemList>(
    `/common/api-admin/content-displays`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminContentDisplaysGetQuery = (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysGet"];

  return useQuery<CommonResponseContentDisplayResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminContentDisplaysGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysGet"];

  return useQuery<CommonResponseContentDisplayResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminContentDisplaysPostMutation = async (
  params: {
    body: ContentDisplayReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseContentDisplayResId>(
    `/common/api-admin/content-displays`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminContentDisplaysPostMutation = () => {
  const mutationKey = "CommonApiAdminContentDisplaysPost";

  return useMutation<
    CommonResponseContentDisplayResId,
    Error,
    {
      params: {
        body: ContentDisplayReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminContentDisplaysPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCommonCodesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeResItemList>(
    `/common/api-admin/common-codes`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesGetQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesGet"];

  return useQuery<CommonResponseCommonCodeResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesGet"];

  return useQuery<CommonResponseCommonCodeResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodesPostMutation = async (
  params: {
    body: CommonCodeReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeResId>(
    `/common/api-admin/common-codes`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesPostMutation = () => {
  const mutationKey = "CommonApiAdminCommonCodesPost";

  return useMutation<
    CommonResponseCommonCodeResId,
    Error,
    {
      params: {
        body: CommonCodeReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCommonCodesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminCommonCodeTypesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeTypeResSingleList>(
    `/common/api-admin/common-code-types`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodeTypesGetQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesGet"];

  return useQuery<CommonResponseCommonCodeTypeResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodeTypesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesGet"];

  return useQuery<CommonResponseCommonCodeTypeResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodeTypesPostMutation = async (
  params: {
    body: CommonCodeTypeReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeTypeResId>(
    `/common/api-admin/common-code-types`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodeTypesPostMutation = () => {
  const mutationKey = "CommonApiAdminCommonCodeTypesPost";

  return useMutation<
    CommonResponseCommonCodeTypeResId,
    Error,
    {
      params: {
        body: CommonCodeTypeReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminCommonCodeTypesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const CommonApiAdminApisGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseApiResSingleList>(
    `/common/api-admin/apis`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisGetQuery = (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisGet"];

  return useQuery<CommonResponseApiResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminApisGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisGet"];

  return useQuery<CommonResponseApiResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminApisPostMutation = async (
  params: {
    body: ApiReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseApiResId>(
    `/common/api-admin/apis`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisPostMutation = () => {
  const mutationKey = "CommonApiAdminApisPost";

  return useMutation<
    CommonResponseApiResId,
    Error,
    {
      params: {
        body: ApiReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await CommonApiAdminApisPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResItemList>(
    `/atm/api-admin/atms`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsGet"];

  return useQuery<CommonResponseAtmResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsGet"];

  return useQuery<CommonResponseAtmResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmsPostMutation = async (
  params: {
    body: AtmReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResId>(
    `/atm/api-admin/atms`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmsPost";

  return useMutation<
    CommonResponseAtmResId,
    Error,
    {
      params: {
        body: AtmReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmTypeComponentsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmTypeComponentResItemList>(
    `/atm/api-admin/atm-type-components`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmTypeComponentsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsGet"];

  return useQuery<CommonResponseAtmTypeComponentResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmTypeComponentsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsGet"];

  return useQuery<CommonResponseAtmTypeComponentResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmTypeComponentsPostMutation = async (
  params: {
    body: AtmTypeComponentReqSave[];
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-type-components`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmTypeComponentsPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmTypeComponentsPost";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        body: AtmTypeComponentReqSave[];
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmTypeComponentsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmStatusesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmStatusResSingleList>(
    `/atm/api-admin/atm-statuses`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesGet"];

  return useQuery<CommonResponseAtmStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmStatusesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesGet"];

  return useQuery<CommonResponseAtmStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmStatusesPostMutation = async (
  params: {
    body: AtmStatusReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmStatusResId>(
    `/atm/api-admin/atm-statuses`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmStatusesPost";

  return useMutation<
    CommonResponseAtmStatusResId,
    Error,
    {
      params: {
        body: AtmStatusReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmStatusesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceScheduledPostMutation = async (
  params: {
    body: AtmMaintenanceReqCreateForScheduledMaintenance;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceResId>(
    `/atm/api-admin/atm-maintenance/scheduled`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceScheduledPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceScheduledPost";

  return useMutation<
    CommonResponseAtmMaintenanceResId,
    Error,
    {
      params: {
        body: AtmMaintenanceReqCreateForScheduledMaintenance;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceScheduledPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceOnsitePostMutation = async (
  params: {
    body: AtmMaintenanceReqCreateForOnsiteMaintenance;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceResId>(
    `/atm/api-admin/atm-maintenance/onsite`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceOnsitePostMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceOnsitePost";

  return useMutation<
    CommonResponseAtmMaintenanceResId,
    Error,
    {
      params: {
        body: AtmMaintenanceReqCreateForOnsiteMaintenance;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceOnsitePostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceStatusResSingleList>(
      `/atm/api-admin/atm-maintenance-statuses`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceStatusesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesPostMutation = async (
  params: {
    body: AtmMaintenanceStatusReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceStatusResId>(
    `/atm/api-admin/atm-maintenance-statuses`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceStatusesPost";

  return useMutation<
    CommonResponseAtmMaintenanceStatusResId,
    Error,
    {
      params: {
        body: AtmMaintenanceStatusReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmMaintenanceStatusesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmMaintenanceRequestCategoriesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceRequestCategoryResSingleList>(
      `/atm/api-admin/atm-maintenance-request-categories`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceRequestCategoriesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceRequestCategoriesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceRequestCategoriesPostMutation = async (
  params: {
    body: AtmMaintenanceRequestCategoryReqCreateForManage;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceRequestCategoryResId>(
      `/atm/api-admin/atm-maintenance-request-categories`,
      {
        method: "post",
        data: params.body,
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmMaintenanceRequestCategoriesPost";

  return useMutation<
    CommonResponseAtmMaintenanceRequestCategoryResId,
    Error,
    {
      params: {
        body: AtmMaintenanceRequestCategoryReqCreateForManage;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await AtmApiAdminAtmMaintenanceRequestCategoriesPostMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmComponentPostMutation = async (
  params: {
    body: AtmComponentReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/atm/api-admin/atm-component`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmComponentPost";

  return useMutation<
    CommonResponseObject,
    Error,
    {
      params: {
        body: AtmComponentReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmComponentPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmComponentStocksGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmComponentStockResSingleList>(
      `/atm/api-admin/atm-component-stocks`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksGet"];

  return useQuery<CommonResponseAtmComponentStockResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmComponentStocksGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksGet"];

  return useQuery<CommonResponseAtmComponentStockResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmComponentStocksPostMutation = async (
  params: {
    body: AtmComponentStockReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmComponentStockResId>(
    `/atm/api-admin/atm-component-stocks`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmComponentStocksPost";

  return useMutation<
    CommonResponseAtmComponentStockResId,
    Error,
    {
      params: {
        body: AtmComponentStockReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmComponentStocksPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmCollectionsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionResItemList>(
    `/atm/api-admin/atm-collections`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsGet"];

  return useQuery<CommonResponseAtmCollectionResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItemList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsGet"];

  return useQuery<CommonResponseAtmCollectionResItemList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionsPostMutation = async (
  params: {
    body: AtmCollectionReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionResIdList>(
    `/atm/api-admin/atm-collections`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmCollectionsPost";

  return useMutation<
    CommonResponseAtmCollectionResIdList,
    Error,
    {
      params: {
        body: AtmCollectionReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmCollectionsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AtmApiAdminAtmCollectionStatusesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmCollectionStatusResSingleList>(
      `/atm/api-admin/atm-collection-statuses`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmCollectionStatusesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesGet"];

  return useQuery<CommonResponseAtmCollectionStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionStatusesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesGet"];

  return useQuery<CommonResponseAtmCollectionStatusResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionStatusesPostMutation = async (
  params: {
    body: AtmCollectionStatusReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmCollectionStatusResId>(
    `/atm/api-admin/atm-collection-statuses`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmCollectionStatusesPostMutation = () => {
  const mutationKey = "AtmApiAdminAtmCollectionStatusesPost";

  return useMutation<
    CommonResponseAtmCollectionStatusResId,
    Error,
    {
      params: {
        body: AtmCollectionStatusReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await AtmApiAdminAtmCollectionStatusesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const AdministratorApiAdminAdministratorsRefreshTokenPostMutation =
  async (
    params: {
      body: AdministratorReqRefreshToken;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponseAdministratorResResponseForJwtToken>(
        `/administrator/api-admin/administrators/refresh-token`,
        {
          method: "post",
          data: params.body,
          ...options,
        },
      );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorsRefreshTokenPostMutation =
  () => {
    const mutationKey = "AdministratorApiAdminAdministratorsRefreshTokenPost";

    return useMutation<
      CommonResponseAdministratorResResponseForJwtToken,
      Error,
      {
        params: {
          body: AdministratorReqRefreshToken;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AdministratorApiAdminAdministratorsRefreshTokenPostMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const AdministratorApiAdminAdministratorsLoginPostMutation = async (
  params: {
    body: AdministratorReqLoginForOtp;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAdministratorResResponseForJwtToken>(
      `/administrator/api-admin/administrators/login`,
      {
        method: "post",
        data: params.body,
        ...options,
      },
    );
  return response.data;
};


export const useAdministratorApiAdminAdministratorsLoginPostMutation = () => {
  const mutationKey = "AdministratorApiAdminAdministratorsLoginPost";

  return useMutation<
    CommonResponseAdministratorResResponseForJwtToken,
    Error,
    {
      params: {
        body: AdministratorReqLoginForOtp;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response =
        await AdministratorApiAdminAdministratorsLoginPostMutation(
          configs.params,
          configs.options,
        );
      return response;
    },
    retry: false,
  });
};


export const AdministratorApiAdminAdministratorsAuthenticationNumbersSendPostMutation =
  async (
    params: {
      body: AdministratorReqCreateForAuthenticationNumber;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response = await axiosClient<CommonResponseObject>(
      `/administrator/api-admin/administrators/authentication-numbers/send`,
      {
        method: "post",
        data: params.body,
        ...options,
      },
    );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorsAuthenticationNumbersSendPostMutation =
  () => {
    const mutationKey =
      "AdministratorApiAdminAdministratorsAuthenticationNumbersSendPost";

    return useMutation<
      CommonResponseObject,
      Error,
      {
        params: {
          body: AdministratorReqCreateForAuthenticationNumber;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AdministratorApiAdminAdministratorsAuthenticationNumbersSendPostMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const AdministratorApiAdminAdministratorsAuthenticationNumbersAuthenticatePostMutation =
  async (
    params: {
      body: AdministratorReqCreateForAuthentication;
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponseAdministratorResResponseForAuthentication>(
        `/administrator/api-admin/administrators/authentication-numbers/authenticate`,
        {
          method: "post",
          data: params.body,
          ...options,
        },
      );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorsAuthenticationNumbersAuthenticatePostMutation =
  () => {
    const mutationKey =
      "AdministratorApiAdminAdministratorsAuthenticationNumbersAuthenticatePost";

    return useMutation<
      CommonResponseAdministratorResResponseForAuthentication,
      Error,
      {
        params: {
          body: AdministratorReqCreateForAuthentication;
        };
        options?: AxiosRequestConfig<any>;
      }
    >({
      mutationKey: [mutationKey],
      mutationFn: async (configs) => {
        const response =
          await AdministratorApiAdminAdministratorsAuthenticationNumbersAuthenticatePostMutation(
            configs.params,
            configs.options,
          );
        return response;
      },
      retry: false,
    });
  };


export const StatisticsApiAdminAtmStatisticsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmStatisticsReqFilter>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmStatisticsResItemForStatistics>(
      `/statistics/api-admin/atm-statistics`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useStatisticsApiAdminAtmStatisticsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatisticsReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatisticsResItemForStatistics>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["StatisticsApiAdminAtmStatisticsGet"];

  return useQuery<CommonResponseAtmStatisticsResItemForStatistics>({
    queryKey,
    queryFn: async () => {
      const response = await StatisticsApiAdminAtmStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useStatisticsApiAdminAtmStatisticsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatisticsReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatisticsResItemForStatistics>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["StatisticsApiAdminAtmStatisticsGet"];

  return useQuery<CommonResponseAtmStatisticsResItemForStatistics>({
    queryKey,
    queryFn: async () => {
      const response = await StatisticsApiAdminAtmStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePurchaseResItemWithPage>(
    `/purchase/api-admin/purchases/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePurchaseApiAdminPurchasesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesPageGet"];

  return useQuery<CommonResponsePurchaseResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasesPageGet"];

  return useQuery<CommonResponsePurchaseResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseRewardsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchaseRewardResSingleWithPage>(
      `/purchase/api-admin/purchase-rewards/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchaseRewardsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsPageGet"];

  return useQuery<CommonResponsePurchaseRewardResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseRewardsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseRewardReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseRewardResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseRewardsPageGet"];

  return useQuery<CommonResponsePurchaseRewardResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseRewardsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchasePricePoliciesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchasePricePolicyResSingleWithPage>(
      `/purchase/api-admin/purchase-price-policies/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchasePricePoliciesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesPageGet"];

  return useQuery<CommonResponsePurchasePricePolicyResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchasePricePoliciesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchasePricePolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchasePricePolicyResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchasePricePoliciesPageGet"];

  return useQuery<CommonResponsePurchasePricePolicyResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchasePricePoliciesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePurchaseDeviceModelResSingleWithPage>(
      `/purchase/api-admin/purchase-device-models/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePurchaseApiAdminPurchaseDeviceModelsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsPageGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePurchaseApiAdminPurchaseDeviceModelsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelsPageGet"];

  return useQuery<CommonResponsePurchaseDeviceModelResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PurchaseApiAdminPurchaseDeviceModelsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PurchaseApiAdminPurchaseDeviceModelGradePricesPageGetQuery =
  async (
    params: {
      query?: {
        filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
        pageable?: Partial<Pageable>;
      };
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage>(
        `/purchase/api-admin/purchase-device-model-grade-prices/page`,
        {
          method: "get",
          params: params.query
            ? Object.values(params.query).reduce((acc, row) => {
                return { ...acc, ...row };
              }, {})
            : undefined,

          paramsSerializer: {
            indexes: null,
          },
          ...options,
        },
      );
    return response.data;
  };


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PurchaseApiAdminPurchaseDeviceModelGradePricesPageGet"];

  return useQuery<CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage>(
    {
      queryKey,
      queryFn: async () => {
        const response =
          await PurchaseApiAdminPurchaseDeviceModelGradePricesPageGetQuery(
            params,
            axiosOptions,
          );
        return response;
      },
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1,
      ...queryOptions,
    },
  );
};


export const usePurchaseApiAdminPurchaseDeviceModelGradePricesPageGetLazyQuery =
  (
    params: {
      query?: {
        filter?: Partial<PurchaseDeviceModelGradePriceReqFilter>;
        pageable?: Partial<Pageable>;
      };
    },
    axiosOptions?: AxiosRequestConfig<any>,
    queryOptions?: QueryOptions<CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage>,
  ) => {
    const queryKey = queryOptions?.queryKey
      ? queryOptions?.queryKey
      : ["PurchaseApiAdminPurchaseDeviceModelGradePricesPageGet"];

    return useQuery<CommonResponsePurchaseDeviceModelGradePriceResSingleWithPage>(
      {
        queryKey,
        queryFn: async () => {
          const response =
            await PurchaseApiAdminPurchaseDeviceModelGradePricesPageGetQuery(
              params,
              axiosOptions,
            );
          return response;
        },
        enabled: false,
        retry: false,
        refetchOnWindowFocus: false,
        gcTime: 1,
        ...queryOptions,
      },
    );
  };


export const PartnerApiAdminPartnersPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePartnerResSingleWithPage>(
    `/partner/api-admin/partners/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminPartnersPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersPageGet"];

  return useQuery<CommonResponsePartnerResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnersPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnersPageGet"];

  return useQuery<CommonResponsePartnerResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnersPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminPartnerMembersPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponsePartnerMemberResSingleExFieldWithPage>(
      `/partner/api-admin/partner-members/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const usePartnerApiAdminPartnerMembersPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersPageGet"];

  return useQuery<CommonResponsePartnerMemberResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminPartnerMembersPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<PartnerMemberReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePartnerMemberResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminPartnerMembersPageGet"];

  return useQuery<CommonResponsePartnerMemberResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminPartnerMembersPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const PartnerApiAdminBranchesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseBranchResItemWithPage>(
    `/partner/api-admin/branches/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const usePartnerApiAdminBranchesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesPageGet"];

  return useQuery<CommonResponseBranchResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const usePartnerApiAdminBranchesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<BranchReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseBranchResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["PartnerApiAdminBranchesPageGet"];

  return useQuery<CommonResponseBranchResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await PartnerApiAdminBranchesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionsSubscribeGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<void>(
    `/inspection/api-admin/inspections/subscribe`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsSubscribeGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<void>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsSubscribeGet"];

  return useQuery<void>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsSubscribeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionsSubscribeGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<void>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsSubscribeGet"];

  return useQuery<void>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsSubscribeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseInspectionResItemWithPage>(
    `/inspection/api-admin/inspections/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useInspectionApiAdminInspectionsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsPageGet"];

  return useQuery<CommonResponseInspectionResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionsPageGet"];

  return useQuery<CommonResponseInspectionResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const InspectionApiAdminInspectionProfilesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseInspectionProfileResSingleWithPage>(
      `/inspection/api-admin/inspection-profiles/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useInspectionApiAdminInspectionProfilesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesPageGet"];

  return useQuery<CommonResponseInspectionProfileResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useInspectionApiAdminInspectionProfilesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<InspectionProfileReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseInspectionProfileResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["InspectionApiAdminInspectionProfilesPageGet"];

  return useQuery<CommonResponseInspectionProfileResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await InspectionApiAdminInspectionProfilesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDevicesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceResItemWithPage>(
    `/device/api-admin/devices/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDevicesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesPageGet"];

  return useQuery<CommonResponseDeviceResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDevicesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDevicesPageGet"];

  return useQuery<CommonResponseDeviceResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDevicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceSeriessPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceSeriesResSingleWithPage>(
      `/device/api-admin/device-seriess/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceSeriessPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessPageGet"];

  return useQuery<CommonResponseDeviceSeriesResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceSeriessPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceSeriesReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceSeriesResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceSeriessPageGet"];

  return useQuery<CommonResponseDeviceSeriesResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceSeriessPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceModelsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseDeviceModelResItemWithPage>(
    `/device/api-admin/device-models/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useDeviceApiAdminDeviceModelsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsPageGet"];

  return useQuery<CommonResponseDeviceModelResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceModelsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceModelReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceModelResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceModelsPageGet"];

  return useQuery<CommonResponseDeviceModelResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceModelsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufacturesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceManufactureResSingleWithPage>(
      `/device/api-admin/device-manufactures/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceManufacturesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesPageGet"];

  return useQuery<CommonResponseDeviceManufactureResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufacturesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufacturesPageGet"];

  return useQuery<CommonResponseDeviceManufactureResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufacturesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceManufactureTypesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceManufactureTypeResItemWithPage>(
      `/device/api-admin/device-manufacture-types/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceManufactureTypesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesPageGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceManufactureTypesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceManufactureTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceManufactureTypeResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceManufactureTypesPageGet"];

  return useQuery<CommonResponseDeviceManufactureTypeResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceManufactureTypesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const DeviceApiAdminDeviceDeletionsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseDeviceDeletionResResponseForManageWithPage>(
      `/device/api-admin/device-deletions/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useDeviceApiAdminDeviceDeletionsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResResponseForManageWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsPageGet"];

  return useQuery<CommonResponseDeviceDeletionResResponseForManageWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useDeviceApiAdminDeviceDeletionsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<DeviceDeletionReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseDeviceDeletionResResponseForManageWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["DeviceApiAdminDeviceDeletionsPageGet"];

  return useQuery<CommonResponseDeviceDeletionResResponseForManageWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await DeviceApiAdminDeviceDeletionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminTermsAgreementsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseTermsAgreementResSingleWithPage>(
      `/customer/api-admin/terms-agreements/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCustomerApiAdminTermsAgreementsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsPageGet"];

  return useQuery<CommonResponseTermsAgreementResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminTermsAgreementsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsAgreementReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsAgreementResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminTermsAgreementsPageGet"];

  return useQuery<CommonResponseTermsAgreementResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminTermsAgreementsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CustomerApiAdminEventApplicationsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseEventApplicationResSingleWithPage>(
      `/customer/api-admin/event-applications/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCustomerApiAdminEventApplicationsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsPageGet"];

  return useQuery<CommonResponseEventApplicationResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCustomerApiAdminEventApplicationsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventApplicationReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventApplicationResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CustomerApiAdminEventApplicationsPageGet"];

  return useQuery<CommonResponseEventApplicationResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CustomerApiAdminEventApplicationsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseTermsResSingleWithPage>(
    `/common/api-admin/terms/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminTermsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsPageGet"];

  return useQuery<CommonResponseTermsResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsPageGet"];

  return useQuery<CommonResponseTermsResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminTermsContentsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseTermsContentResSingleWithPage>(
      `/common/api-admin/terms-contents/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminTermsContentsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsPageGet"];

  return useQuery<CommonResponseTermsContentResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminTermsContentsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<TermsContentReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseTermsContentResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminTermsContentsPageGet"];

  return useQuery<CommonResponseTermsContentResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminTermsContentsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminSigungusPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseSigunguResSingleWithPage>(
    `/common/api-admin/sigungus/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminSigungusPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusPageGet"];

  return useQuery<CommonResponseSigunguResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminSigungusPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<SigunguReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseSigunguResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminSigungusPageGet"];

  return useQuery<CommonResponseSigunguResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminSigungusPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminServicesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseServiceSeviceResSingleWithPage>(
      `/common/api-admin/services/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminServicesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesPageGet"];

  return useQuery<CommonResponseServiceSeviceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminServicesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ServiceSeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseServiceSeviceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminServicesPageGet"];

  return useQuery<CommonResponseServiceSeviceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminServicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenusTreeGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseMenuResResponseForMenuTreeList>(
      `/common/api-admin/menus/tree`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminMenusTreeGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResResponseForMenuTreeList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusTreeGet"];

  return useQuery<CommonResponseMenuResResponseForMenuTreeList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusTreeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenusTreeGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResResponseForMenuTreeList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusTreeGet"];

  return useQuery<CommonResponseMenuResResponseForMenuTreeList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusTreeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenusPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuResSingleWithPage>(
    `/common/api-admin/menus/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenusPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusPageGet"];

  return useQuery<CommonResponseMenuResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenusPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<MenuReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusPageGet"];

  return useQuery<CommonResponseMenuResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenusAuthorizedTreeGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseMenuResResponseForMenuTreeList>(
      `/common/api-admin/menus/authorized-tree`,
      {
        method: "get",

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminMenusAuthorizedTreeGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResResponseForMenuTreeList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusAuthorizedTreeGet"];

  return useQuery<CommonResponseMenuResResponseForMenuTreeList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusAuthorizedTreeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenusAuthorizedTreeGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuResResponseForMenuTreeList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenusAuthorizedTreeGet"];

  return useQuery<CommonResponseMenuResResponseForMenuTreeList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenusAuthorizedTreeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenuButtonsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseMenuButtonResSingleWithPage>(
    `/common/api-admin/menu-buttons/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminMenuButtonsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsPageGet"];

  return useQuery<CommonResponseMenuButtonResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenuButtonsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<MenuButtonReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsPageGet"];

  return useQuery<CommonResponseMenuButtonResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminMenuButtonsAuthorizedGetQuery = async (
  params: {
    query?: {
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseMenuButtonResResponseForAuthorizedList>(
      `/common/api-admin/menu-buttons/authorized`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminMenuButtonsAuthorizedGetQuery = (
  params: {
    query?: {
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResResponseForAuthorizedList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsAuthorizedGet"];

  return useQuery<CommonResponseMenuButtonResResponseForAuthorizedList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsAuthorizedGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminMenuButtonsAuthorizedGetLazyQuery = (
  params: {
    query?: {
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseMenuButtonResResponseForAuthorizedList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminMenuButtonsAuthorizedGet"];

  return useQuery<CommonResponseMenuButtonResResponseForAuthorizedList>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminMenuButtonsAuthorizedGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventResSingleWithPage>(
    `/common/api-admin/events/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsPageGet"];

  return useQuery<CommonResponseEventResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventsPageGet"];

  return useQuery<CommonResponseEventResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventTermsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseEventTermsResSingleWithPage>(
    `/common/api-admin/event-terms/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminEventTermsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsPageGet"];

  return useQuery<CommonResponseEventTermsResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventTermsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventTermsReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventTermsResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventTermsPageGet"];

  return useQuery<CommonResponseEventTermsResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventTermsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminEventBenefitsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseEventBenefitResSingleWithPage>(
      `/common/api-admin/event-benefits/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminEventBenefitsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsPageGet"];

  return useQuery<CommonResponseEventBenefitResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminEventBenefitsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<EventBenefitReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseEventBenefitResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminEventBenefitsPageGet"];

  return useQuery<CommonResponseEventBenefitResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminEventBenefitsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCouponPoliciesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseCouponPolicyResSingleWithPage>(
      `/common/api-admin/coupon-policies/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminCouponPoliciesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesPageGet"];

  return useQuery<CommonResponseCouponPolicyResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCouponPoliciesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CouponPolicyReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCouponPolicyResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCouponPoliciesPageGet"];

  return useQuery<CommonResponseCouponPolicyResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCouponPoliciesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminContentDisplaysPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseContentDisplayResItemWithPage>(
      `/common/api-admin/content-displays/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminContentDisplaysPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysPageGet"];

  return useQuery<CommonResponseContentDisplayResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminContentDisplaysPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ContentDisplayReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseContentDisplayResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminContentDisplaysPageGet"];

  return useQuery<CommonResponseContentDisplayResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminContentDisplaysPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseCommonCodeResSingleWithPage>(
    `/common/api-admin/common-codes/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminCommonCodesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesPageGet"];

  return useQuery<CommonResponseCommonCodeResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodesPageGet"];

  return useQuery<CommonResponseCommonCodeResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminCommonCodeTypesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseCommonCodeTypeResSingleWithPage>(
      `/common/api-admin/common-code-types/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useCommonApiAdminCommonCodeTypesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesPageGet"];

  return useQuery<CommonResponseCommonCodeTypeResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminCommonCodeTypesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<CommonCodeTypeReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseCommonCodeTypeResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminCommonCodeTypesPageGet"];

  return useQuery<CommonResponseCommonCodeTypeResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminCommonCodeTypesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const CommonApiAdminApisPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseApiResSingleWithPage>(
    `/common/api-admin/apis/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useCommonApiAdminApisPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisPageGet"];

  return useQuery<CommonResponseApiResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useCommonApiAdminApisPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<ApiReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseApiResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["CommonApiAdminApisPageGet"];

  return useQuery<CommonResponseApiResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await CommonApiAdminApisPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmsStatisticsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForStatistics>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmResResponseForStatisticsList>(
      `/atm/api-admin/atms/statistics`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmsStatisticsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForStatistics>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResResponseForStatisticsList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsStatisticsGet"];

  return useQuery<CommonResponseAtmResResponseForStatisticsList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmsStatisticsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForStatistics>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResResponseForStatisticsList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsStatisticsGet"];

  return useQuery<CommonResponseAtmResResponseForStatisticsList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmResSingleExFieldWithPage>(
    `/atm/api-admin/atms/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsPageGet"];

  return useQuery<CommonResponseAtmResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsPageGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsPageGet"];

  return useQuery<CommonResponseAtmResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsPageGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmsAtmStatusStatisticsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForDailyAtmStatus>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmResResponseForDailyAtmStatusWithPage>(
      `/atm/api-admin/atms/atm-status-statistics`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmsAtmStatusStatisticsGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForDailyAtmStatus>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResResponseForDailyAtmStatusWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsAtmStatusStatisticsGet"];

  return useQuery<CommonResponseAtmResResponseForDailyAtmStatusWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsAtmStatusStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmsAtmStatusStatisticsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmReqFilterForDailyAtmStatus>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmResResponseForDailyAtmStatusWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmsAtmStatusStatisticsGet"];

  return useQuery<CommonResponseAtmResResponseForDailyAtmStatusWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmsAtmStatusStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmTypeComponentsUnregisteredGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmTypeComponentResResponseForUnregisterList>(
      `/atm/api-admin/atm-type-components/unregistered`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmTypeComponentsUnregisteredGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResResponseForUnregisterList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsUnregisteredGet"];

  return useQuery<CommonResponseAtmTypeComponentResResponseForUnregisterList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsUnregisteredGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmTypeComponentsUnregisteredGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResResponseForUnregisterList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsUnregisteredGet"];

  return useQuery<CommonResponseAtmTypeComponentResResponseForUnregisterList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsUnregisteredGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmTypeComponentsRegisteredGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmTypeComponentResResponseForRegisterList>(
      `/atm/api-admin/atm-type-components/registered`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmTypeComponentsRegisteredGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResResponseForRegisterList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsRegisteredGet"];

  return useQuery<CommonResponseAtmTypeComponentResResponseForRegisterList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsRegisteredGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmTypeComponentsRegisteredGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmTypeComponentReqFilter>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmTypeComponentResResponseForRegisterList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmTypeComponentsRegisteredGet"];

  return useQuery<CommonResponseAtmTypeComponentResResponseForRegisterList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmTypeComponentsRegisteredGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmStatusesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmStatusResSingleWithPage>(
    `/atm/api-admin/atm-statuses/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmStatusesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesPageGet"];

  return useQuery<CommonResponseAtmStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmStatusesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmStatusesPageGet"];

  return useQuery<CommonResponseAtmStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmMaintenanceResSingleList>(
    `/atm/api-admin/atm-maintenance`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceGet"];

  return useQuery<CommonResponseAtmMaintenanceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceGet"];

  return useQuery<CommonResponseAtmMaintenanceResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenancePageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceResSingleWithPage>(
      `/atm/api-admin/atm-maintenance/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenancePageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenancePageGet"];

  return useQuery<CommonResponseAtmMaintenanceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenancePageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenancePageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenancePageGet"];

  return useQuery<CommonResponseAtmMaintenanceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenancePageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceStatusesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceStatusResSingleWithPage>(
      `/atm/api-admin/atm-maintenance-statuses/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceStatusesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesPageGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmMaintenanceStatusesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceStatusesPageGet"];

  return useQuery<CommonResponseAtmMaintenanceStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmMaintenanceStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmMaintenanceRequestCategoriesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage>(
      `/atm/api-admin/atm-maintenance-request-categories/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesPageGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage>(
    {
      queryKey,
      queryFn: async () => {
        const response =
          await AtmApiAdminAtmMaintenanceRequestCategoriesPageGetQuery(
            params,
            axiosOptions,
          );
        return response;
      },
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1,
      ...queryOptions,
    },
  );
};


export const useAtmApiAdminAtmMaintenanceRequestCategoriesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmMaintenanceRequestCategoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmMaintenanceRequestCategoriesPageGet"];

  return useQuery<CommonResponseAtmMaintenanceRequestCategoryResSingleWithPage>(
    {
      queryKey,
      queryFn: async () => {
        const response =
          await AtmApiAdminAtmMaintenanceRequestCategoriesPageGetQuery(
            params,
            axiosOptions,
          );
        return response;
      },
      enabled: false,
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1,
      ...queryOptions,
    },
  );
};


export const AtmApiAdminAtmComponentStocksPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmComponentStockResSingleExFieldWithPage>(
      `/atm/api-admin/atm-component-stocks/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmComponentStocksPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksPageGet"];

  return useQuery<CommonResponseAtmComponentStockResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmComponentStocksPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmComponentStockReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmComponentStockResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmComponentStocksPageGet"];

  return useQuery<CommonResponseAtmComponentStockResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmComponentStocksPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmCollectionResItemWithPage>(
      `/atm/api-admin/atm-collections/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmCollectionsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsPageGet"];

  return useQuery<CommonResponseAtmCollectionResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionResItemWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionsPageGet"];

  return useQuery<CommonResponseAtmCollectionResItemWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmCollectionStatusesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmCollectionStatusResSingleWithPage>(
      `/atm/api-admin/atm-collection-statuses/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmCollectionStatusesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesPageGet"];

  return useQuery<CommonResponseAtmCollectionStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmCollectionStatusesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmCollectionStatusReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmCollectionStatusResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmCollectionStatusesPageGet"];

  return useQuery<CommonResponseAtmCollectionStatusResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmCollectionStatusesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmChangedHistoriesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmChangedHistoryResSingleList>(
      `/atm/api-admin/atm-changed-histories`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmChangedHistoriesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmChangedHistoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmChangedHistoriesGet"];

  return useQuery<CommonResponseAtmChangedHistoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmChangedHistoriesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmChangedHistoriesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmChangedHistoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmChangedHistoriesGet"];

  return useQuery<CommonResponseAtmChangedHistoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmChangedHistoriesGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmChangedHistoriesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmChangedHistoryResSingleWithPage>(
      `/atm/api-admin/atm-changed-histories/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmChangedHistoriesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmChangedHistoryResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmChangedHistoriesPageGet"];

  return useQuery<CommonResponseAtmChangedHistoryResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmChangedHistoriesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmChangedHistoriesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmChangedHistoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmChangedHistoryResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmChangedHistoriesPageGet"];

  return useQuery<CommonResponseAtmChangedHistoryResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmChangedHistoriesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmAcceptanceDevicesIdGetQuery = async (
  params: {
    path: {
      id: number;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAtmAcceptanceDeviceResItem>(
    `/atm/api-admin/atm-acceptance-devices/${params.path.id}`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAtmApiAdminAtmAcceptanceDevicesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmAcceptanceDeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmAcceptanceDevicesIdGet"];

  return useQuery<CommonResponseAtmAcceptanceDeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmAcceptanceDevicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmAcceptanceDevicesIdGetLazyQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmAcceptanceDeviceResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmAcceptanceDevicesIdGet"];

  return useQuery<CommonResponseAtmAcceptanceDeviceResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmAcceptanceDevicesIdGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AtmApiAdminAtmAcceptanceDevicesPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AtmAcceptanceDeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAtmAcceptanceDeviceResSingleWithPage>(
      `/atm/api-admin/atm-acceptance-devices/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAtmApiAdminAtmAcceptanceDevicesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AtmAcceptanceDeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmAcceptanceDeviceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmAcceptanceDevicesPageGet"];

  return useQuery<CommonResponseAtmAcceptanceDeviceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmAcceptanceDevicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAtmApiAdminAtmAcceptanceDevicesPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AtmAcceptanceDeviceReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAtmAcceptanceDeviceResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AtmApiAdminAtmAcceptanceDevicesPageGet"];

  return useQuery<CommonResponseAtmAcceptanceDeviceResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AtmApiAdminAtmAcceptanceDevicesPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AdministratorApiAdminAdministratorsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AdministratorReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAdministratorResSingleExFieldWithPage>(
      `/administrator/api-admin/administrators/page`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAdministratorApiAdminAdministratorsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AdministratorReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsPageGet"];

  return useQuery<CommonResponseAdministratorResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AdministratorReqFilterForManage>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResSingleExFieldWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsPageGet"];

  return useQuery<CommonResponseAdministratorResSingleExFieldWithPage>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AdministratorApiAdminAdministratorsMeGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseAdministratorResItem>(
    `/administrator/api-admin/administrators/me`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useAdministratorApiAdminAdministratorsMeGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsMeGet"];

  return useQuery<CommonResponseAdministratorResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsMeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorsMeGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorsMeGet"];

  return useQuery<CommonResponseAdministratorResItem>({
    queryKey,
    queryFn: async () => {
      const response = await AdministratorApiAdminAdministratorsMeGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AdministratorApiAdminAdministratorLoginHistoriesGetQuery = async (
  params: {
    query?: {
      filter?: Partial<AdministratorLoginHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response =
    await axiosClient<CommonResponseAdministratorLoginHistoryResSingleList>(
      `/administrator/api-admin/administrator-login-histories`,
      {
        method: "get",
        params: params.query
          ? Object.values(params.query).reduce((acc, row) => {
              return { ...acc, ...row };
            }, {})
          : undefined,

        paramsSerializer: {
          indexes: null,
        },
        ...options,
      },
    );
  return response.data;
};


export const useAdministratorApiAdminAdministratorLoginHistoriesGetQuery = (
  params: {
    query?: {
      filter?: Partial<AdministratorLoginHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorLoginHistoriesGet"];

  return useQuery<CommonResponseAdministratorLoginHistoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response =
        await AdministratorApiAdminAdministratorLoginHistoriesGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorLoginHistoriesGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<AdministratorLoginHistoryReqFilter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResSingleList>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorLoginHistoriesGet"];

  return useQuery<CommonResponseAdministratorLoginHistoryResSingleList>({
    queryKey,
    queryFn: async () => {
      const response =
        await AdministratorApiAdminAdministratorLoginHistoriesGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const AdministratorApiAdminAdministratorLoginHistoriesIdGetQuery =
  async (
    params: {
      path: {
        id: number;
      };
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponseAdministratorLoginHistoryResItem>(
        `/administrator/api-admin/administrator-login-histories/${params.path.id}`,
        {
          method: "get",

          paramsSerializer: {
            indexes: null,
          },
          ...options,
        },
      );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorLoginHistoriesIdGetQuery = (
  params: {
    path: {
      id: number;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorLoginHistoriesIdGet"];

  return useQuery<CommonResponseAdministratorLoginHistoryResItem>({
    queryKey,
    queryFn: async () => {
      const response =
        await AdministratorApiAdminAdministratorLoginHistoriesIdGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorLoginHistoriesIdGetLazyQuery =
  (
    params: {
      path: {
        id: number;
      };
    },
    axiosOptions?: AxiosRequestConfig<any>,
    queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResItem>,
  ) => {
    const queryKey = queryOptions?.queryKey
      ? queryOptions?.queryKey
      : ["AdministratorApiAdminAdministratorLoginHistoriesIdGet"];

    return useQuery<CommonResponseAdministratorLoginHistoryResItem>({
      queryKey,
      queryFn: async () => {
        const response =
          await AdministratorApiAdminAdministratorLoginHistoriesIdGetQuery(
            params,
            axiosOptions,
          );
        return response;
      },
      enabled: false,
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1,
      ...queryOptions,
    });
  };


export const AdministratorApiAdminAdministratorLoginHistoriesPageGetQuery =
  async (
    params: {
      query?: {
        filter?: Partial<AdministratorLoginHistoryReqFilter>;
        pageable?: Partial<Pageable>;
      };
    },
    options?: AxiosRequestConfig<any>,
  ) => {
    const response =
      await axiosClient<CommonResponseAdministratorLoginHistoryResSingleWithPage>(
        `/administrator/api-admin/administrator-login-histories/page`,
        {
          method: "get",
          params: params.query
            ? Object.values(params.query).reduce((acc, row) => {
                return { ...acc, ...row };
              }, {})
            : undefined,

          paramsSerializer: {
            indexes: null,
          },
          ...options,
        },
      );
    return response.data;
  };


export const useAdministratorApiAdminAdministratorLoginHistoriesPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<AdministratorLoginHistoryReqFilter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResSingleWithPage>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["AdministratorApiAdminAdministratorLoginHistoriesPageGet"];

  return useQuery<CommonResponseAdministratorLoginHistoryResSingleWithPage>({
    queryKey,
    queryFn: async () => {
      const response =
        await AdministratorApiAdminAdministratorLoginHistoriesPageGetQuery(
          params,
          axiosOptions,
        );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useAdministratorApiAdminAdministratorLoginHistoriesPageGetLazyQuery =
  (
    params: {
      query?: {
        filter?: Partial<AdministratorLoginHistoryReqFilter>;
        pageable?: Partial<Pageable>;
      };
    },
    axiosOptions?: AxiosRequestConfig<any>,
    queryOptions?: QueryOptions<CommonResponseAdministratorLoginHistoryResSingleWithPage>,
  ) => {
    const queryKey = queryOptions?.queryKey
      ? queryOptions?.queryKey
      : ["AdministratorApiAdminAdministratorLoginHistoriesPageGet"];

    return useQuery<CommonResponseAdministratorLoginHistoryResSingleWithPage>({
      queryKey,
      queryFn: async () => {
        const response =
          await AdministratorApiAdminAdministratorLoginHistoriesPageGetQuery(
            params,
            axiosOptions,
          );
        return response;
      },
      enabled: false,
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1,
      ...queryOptions,
    });
  };
