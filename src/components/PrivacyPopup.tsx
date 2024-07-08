import React from "react";
import usePopupStore from "../stores/usePopupStore";
import Popup from "./Popup";

const PrivacyPopup: React.FC = () => {
  return (
    <Popup
      onClose={() => {
        usePopupStore.getState().closePrivacy();
      }}
    >
      <div className="px-6 flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              민팃 주식회사(이하 "회사"라 한다)는 이용자의 개인정보보호를 매우
              중요시하며, 이용자가 민팃 주식회사 홈페이지서비스 및 모바일
              앱서비스(이하 "서비스"라 한다)를 이용함과 동시에 온라인 상에서
              회사에 제공한 개인정보가 보호받을 수 있도록 최선을 다하고
              있습니다. 이에 회사는 『개인정보보호법』 등 관련 법규를 준수하기
              위해 개인정보처리방침(이하 “본 방침”)을 제정하고 이를 준수하고
              있습니다.
            </div>
          </div>
          <div className="self-stretch h-px flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch h-px bg-zinc-100" />
            <div className="w-[104px] h-px bg-teal-400" />
          </div>
          <div className="self-stretch rounded-lg flex-col justify-start items-center gap-3.5 flex">
            <div className="self-stretch text-center text-emerald-800 text-lg font-extrabold font-['SUIT'] leading-normal">
              주요 개인정보 처리 표시(라벨링)
            </div>
            <div className="self-stretch px-3 py-6 bg-slate-100 rounded-lg flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch justify-center items-start gap-1.5 inline-flex">
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    개인정보   수집
                  </div>
                </div>
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    개인정보의   처리 목적
                  </div>
                </div>
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    개인정보의   보유기간
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-1.5 inline-flex">
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    개인정보   처리위탁
                  </div>
                </div>
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    개인정보   제3자제공
                  </div>
                </div>
                <div className="w-28 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="w-24 h-24 justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24"
                      src="https://via.placeholder.com/96x96"
                    />
                  </div>
                  <div className="self-stretch text-center text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    고충처리부서
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-1 inline-flex">
              <div className="text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                ※
              </div>
              <div className="grow shrink basis-0 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                클릭하시면 세부 사항을 확인할 수 있으며, 자세한 내용은 아래의
                개인정보 처리방침을 확인하시기 바랍니다.
              </div>
            </div>
          </div>
          <div className="self-stretch h-px flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch h-px bg-zinc-100" />
            <div className="w-[104px] h-px bg-teal-400" />
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="w-[372px] text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
            </div>
            <div className="self-stretch px-5 py-6 bg-slate-100 rounded-lg flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  1.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  총칙
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  2.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  수집하는 개인정보 항목 및 수집 방법
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  3.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보의 수집 및 이용 목적
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  4.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보 제3자 제공
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  5.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보의 추가적인 이용∙제공 판단기준
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  6.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  만 14세 미만 아동의 개인정보보호
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  7.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보 수탁업체 및 위탁업무 내용
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  8.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보의 처리, 보유기간 및 파기
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  9.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보 자동수집 장치의 설치, 운영 및 거부에 관한 <br />
                  사항
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  10.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  비밀유지
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  11.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  링크사이트
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  12.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  이용자의 권리 및 행사 방법
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  13.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보의 안전성 확보조치
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  14.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  이용자의 의견 수렴 및 불만 처리
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  15.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보 보호책임자 및 보호담당자
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-5 text-emerald-800 text-sm font-semibold font-['SUIT'] leading-[18px]">
                  16.
                </div>
                <div className="grow shrink basis-0 text-emerald-800 text-sm font-semibold font-['SUIT'] underline leading-[18px]">
                  개인정보처리방침의 변경에 따른 고지
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              01. 총칙
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch h-60 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-60 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                회사는 본 방침을 통하여 이용자가 제공하는 개인정보가 어떠한
                용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한
                조치가 취해지고 있는지 알려 드리며, 홈페이지 첫 화면에
                공개함으로써 이용자가 본 방침을 언제나 용이하게 열람 가능하도록
                조치하고 있습니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                본 방침은 관련 법률 및 지침의 변경, 회사 내부 운영 방침의 변경
                등으로 인하여 수시로 변경될 수 있으며, 이에 따른 지속적인 개선을
                위하여 필요한 절차를 규정하고 있습니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                본 방침을 개정하는 경우 회사는 그 변경사항에 대해 즉시
                홈페이지에 게시하여 이용자들이 확인 가능하도록 하고 있습니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                이용자들께서는 본 사이트 방문 시 개인정보처리방침을 수시로
                확인하여 주시기 바랍니다.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              02. 수집하는 개인정보 항목 및 수집 방법
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  회사 홈페이지 대부분의 서비스는 별도의 개인정보 등록절차 없이
                  자유롭게 접근할 수 있습니다. 다만, 모바일 서비스는 보다 향상된
                  양질의 서비스를 제공하기 위하여 최소한의 개인정보를 처리하고
                  있습니다.
                </div>
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  즉, 회사는 이용자의 개인정보를 수집하기 위하여 별도의 동의
                  절차를 마련하고 있습니다. <br />
                  회사는 이용자가 성명, 이메일 주소, 연락처 정보 입력 시
                  개인정보 수집 및 이용에 관한 동의여부를 선택할 수 있는 장치
                  (「동의함」 버튼, 「동의하지 않음」 버튼)를 마련하여 이용자가
                  「동의함」 버튼을 클릭하는 경우 개인정보 수집 및 이용에 대하여
                  동의한 것으로 봅니다.
                </div>
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  회사는 개인정보보호법에 근거하여 아래와 같이 개인정보를
                  수집하고 이용합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <table className="px-5 py-3 bg-emerald-50 rounded-tl justify-center items-center gap-2.5 flex">
                    <th className="text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                      구분
                    </th>
                    <th className="text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                      수집항목
                    </th>
                    <th className="text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                      이용목적
                    </th>
                    <th className="text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                      수집방법
                    </th>
                    <th className="text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                      보유기간
                    </th>
                  </table>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      모바일 앱
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        회원가입
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        SNS(카카오) 회원가입
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        내폰관리
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이벤트
                      </div>
                    </div>
                  </div>
                  <div className="w-[65px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본인인증 정보(이름, 생년월일, 성별, 휴대폰번호, 가입
                        통신사), 암호화된 동일인 식별정보(CI), 중복가입 확인
                        정보(DI), 아이디, 이메일, 비밀번호
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이름, 출생연도, 생일, 성별, 카카오계정(이메일),
                        카카오계정(전화번호), CI(연계정보)
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        단말기 정보(모델, 일련번호, IMEI값)
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이름, 휴대폰번호
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        주소
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[200px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            -
                          </div>
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            회원제 서비스 이용에 따른 본인 확인 절차
                          </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            -
                          </div>
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            약관 변경, 고지사항 전달, 문의/상담 및 불만 등에
                            대한 민원 처리
                          </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            -
                          </div>
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            회원서비스 이용에 대한 내부 통계 분석
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        중고폰 시세 정보 제공
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이벤트 진행
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이벤트 경품 배송
                      </div>
                    </div>
                  </div>
                  <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      모바일 앱
                    </div>
                  </div>
                  <div className="w-40 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-9 flex-col justify-center items-center gap-1 inline-flex">
                        <div className="self-stretch grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          회원 탈퇴 시 까지 또는 법정 의무 보유기간까지
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            이벤트 종료 후 즉시 파기
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        중고폰
                        <br />
                        판매/기부
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        중고IT기기 판매
                        <br />
                        (태블릿
                        <br />
                        /노트북
                        <br />
                        /워치/버즈)
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        판매하기
                      </div>
                    </div>
                    <div className="self-stretch h-52 px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        기부하기
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        판매하기
                      </div>
                    </div>
                  </div>
                  <div className="w-[65px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본인인증 정보(이름, 생년월일, 성별, 휴대폰번호, 가입
                        통신사), 암호화된 동일인 식별정보(CI), 중복가입 확인
                        정보(DI), 은행계좌정보, 단말기
                        정보(모델,일련번호,IMEI값)
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        주소
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본인인증 정보(이름, 생년월일, 성별, 휴대폰번호, 가입
                        통신사), 암호화된 동일인 식별정보(CI), 중복가입 확인
                        정보(DI), 단말기 정보(모델,일련번호,IMEI값)
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        주민등록번호
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        주소
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이름, 휴대폰 번호, 은행계좌정보 (은행명, 계좌번호)
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        주소
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[200px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            -
                          </div>
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            단말기 매매계약의 체결 및 이행
                          </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                          <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            -
                          </div>
                          <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                            고객상담
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        중고폰 반품
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        기부 절차 진행 및 기부금 연말정산 처리
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        기명 기부 연말정산 처리
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        기부폰 반품
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        제품 매매 계약의 체결 및   이행
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        판매품 반품
                      </div>
                    </div>
                  </div>
                  <div className="w-[110px] self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        민팃 ATM
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        알림톡
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        민팃 ATM
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        알림톡
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        알림톡
                      </div>
                    </div>
                  </div>
                  <div className="w-40 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-9 flex-col justify-center items-center gap-1 inline-flex">
                        <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          거래 완료 후 5년  (단, 법령에 따라   정한 경우에는  
                          해당 기간까지)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      B2B
                      <br />
                      민팃파트너스 모바일 앱
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        회원가입
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        출금 신청
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        원천징수   세액 대납
                      </div>
                    </div>
                  </div>
                  <div className="w-[65px] self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        선택
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        필수
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본인인증 정보(이름, 생년월일, 성별, 휴대폰번호, 가입
                        통신사), 암호화된 동일인 식별정보(CI),
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        매장 코드, 아이디(이메일)
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        은행계좌정보(은행명, 계좌번호), 고객중고폰정보(모델,
                        IMEI값)
                      </div>
                    </div>
                    <div className="w-[300px] px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이름, 주민등록번호
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 flex-col justify-center items-center gap-2.5 flex">
                      <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                        <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          -
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          회원제 서비스 이용에 따른 본인 확인 절차
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                        <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          -
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          회원 서비스 제공
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        인센티브 지급
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        인센티브 지급분에 대한 원천징수 세액 대납
                      </div>
                    </div>
                  </div>
                  <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      민팃 파트너스 모바일 앱
                    </div>
                  </div>
                  <div className="w-40 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        회원 탈퇴 시 까지 또는 법정 의무 보유기간 까지
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      고객센터
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        온라인 상담
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화 상담
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        CS 메일
                      </div>
                    </div>
                  </div>
                  <div className="w-[65px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      필수
                    </div>
                  </div>
                  <div className="w-[300px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      이름, 휴대폰번호, 생년월일
                    </div>
                  </div>
                  <div className="w-[200px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
                      <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                        <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          문의/상담 및 불만에 대한 답변 안내
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[110px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        카카오 챗봇
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화
                      </div>
                    </div>
                    <div className="self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이메일
                      </div>
                    </div>
                  </div>
                  <div className="w-40 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      상담 처리 완료 후 3년
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[372px] relative">
                <div className="w-[312px] left-0 top-[-2px] absolute bg-zinc-100 rounded-[99px]" />
                <div className="w-[124px] left-0 top-[-2px] absolute bg-zinc-400 rounded-[99px]" />
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-1 inline-flex">
              <div className="text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                ※
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                  서비스 이용과정에서 다음과 같은 개인정보 항목이 자동으로
                  생성되어 수집될 수 있습니다.
                </div>
                <div className="text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                  - 접속 IP 정보
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              03. 개인정보의 수집 및 이용 목적
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 수집한 개인정보를 고객 상담 및 사업 제안 시 본인 확인 및
              신속한 대응의 목적으로만 이용하며, 이용 목적이 변경되는 경우 관련
              법규에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              04. 개인정보의 제3자 제공
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                MINTIT은 수집한 정보를 다음의 목적을 위해 활용합니다.
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch">
                  <span className="text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                    회사는 사용자의 동의 없이 개인정보를 외부에 제공하지
                    않습니다.  
                  </span>
                  <span className="text-black text-sm font-normal font-['SUIT'] leading-[18px]">
                    단, 다음의 경우는 예외입니다.
                  </span>
                </div>
                <div className="self-stretch pl-6 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-4 h-4 relative">
                        <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                        <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          법률에 특별한 규정이 있거나 법령상 의무를 준수하기
                          위해 불가피한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-4 h-4 relative">
                        <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                        <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          이벤트 및 서비스 제공을 위해 필요한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-4 h-4 relative">
                        <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                        <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          재난, 감염병, 급박한 생명·신체 위험을 초래하는
                          사건·사고, 급박한 재산 손실 등의 긴급상황이 발행하는
                          경우
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  회사는 사용자의 동의를 받은 후 다음과 같이 개인정보를
                  제3자에게 제공합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="px-5 py-3 bg-emerald-50 rounded-tl justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    제공받는 자
                  </div>
                </div>
                <div className="px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    제공되는 개인정보
                  </div>
                </div>
                <div className="px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    제공받는 이용 목적
                  </div>
                </div>
                <div className="px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    보유 및 이용기간
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-0.5 flex">
                <div className="justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      삼성카드㈜
                    </div>
                  </div>
                  <div className="w-[200px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      본인 연계정보(CI)&중복확인정보(DI), 카드번호, 승인일,
                      승인번호, 승인금액, 변제금액
                    </div>
                  </div>
                  <div className="w-[280px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        My 갤럭시 클럽 가입 대상 확인
                        <br />
                        My 갤럭시 클럽 유지 여부 확인
                        <br />
                        My 갤럭시 클럽 서비스 안내
                        <br />
                        My 갤럭시 클럽 권한 실행
                        <br />
                        My 갤럭시 클럽 프로모션 대상 여부 확인
                        <br />
                        My 갤럭시 클럽 관련 잔가보상서비스 제공
                      </div>
                    </div>
                  </div>
                  <div className="w-[169px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      My 갤럭시 클럽 서비스 신청 이후 5년간
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[372px] relative">
              <div className="w-[372px] left-0 top-0 absolute bg-zinc-100 rounded-[99px]" />
              <div className="w-[124px] left-0 top-0 absolute bg-zinc-400 rounded-[99px]" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              05. 개인정보의 추가적인 이용∙제공 판단기준
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 개인정보 보호법 제15조 제3항 및 제17조 제4항에 따라
              개인정보 보호법 시행령 제14조의2에 따른 사항을 고려하여 사용자의
              동의 없이 개인정보를 추가적으로 이용∙제공할 수 있습니다.
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                회사는 사용자의 동의 없이 추가적인 이용∙제공을 하기 위해서
                다음과 같은 사항을 고려합니다.
              </div>
              <div className="self-stretch pl-6 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                        개인정보를 추가적으로 이용∙제공하려는 목적이 당초 수집
                        목적과 관련성이 있는지 여부
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                        개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때
                        추가적인 이용∙제공에 대한 예측 가능성이 있는지 여부
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                        개인정보의 추가적인 이용∙제공이 사용자의 이익을 부당하게
                        침해하는지 여부
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                        가명 처리 또는 암호화 등 안전성 확보에 필요한 조치를
                        하였는지 여부
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              06. 만14세 미만 아동의 개인정보보호
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
            회사는 만14세 미만 아동의 개인정보를 보호하기 위하여 회원가입은
            만14세 이상만 가능하도록 하여 아동의 개인정보를 수집하지 않습니다.
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              07. 개인정보 수탁업체 및 위탁업무 내용
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 이용자에 대한 서비스의 유지 및 관리를 위하여 전문
              용역업체에 일부 업무를 위탁운영하고 있습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              위탁을 받은 업체는 위탁을 받은 목적을 벗어나서 개인정보를 이용할
              수 없습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              또한, 회사는 이러한 수탁업체에 대하여 해당 개인정보가 위법하게
              이용되지 않도록 정기적인 관리 감독을 실시합니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 업무의 일부를 위탁하는 경우 이용자에게 미리 그 사실을
              고지합니다.
            </div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="w-[372px] justify-start items-start gap-0.5 inline-flex">
                <div className="px-5 py-3 bg-emerald-50 rounded-tl justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    위탁받는 자(수탁자)
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-3 bg-emerald-50 rounded-tr justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    위탁업무
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      행복커넥트
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      웹호스팅 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      유니트론 아이에스
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      시스템 구축 및 유지 보수
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      Nice Cert
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      실명/본인인증
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      인포뱅크
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      SMS 및 카카오 알림톡 발송 대행
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      우체국택배, 로젠택배㈜
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      택배 배송 업무
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      ㈜이마트, 홈플러스(주), 롯데쇼핑㈜, ㈜이마트에브리데이,
                      SKT, LGU+, KT, 삼성전자㈜, 삼성전자판매㈜, 롯데하이마트㈜,
                      ㈜전자랜드, ㈜하이프라자, KBS, SBS, SK브로드밴드㈜,
                      SK하이닉스㈜, 우정사업본부, 군인공제회
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      중고폰 매입 등 상담, 중고폰 테블릿 노트북 추가 보상금 지급
                      대행
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      세이브더칠드런
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      중고폰 기부 절차 진행 및 기부금 연말정산 처리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      엘비유세스
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      고객센터 및 녹취시스템 운영 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      SK브로드밴드
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      문자 발송 수신거부 정보 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      스펙트라
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      카카오 챗봇 상담
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      그루컴퍼니
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      이벤트 진행 및 경품 발송
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      얼리슬로스
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      고객만족도 조사 운영 및 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      이노타임
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      경품 추첨 및 택배 발송
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      Amazon Web Service Inc(국내)
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보가 저장된 국내 클라우드 서버 운영 및 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      SK 주식회사 C&C
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      서비스 제공을 위한 클라우드 인프라 관리
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      SK 쉴더스 주식회사
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      정보보안서비스 운영
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                  <div className="w-[180px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      ㈜한국정보기술안전
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      정보보호관리체계 운영
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              08. 개인정보의 위탁 및 업무내용
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                회사는 개인정보 수집 및 이용이 끝나면 해당 정보를 바로
                삭제합니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                단, 다음과 같이 다른 법령에 따라 일정 기간 개인정보를 보관해야
                할 경우, 해당 기간 동안 개인정보를 안전하게 보관한 후
                삭제합니다.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[706px] relative">
                <div className="w-[706px] left-0 top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                    <div className="px-5 py-3 bg-emerald-50 rounded-tl justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                        보유 항목
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                        보유 기간
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                        법적 근거
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[44px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    5년
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[148px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    5년
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[200px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    3년
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[252px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    3년
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[304px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    6개월
                  </div>
                </div>
                <div className="w-[110px] px-5 py-4 left-[294px] top-[356px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    3개월
                    <br />
                    12개월
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[44px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[148px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    전자상거래 등에서의 소비자보호에 관한 법률, 전자소득세법,
                    법인세법
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[200px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[252px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    신용정보의 이용 및 보호에 관한 법률
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[304px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </div>
                </div>
                <div className="w-[300px] px-5 py-4 left-[406px] top-[356px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    통신비밀보호법
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[44px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    계약 또는 청약철회 등에 관련 기록
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[96px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    대금결제 및 재화 등의 공급에 관한 기록
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[148px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    기부금 영수증 발급 이력
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[200px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    소비자의 불만 또는 분쟁처리에 관한 기록
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[252px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    신용정보의 수집/처리 및 이용 등에 관한 기록
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[304px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    표시/광고에 관한 기록
                  </div>
                </div>
                <div className="w-[292px] px-5 py-4 left-0 top-[356px] absolute bg-gray-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    사용자의 인터넷 등 로그 기록 / 사용자가 접속한 장소를 기록한
                    자료
                    <br />그 외의 통신사실 확인 자료
                  </div>
                </div>
              </div>
              <div className="w-[372px] relative">
                <div className="w-[372px] left-0 top-0 absolute bg-zinc-100 rounded-[99px]" />
                <div className="w-[124px] left-0 top-0 absolute bg-zinc-400 rounded-[99px]" />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  가.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      삭제 절차
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      사용자의 개인정보는 사용이 끝나면 바로 삭제됩니다. 위에서
                      언급한 것과 같이 개인정보를 보존해야 할 경우에는 별도의
                      데이터베이스(DB) 또는 다른 장소에 옮겨서 법정 기간 동안
                      보관하며, 기간이 지나면 바로 삭제합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  나.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      삭제 방법
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      회사는 전자 파일 형태로 저장된 개인정보는 기록을 열어볼 수
                      없는 방법으로 삭제하며, 종이에 기재된 형태의 개인정보는
                      분쇄나 소각을 통해 삭제합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
                09. 개인정보 자동수집 장치의 설치, 운영 및 거부에 관한 사항
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-20 h-px bg-teal-300" />
                <div className="grow shrink basis-0 h-px bg-zinc-100" />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                본 사이트는 '쿠키(cookie)'를 사용하지 않습니다. '쿠키(cookie)'는
                HTTP 서버에서 이용자의 브라우저로 보내는 작은 데이터 조각으로서
                이용자의 컴퓨터 하드 디스크 드라이브에 저장됩니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                이용자는 브라우저 옵션을 조정하여 모든 쿠키를 받아들이거나,
                쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를
                거부할 수 있습니다.
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                '쿠키(cookie)'는 브라우저 종료 시 만료됩니다.
              </div>
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="px-5 py-3 bg-emerald-50 rounded-tl justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    유형
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-3 bg-emerald-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-slate-600 text-sm font-extrabold font-['SUIT'] leading-[18px]">
                    설정방법
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    크롬
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    브라우저 우측 상단 &gt; 맞춤 설정 및 제어 &gt; 설정 &gt;
                    개인정보 및 보안 &gt; 인터넷 사용 기록 삭제
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    사파리
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    설정 &gt; Safari &gt; 방문 기록 및 웹 사이트 데이터 지우기
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    파이어폭스
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    브라우저 우측 상단 &gt; 설정 &gt; 개인 정보 및 보안 &gt;
                    쿠키 및 사이트 데이터 삭제 &gt; 데이터 삭제 &gt; 쿠키 및
                    사이트 데이터 & 캐시된 웹 콘텐츠 &gt; 삭제
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    네이버 웨일
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    브라우저 우측 상단 &gt; 세 점 아이콘 &gt; 설정 &gt; 개인정보
                    보호 &gt; 인터넷 사용 기록 삭제 &gt; 데이터 삭제
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                <div className="w-[110px] self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    Microsoft Edge
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-4 bg-gray-50 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    브라우저 우측 상단 &gt; 세 점 아이콘 &gt; 설정 &gt; 개인
                    정보 및 서비스 &gt; 검색 데이터 지우기 &gt; 지울 항목 선택
                    &gt; 지금 지우기
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부
              서비스는 이용에 어려움이 있을 수 있습니다.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              10. 비밀유지
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 직무상 취득한 비밀정보 또는 이용자가 제공한 개인정보를
              누설하지 아니하며, 비밀을 유지하기 위하여 적절한 조치를 취할
              것입니다.
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                다만, 다음 각 호의 경우에는 그러하지 아니합니다.
              </div>
              <div className="self-stretch pl-6 flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본 서비스에 제공되기 전에 이미 일반에 공개된 정보
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본 서비스의 행위에 의하지 아니하고 공개된 정보
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        본 서비스가 제3자로부터 적법하게 취득한 정보
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이용자와 상관없이 본 서비스가 독자적으로 개발한 정보
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        이용자가 서면으로 공개를 승인한 정보
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-500 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        기타 관계법령에서 허용하는 경우
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                회사는 위 사항의 경우에도 본래의 수집목적 및 이용목적에 반하여
                무분별하게 정보가 제공되지 않도록 노력하겠습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              11. 링크 사이트
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              본 서비스는 이용자에게 다른 회사의 웹사이트 또는 자료에 대한
              링크를 제공할 수 있습니다. 이 경우 본 서비스는 외부 사이트 및
              자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나
              자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              본 서비스에 포함하고 있는 링크를 클릭하여 타 사이트의 페이지로
              옮겨갈 경우 해당 사이트의 개인정보처리방침은 본 서비스와
              무관하므로 새로 방문한 사이트의 정책을 검토해 보시기 바랍니다.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              12. 이용자의 권리 및 행사 방법
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              이용자는 언제든지 본 서비스에 등록되어 있는 자신의 개인정보에 대한
              열람을 요청 할 수 있으며, 정정하거나 삭제 요청할 수 있습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              삭제 요청은 “15. 개인정보 보호책임자 및 담당자”에서 정한 자에게
              전화 또는 이메일로 할 수 있습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              개인정보 열람 및 처리 정지 요청 시 당사는 법률에 특별한 규정이
              있는 등의 경우에는 처리 정지 요청을 거부할 수 있습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을
              완료하기 전까지 당해 개인정보를 처리 또는 제공하지 않습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
              제3자에게 지체 없이 통지하여 정정하도록 조치하겠습니다.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              13. 개인정보의 안전성 확보 조치
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              회사는 개인정보보호법에 제 29조에 따라 다음과 같이 안전성 확보에
              필요한 기술적/관리적 및 물리적 조치를 취하고 있습니다.
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  가.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보 취급자의 최소화
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보 보호를 위해 개인정보 취급자에 대한 권한을
                      최소화하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  나.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보 취급자에 대한 정기적 교육 시행
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보 보호에 대한 인식 제고를 위해 연 1회 이상 정기적인
                      교육을 시행하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  다.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      내부 점검 정기적 시행
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보의 처리 관련 안전성 확보를 위해 정기적으로 자체
                      점검을 실시하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  라.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      내부 관리 계획의 수립 및 시행
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보의 안전한 처리 및 관리를 위해 내부관리계획을
                      수립하여 시행하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  마.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보의 암호화
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      이용자의 개인정보 및 비밀번호는 암호화되어 저장/관리되고
                      있으며, 전송 시에도 별도의 보안기능을 사용하여 안전하게
                      관리하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  바.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      해킹 등에 대비한 기술적 대책
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및
                      훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신
                      및 점검을 진행하며 외부로부터 접근이 통제된 구역에
                      시스템을 설치하고 기술적, 물리적으로 감시 및 차단을 하고
                      있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  사.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보에 대한 접근 제한
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보를 처리하는 데이터베이스시스템에 대한 접근 권한의
                      부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 하고
                      있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
                      통제하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  아.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      접속 기록의 보관 및 위변조 방지
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보 처리시스템에 접속한 기록을 최소 1년 이상 보관,
                      관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지
                      않도록 보안기능을 사용하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  자.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      문서 보안을 위한 잠금 장치 사용
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는
                      안전한 장소에 보관하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  차.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      비인가자에 대한 출입 통제
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고
                      이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-4 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  카.
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      재해, 재난 대비 안전조치
                    </div>
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      천재지변을 비롯한 재해, 재난 발생에 대비하여 위기대응
                      매뉴얼 등 대응 절차를 마련하고 점검하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              14. 이용자의 의견 수렴 및 불만 처리
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              이용자는 언제나 성실한 답변을 받을 권리가 있으며, 본 사이트는
              이용자의 의견을 소중하게 생각합니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              이용자의 원활한 의사소통을 위해 회사의 홈페이지에서 고객상담실을
              운영하고 있습니다.   문의 및 상담은 접수 후 24시간 이내에 성실하게
              답변 드리겠습니다.
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                다만, 근무시간 이후 또는 주말 및 공휴일에는 익일 처리하는 것을
                원칙으로 합니다. <br />
                기타 개인정보에 관한 문의 및 상담이 필요한 경우에는 아래 기관에
                문의하실 수 있습니다.
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)
                  </div>
                  <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화 : (국번없이) 1833-6972
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0">
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          홈페이지 :
                        </span>
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] underline leading-[18px]">
                          http://www.kopico.go.kr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    개인정보 침해신고센터 (한국인터넷진흥원 운영)
                  </div>
                  <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화 : (국번없이) 118
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0">
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          홈페이지 :
                        </span>
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] underline leading-[18px]">
                          privacy.kisa.or.kr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    대검찰청 사이버수사과
                  </div>
                  <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화 : (국번없이) 1301
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0">
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          홈페이지 :
                        </span>
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] underline leading-[18px]">
                          http://www.spo.go.kr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-5 py-4 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    경찰청 사이버수사국
                  </div>
                  <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        전화 : (국번없이) 182
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="w-2 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                        -
                      </div>
                      <div className="grow shrink basis-0">
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                          홈페이지 :
                        </span>
                        <span className="text-zinc-800 text-sm font-normal font-['SUIT'] underline leading-[18px]">
                          http://ecrm.cyber.go.kr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              15. 개인정보 보호책임자 및 보호담당자
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              본 사이트는 이용자에게 필요한 정보를 안전하게 이용할 수 있도록
              최선을 다하고 있습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              개인정보 보호 관련하여 이용자에게 고지한 사항에 반하는 사고가
              발생하는 경우에는 개인정보 보호책임자가 모든 책임을 감수합니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              그러나 개인정보 보호법 등 관련 법령에서 규정하는 기술적인 조치를
              했음에도 불구하고, 해킹 등 기본적인 네트워크 구조의 위험성에 의해
              발생하는 예기치 못한 사고로 인한 정보의 훼손 또는 이용자 가 작성한
              게시물에 의한 각종 분쟁에 관해서는 책임을 지지 아니합니다.
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                회원의 개인정보를 처리하는 책임자 및 담당자는 다음과 같으며,
                개인정보 관련 문의사항에 신속하고 성실하게 답변 드리겠습니다.
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch px-5 py-[18px] bg-slate-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-start items-center gap-[9px] inline-flex">
                  <div className="text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    개인정보 보호책임자
                  </div>
                  <div className="grow shrink basis-0 py-0.5 flex-col justify-start items-end gap-2.5 inline-flex">
                    <div className="w-1 h-1 origin-top-left -rotate-90 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="text-right text-teal-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    성미라 실장
                  </div>
                </div>
                <div className="self-stretch px-5 py-[18px] bg-slate-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-start items-center gap-[9px] inline-flex">
                  <div className="text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    개인정보 보호담당자
                  </div>
                  <div className="grow shrink basis-0 py-0.5 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="w-1 h-1 origin-top-left -rotate-90 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="text-right text-teal-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    정만영 PL
                  </div>
                </div>
                <div className="self-stretch px-5 py-[18px] bg-slate-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-start items-center gap-[11px] inline-flex">
                  <div className="text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    전화번호
                  </div>
                  <div className="grow shrink basis-0 py-0.5 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="w-1 h-1 origin-top-left -rotate-90 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="text-right text-teal-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    1877-5446
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              16. 개인정보처리방침의 변경에 따른 고지
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-20 h-px bg-teal-300" />
              <div className="grow shrink basis-0 h-px bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch h-56 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              현 개인정보처리방침은 2023년 6월 28일에 제정되었으며, 2024년 2월
              1일에 개정되었습니다.
            </div>
            <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
              정부의 정책 또는 보안기술의 변경에 따라 내용의 추가ㆍ삭제 및
              수정이 있을 시에는 개정 최소 7일 전부터 홈페이지를 통해 고지할
              것입니다.
            </div>
            <div className="self-stretch pt-10 pb-[60px] justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-emerald-800 text-sm font-medium font-['SUIT'] leading-[18px]">
                최종 변경일: 2024. 2. 1.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default PrivacyPopup;
