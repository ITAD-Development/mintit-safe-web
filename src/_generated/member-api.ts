
import axiosClient from '@libs/axiosClient';
import { useQuery, useMutation, QueryOptions } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
const isLoading: {
  [key: string]: boolean;
} = {};

const apiResponseCache: {
  [key: string]: any;
} = {};
      

export type Update = {
  // 회원 아이디
  id?: number;
};


export type CommonResponseId = {
  code?: string;

  message?: string;

  data?: Id;
};


export type Id = {
  // 회원 아이디
  id?: string;
};


export type Result = {
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


export type SmartVisionImage = {
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


export type Filter = {
  // 채널코드
  channelCode?: string;

  // 메뉴코드
  menuCode?: string;

  // 본인인증 방식
  authType?: string;

  // 본인인증 종류
  popupGubun?: string;

  // 페이지 구분
  customize?: string;

  // 성별
  gender?: string;

  // 본인인증 성공 페이지 URL
  successRedirectUrl?: string;

  // 본인인증 실패 페이지 URL
  failRedirectUrl?: string;

  // 알림톡 전송 전화번호
  mobileNum?: string;

  id?: number;

  passIdentificationStatus?: PassIdentificationStatusCreate[];
};


export type PassIdentificationStatusCreate = {};


export type CommonResponseObject = {
  code?: string;

  message?: string;

  data?: any;
};


export type Create = {
  id?: string;

  name?: string;

  ci?: string;

  mobilePhoneNumber?: string;

  email?: string;

  birthday?: string;

  gender?: string;

  foreignYn?: string;

  nameSha?: string;

  mobilePhoneNumberSha?: string;

  emailSha?: string;

  cipherKeyId?: string;

  status?: string;

  passIdentification?: Create;
};


export type CommonResponseResponseToken = {
  code?: string;

  message?: string;

  data?: ResponseToken;
};


export type ResponseToken = {
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

  passIdentificationYn?: string;
};


export type Sort = {
  sort?: string[];
};


export type CommonResponseListSingle = {
  code?: string;

  message?: string;

  data?: Single[];
};


export type Single = {
  // 회원 아이디
  id?: string;

  // 이름 (Enc)
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 휴대폰번호 (Enc)
  mobilePhoneNumber?: string;

  // 이메일 (Enc)
  email?: string;

  // Ci (Enc)
  ci?: string;

  // 생년월일
  birthday?: Date;

  // 성별 M / W / U : Unknown
  gender?: string;

  // 외국인 여부 Y/N
  foreignYn?: string;

  // 이름 (Hahsed)
  nameSha?: string;

  // 휴대폰번호 (Hahsed)
  mobilePhoneNumberSha?: string;

  // 이메일 (Hahsed)
  emailSha?: string;

  // 암호화 키 아이디 (co_cipher_key)
  cipherKeyId?: string;

  // P : Pass 인증 고객 / C : Customer(판매 고객) / M : MINTIT 회원
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


export type CommonResponseItem = {
  code?: string;

  message?: string;

  data?: Item;
};


export type Item = {
  // 회원 아이디
  id?: string;

  // 이름 (Enc)
  name?: string;

  // 서비스 아이디
  serviceId?: string;

  // 휴대폰번호 (Enc)
  mobilePhoneNumber?: string;

  // 이메일 (Enc)
  email?: string;

  // Ci (Enc)
  ci?: string;

  // 생년월일
  birthday?: Date;

  // 성별 M / W / U : Unknown
  gender?: string;

  // 외국인 여부 Y/N
  foreignYn?: string;

  // 이름 (Hahsed)
  nameSha?: string;

  // 휴대폰번호 (Hahsed)
  mobilePhoneNumberSha?: string;

  // 이메일 (Hahsed)
  emailSha?: string;

  // 암호화 키 아이디 (co_cipher_key)
  cipherKeyId?: string;

  // P : Pass 인증 고객 / C : Customer(판매 고객) / M : MINTIT 회원
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


export type Pageable = {
  page?: number;

  size?: number;

  sort?: string[];
};


export type CommonResponsePageSingle = {
  code?: string;

  message?: string;

  data?: PageSingle;
};


export type PageSingle = {
  totalPages?: number;

  totalElements?: number;

  size?: number;

  content?: Single[];

  number?: number;

  sort?: SortObject;

  numberOfElements?: number;

  pageable?: PageableObject;

  first?: boolean;

  last?: boolean;

  empty?: boolean;
};


export type PageableObject = {
  offset?: number;

  sort?: SortObject;

  paged?: boolean;

  unpaged?: boolean;

  pageNumber?: number;

  pageSize?: number;
};


export type SortObject = {
  empty?: boolean;

  unsorted?: boolean;

  sorted?: boolean;
};


export type CommonResponseResponseForJwtToken = {
  code?: string;

  message?: string;

  data?: ResponseForJwtToken;
};


export type ResponseForJwtToken = {
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


export type CommonResponseListItem = {
  code?: string;

  message?: string;

  data?: Item[];
};


export const MemberApiAdminMembersIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseItem>(
    `/member/api-admin/members/${params.path.id}`,
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


export const useMemberApiAdminMembersIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersIdGet"];

  return useQuery<CommonResponseItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersIdGetQuery(
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


export const useMemberApiAdminMembersIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersIdGet"];

  return useQuery<CommonResponseItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersIdGetQuery(
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


export const MemberApiAdminMembersIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: Update;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseId>(
    `/member/api-admin/members/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMembersIdPutMutation = () => {
  const mutationKey = "MemberApiAdminMembersIdPut";

  return useMutation<
    CommonResponseId,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: Update;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await MemberApiAdminMembersIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMembersIdDeleteMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/member/api-admin/members/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMembersIdDeleteMutation = () => {
  const mutationKey = "MemberApiAdminMembersIdDelete";

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
      const response = await MemberApiAdminMembersIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMemberCengoldsIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseItem>(
    `/member/api-admin/member-cengolds/${params.path.id}`,
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


export const useMemberApiAdminMemberCengoldsIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsIdGet"];

  return useQuery<CommonResponseItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsIdGetQuery(
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


export const useMemberApiAdminMemberCengoldsIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsIdGet"];

  return useQuery<CommonResponseItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsIdGetQuery(
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


export const MemberApiAdminMemberCengoldsIdPutMutation = async (
  params: {
    path: {
      id: string;
    };

    body: Update;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseId>(
    `/member/api-admin/member-cengolds/${params.path.id}`,
    {
      method: "put",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMemberCengoldsIdPutMutation = () => {
  const mutationKey = "MemberApiAdminMemberCengoldsIdPut";

  return useMutation<
    CommonResponseId,
    Error,
    {
      params: {
        path: {
          id: string;
        };

        body: Update;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await MemberApiAdminMemberCengoldsIdPutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMemberCengoldsIdDeleteMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/member/api-admin/member-cengolds/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMemberCengoldsIdDeleteMutation = () => {
  const mutationKey = "MemberApiAdminMemberCengoldsIdDelete";

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
      const response = await MemberApiAdminMemberCengoldsIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMembersGetQuery = async (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseListSingle>(
    `/member/api-admin/members`,
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


export const useMemberApiAdminMembersGetQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersGet"];

  return useQuery<CommonResponseListSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersGetQuery(
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


export const useMemberApiAdminMembersGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersGet"];

  return useQuery<CommonResponseListSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersGetQuery(
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


export const MemberApiAdminMembersPostMutation = async (
  params: {
    body: Create;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseId>(
    `/member/api-admin/members`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMembersPostMutation = () => {
  const mutationKey = "MemberApiAdminMembersPost";

  return useMutation<
    CommonResponseId,
    Error,
    {
      params: {
        body: Create;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await MemberApiAdminMembersPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMemberCengoldsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseListSingle>(
    `/member/api-admin/member-cengolds`,
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


export const useMemberApiAdminMemberCengoldsGetQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsGet"];

  return useQuery<CommonResponseListSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsGetQuery(
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


export const useMemberApiAdminMemberCengoldsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      sort?: Partial<Sort>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsGet"];

  return useQuery<CommonResponseListSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsGetQuery(
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


export const MemberApiAdminMemberCengoldsPostMutation = async (
  params: {
    body: Create;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseId>(
    `/member/api-admin/member-cengolds`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useMemberApiAdminMemberCengoldsPostMutation = () => {
  const mutationKey = "MemberApiAdminMemberCengoldsPost";

  return useMutation<
    CommonResponseId,
    Error,
    {
      params: {
        body: Create;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await MemberApiAdminMemberCengoldsPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const MemberApiAdminMembersTokenMemberIdGetQuery = async (
  params: {
    path: {
      memberId: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseResponseForJwtToken>(
    `/member/api-admin/members/token/${params.path.memberId}`,
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


export const useMemberApiAdminMembersTokenMemberIdGetQuery = (
  params: {
    path: {
      memberId: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseResponseForJwtToken>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersTokenMemberIdGet"];

  return useQuery<CommonResponseResponseForJwtToken>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersTokenMemberIdGetQuery(
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


export const useMemberApiAdminMembersTokenMemberIdGetLazyQuery = (
  params: {
    path: {
      memberId: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseResponseForJwtToken>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersTokenMemberIdGet"];

  return useQuery<CommonResponseResponseForJwtToken>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersTokenMemberIdGetQuery(
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


export const MemberApiAdminMembersPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePageSingle>(
    `/member/api-admin/members/page`,
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


export const useMemberApiAdminMembersPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePageSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersPageGet"];

  return useQuery<CommonResponsePageSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersPageGetQuery(
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


export const useMemberApiAdminMembersPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePageSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersPageGet"];

  return useQuery<CommonResponsePageSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersPageGetQuery(
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


export const MemberApiAdminMembersListIdGetQuery = async (
  params: {
    path: {
      id: string[];
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseListItem>(
    `/member/api-admin/members/list/${params.path.id}`,
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


export const useMemberApiAdminMembersListIdGetQuery = (
  params: {
    path: {
      id: string[];
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersListIdGet"];

  return useQuery<CommonResponseListItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersListIdGetQuery(
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


export const useMemberApiAdminMembersListIdGetLazyQuery = (
  params: {
    path: {
      id: string[];
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMembersListIdGet"];

  return useQuery<CommonResponseListItem>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMembersListIdGetQuery(
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


export const MemberApiAdminMemberCengoldsPageGetQuery = async (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponsePageSingle>(
    `/member/api-admin/member-cengolds/page`,
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


export const useMemberApiAdminMemberCengoldsPageGetQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePageSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsPageGet"];

  return useQuery<CommonResponsePageSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsPageGetQuery(
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


export const useMemberApiAdminMemberCengoldsPageGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<Filter>;
      pageable?: Partial<Pageable>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponsePageSingle>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["MemberApiAdminMemberCengoldsPageGet"];

  return useQuery<CommonResponsePageSingle>({
    queryKey,
    queryFn: async () => {
      const response = await MemberApiAdminMemberCengoldsPageGetQuery(
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
