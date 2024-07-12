
import axiosClient from '@libs/axiosClient';
import { useQuery, useMutation, QueryOptions } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
const isLoading: {
  [key: string]: boolean;
} = {};

const apiResponseCache: {
  [key: string]: any;
} = {};
      

export type CommonResponseObject = {
  code?: string;

  message?: string;

  data?: any;
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


export type FileReqCreate = {
  // 파일 분류
  namespace?: string;

  file: number;

  // 파일 이름
  objectName?: string;
};


export type FileResIdExField = {
  // 파일 아이디
  id?: string;

  // 파일 URL
  fileUrl?: string;

  // 파일 분류
  namespace?: string;
};


export type CommonResponseFileResIdExField = {
  code?: string;

  message?: string;

  data?: FileResIdExField;
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


export type CommonResponseFileResItem = {
  code?: string;

  message?: string;

  data?: FileResItem;
};


export const FileApiAdminFilesIdCompletePutMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/file/api-admin/files/${params.path.id}/complete`,
    {
      method: "put",

      ...options,
    },
  );
  return response.data;
};


export const useFileApiAdminFilesIdCompletePutMutation = () => {
  const mutationKey = "FileApiAdminFilesIdCompletePut";

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
      const response = await FileApiAdminFilesIdCompletePutMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const FileApiAdminFilesPostMutation = async (
  params: {
    body: FileReqCreate;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseFileResIdExField>(
    `/file/api-admin/files`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useFileApiAdminFilesPostMutation = () => {
  const mutationKey = "FileApiAdminFilesPost";

  return useMutation<
    CommonResponseFileResIdExField,
    Error,
    {
      params: {
        body: FileReqCreate;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await FileApiAdminFilesPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const FileApiAdminFilesIdGetQuery = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseFileResItem>(
    `/file/api-admin/files/${params.path.id}`,
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


export const useFileApiAdminFilesIdGetQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseFileResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["FileApiAdminFilesIdGet"];

  return useQuery<CommonResponseFileResItem>({
    queryKey,
    queryFn: async () => {
      const response = await FileApiAdminFilesIdGetQuery(params, axiosOptions);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useFileApiAdminFilesIdGetLazyQuery = (
  params: {
    path: {
      id: string;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseFileResItem>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["FileApiAdminFilesIdGet"];

  return useQuery<CommonResponseFileResItem>({
    queryKey,
    queryFn: async () => {
      const response = await FileApiAdminFilesIdGetQuery(params, axiosOptions);
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const FileApiAdminFilesIdDeleteMutation = async (
  params: {
    path: {
      id: string;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/file/api-admin/files/${params.path.id}`,
    {
      method: "delete",

      ...options,
    },
  );
  return response.data;
};


export const useFileApiAdminFilesIdDeleteMutation = () => {
  const mutationKey = "FileApiAdminFilesIdDelete";

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
      const response = await FileApiAdminFilesIdDeleteMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};
