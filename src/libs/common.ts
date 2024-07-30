import dayjs from "dayjs";
import "dayjs/plugin/utc";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// 서버로 부터 받은 utc를 local로 변환
export const getLocalFromUtc = (
  date: string | Date | undefined,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  if (date === undefined) return "";

  return dayjs
    .utc(date || new Date(), format)
    .local()
    .format(format);
};

// local time 을 서버로 보내기 위해 utc로 변환
export const getUtcFromLocal = (
  date: string | Date | undefined,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  return dayjs(date || new Date())
    .utc()
    .format(format);
};

// 초 차이 계산, MM:SS 표기
export const getDiffDate = (date1: string | Date, date2: string | Date) => {
  const diff = dayjs(date1).diff(dayjs(date2), "second");
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// 유효시간으로 부터 남은 시간 초 차이 계산, MM:SS 표기
export const getRemainTime = (date: string | Date, validTime: number) => {
  const diff = dayjs(date).add(validTime, "second").diff(dayjs(), "second");
  if (diff < 0) return "00:00";

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const isValidDate = (dateStr: string): boolean => {
  // YYYY-MM-DD 형식을 정규 표현식으로 검사합니다.
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) {
    return false;
  }

  // dayjs를 사용하여 유효한 날짜인지 검사합니다.
  const date = dayjs(dateStr, "YYYY-MM-DD", true);
  return date.isValid();
};

export const formatNumber = (
  value: number,
  locale: string = "en-US",
  options?: Intl.NumberFormatOptions
): string => {
  return new Intl.NumberFormat(locale, options).format(value);
};
