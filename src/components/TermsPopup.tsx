import React from "react";
import usePopupStore from "../stores/usePopupStore";
import Popup from "./Popup";

const TermsPopup: React.FC = () => {
  return (
    <Popup
      onClose={() => {
        usePopupStore.getState().closeTerms();
      }}
    >
      <div className="text-black text-[22px] font-extrabold font-['SUIT'] leading-7 mb-[24px]">
        이용약관 내역
      </div>
      <div className="px-4 py-[15px] bg-white rounded border border-zinc-400 justify-start items-center gap-3 inline-flex mb-[24px]">
        <div className="pb-[2.57px] justify-center items-center flex">
          <div className="h-[15.43px] text-black text-sm font-normal font-['SUIT'] leading-[18px]">
            2021년 01월 04일
          </div>
        </div>
        <div className="w-6 relative" />
      </div>

      <div className="text-black text-sm font-medium font-['SUIT'] leading-[18px]">
        회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당
        개인정보를 파기합니다.
      </div>
      <div className="text-black text-sm font-medium font-['SUIT'] leading-[18px]">
        파기의 절차, 기한 및 방법은 다음과 같습니다.
      </div>
      <div className="text-black text-sm font-medium font-['SUIT'] leading-[18px] mb-[28px]">
        단, 다른 법령에 의하여 해당 개인정보를 보존하여야 하는 경우는 예외로
        합니다.
      </div>
      <img className="h-[220px]" src="https://via.placeholder.com/220x220" />
      <div className="flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제1조 ( 목 적 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                이 약관은 (주)민팃(이하 "회사"라 한다)이 운영하는 MINTIT (이하
                "몰"이라 한다)에서 제공하는 인터넷 관련 서비스 및 기타
                부대서비스를 이용함에 있어 (주)민팃과 이용자의 권리, 의무 및
                책임사항을 규정함을 목적으로 합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제2조 ( 정 의 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이란 (주)민팃이 운영하는 가상의 사업장을 말하며, 아울러
                  가상의 사업장을 운영하는 사업자의 의미로도 사용합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "서비스"란 "몰"이 제공하는 재화의 공급 및 용역이행을 말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는
                  서비스를 받는 회원 및 비회원을 말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "회원"이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한
                  자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는
                  서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "비회원"이라 함은 회원에 가입하지 않고 "몰"이 공하는 서비스를
                  이용하는 자를 말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑥
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "쿠폰"이라 함은 회원에게 "몰에서 제공되는 유료 "서비스"결제 시
                  일정금액 또는 일정비율을 할인 받을 수 있는 사이버 쿠폰을
                  말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑦
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "포인트"라 함은 회원이 "몰 에서 제공되는 유료 "서비스"결제 시
                  현금처럼 사용할 수 있는 "몰 전용의 사이버 화폐를 말합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제3조 ( 약관의 명시와 개정 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰”은 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
                  연락처(전화, 팩스, 전자우편 주소등) 등을 이용자가 알 수 있도록
                  “몰”의 초기화면에 게시합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 "전자상거래 등에서의 소비자보호에 관한 법률", "약관의
                  규제에 관한 법률", "전자 문서 및 전자거래 기본법",
                  "전자서명법", "정보통신망 이용 촉진 및 정보보호 등에 관한
                  법률", "방문판매등에관한법률", "소비자기본법"등 관련법을
                  위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
                  현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터
                  적용일자 전일까지 공지합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에
                  체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에
                  대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미
                  계약을 체결한 이용자가 개정약관 조항의 적용을 원하는 뜻을
                  제3항에 의한 개정약관의 공지기간 내에 "몰"에 송신하여 "몰"의
                  동의를 받은 경우에는 개정약관 조항이 적용됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
                  정부가 제정한 "전자상거래등에서의 소비자보호지침"및 관계법령
                  또는 상관례에 따릅니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제4조 ( 서비스의 제공 및 변경 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 다음과 같은 업무를 수행합니다.
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="grow shrink basis-0 bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                      <div className="text-center text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                        1. 중고폰 매매  및 중개관련 정보제공
                      </div>
                    </div>
                    <div className="grow shrink basis-0 bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                      <div className="text-center text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                        2. 재화 또는 용역에 대한  정보 제공 및  구매계약의 체결
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="grow shrink basis-0 bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                      <div className="text-center text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                        3. 구매계약이 체결된 재화  또는 용역의 배송
                      </div>
                    </div>
                    <div className="grow shrink basis-0 bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                      <div className="text-center text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                        4. 기타  "몰”이 정하는 업무
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차
                  체결되는 계약에 의해 제공할 재화, 용역의 내용을 변경할 수
                  있습니다. 이 경우에는 변경된 재화, 용역의 제공일자를 명시하여
                  현재의 재화, 용역의 내용을 게시한 곳에 그 제공일자 이전
                  7일부터 공지합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 제공하기로 이용자와 이미 계약을 체결한 서비스의 내용을
                  재화의 품절 또는 기술적인 사유로 변경할 경우에는 "몰"은 이로
                  인하여 이용자가 입은 손해를 배상합니다. 단, "몰"의 고의 또는
                  과실이 없는 경우에는 그러하지 아니합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 제1항의 서비스 중 일부에 대한 서비스 이용시간을 별도로
                  정할 수 있으며, 이 경우 그 이용시간을 사전에 이용자에게 공지
                  또는 통지합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제5조 ( 서비스의 중단 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 다음 각호에 해당하는 경우 서비스의 제공을 일시적으로
                  중단할 수 있습니다.
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"이 사전에 이용자에게 공지하거나 통지한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          컴퓨터등 정보통신설비의 보수점검 교체 및 고장, 통신의
                          두절 등의 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          이용자의 서비스 이용 폭주 등으로 서비스 제공이
                          불가능한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        4.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          설비 등을 긴급복구 하여야 할 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        5.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          기간통신사업자가 전기통신서비스를 중지한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        6.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          기타 "몰"이 합리적으로 제어할 수 없는 경우 등
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로
                  인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단
                  "몰"에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제6조 ( 회원가입 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자는 "몰"이 정한 가입양식에 따라 회원정보를 기입한 후 이
                  약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음
                  각호에 해당하지 않는 한 회원으로 등록합니다.
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          제7조 1항에 의거 회원탈퇴한 경우 탈퇴일로부터 3개월
                          이내
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          가입신청자가 이 약관 제7조 3항에 의하여 이전에
                          회원자격을 상실한 적이 있는 경우, 다만 제7조 3항에
                          의한 회원자격 상실 후 3년이 경과한 자로서 “몰"의
                          회원재가입 승낙을 얻은 경우에는 예외로 한다.
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          등록 내용에 허위, 기재누락, 오기가 있는 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        4.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          기타 회원으로 등록하는 것이 "몰"의 기술상 현저히
                          지장이 있다고 판단되는 경우
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한
                  시점으로 합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원은 제11조 1항에 의한 등록사항에 변경이 있는 경우, 즉시
                  전자우편 또는 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야
                  합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제7조 ( 회원 탈퇴 및 자격상실 등 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원은 언제든지 "몰"에 탈퇴를 요청할 수 있으며 "몰"은 즉시
                  회원탈퇴를 처리합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을
                  제한 및 정지시킬 수 있습니다.
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          가입 신청시에 허위 내용을 등록한 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"을 이용하여 구입한 서비스 등의 대금, 기타
                          "몰"이용에 관련하여 회원이 부담하는 채무를 기일에
                          지급하지 않는 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          다른 사람의 "몰"이용을 방해하거나 그 정보를 도용하는
                          등 전자거래질서를 위협하는 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        4.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에
                          반하는 행위를 하는 경우
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 회원 자격을 제한 또는 정지 시킨 후, 동일한 행위가
                  2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우
                  "몰"은 회원자격을 상실시킬 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다.
                  이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 소명할
                  기회를 부여합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 "회원"이 계속해서 12개월 이상 로그인하지 않는 경우,
                  회원정보의 보호 및 운영의 효율성을 위해 이용을 제한할 수
                  있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제8조 ( 회원에 대한 통지 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한
                  전자우편 주소로 할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰"에
                  게시함으로서 개별 통지에 갈음할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제9조 ( 서비스 이용/이용대금 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자가 서비스를 이용하기 위해서는 "몰"이 공지사항에
                  게시하거나 해당서비스 이용안내에서 제시하는 절차를 준수하여야
                  하며, 해당 서비스의 내용 및 책임한계 또한 공지사항에 게시된
                  내용 및 해당 서비스 이용안내에 따릅니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  서비스 이용대금은 "몰"이 공지사항에 게시하거나 해당 서비스
                  이용안내에서 제시하는 바에 따릅니다. "몰"이 제공하는 서비스는
                  그 이용대금을 별도 게시하거나 제시하지 않는 한 무료로 합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자가 구매신청한 재화 또는 용역이 품절 등의 사유로
                  재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그
                  사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을
                  받은 경우에는 그 사유발생일로부터 3일 이내에 계약해제 및
                  환급절차를 취합니다
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 제공하는 유료 서비스 이용자 중 허위매물 등록 등 "몰"이
                  정한 부적절한 이용을 통한 이용정지시에는 환불되지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제10조 ( 서비스 이용계약의 성립 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  서비스 이용계약은 이용자의 서비스 이용신청시 성립합니다.
                </div>
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  다만 아래의 경우 "몰"은 서비스 이용계약을 취소할 수 있습니다.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    ①
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      신청 내용에 허위, 기재누락, 오기가 있는 경우
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                    ②
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                      기타 서비스를 제공하는 것이 "몰"의 기술상 현저히 지장이
                      있다고 판단하는 경우
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제11조 ( 개인정보보호 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의
                  정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은
                  선택사항으로 합니다.
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    필수사항
                  </div>
                  <div className="left-[20px] top-[42px] flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          성명
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          생년월일
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          성별
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        4.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          아이디
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        5.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          비밀번호
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        6.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          휴대폰번호
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        7.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          이메일
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰”이 이용자의 개인식별이 가능한 개인정보를 수집한 때에는
                  반드시 당해 이용자의 동의를 받습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  제공된 개인정보는 당해 이용자의 동의없이 목적 외의 이용이나
                  제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이
                  집니다. 다만, 다음의 경우에는 예외로 합니다.
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    예외
                  </div>
                  <div className="left-[20px] top-[42px] flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          서비스이행을 위해 제휴서비스 제공에 필요한 최소한의
                          이용자의 정보를 제휴업체에 알려주는 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          서비스이행을 위해 제휴서비스 제공에 필요한 최소한의
                          이용자의 정보를 제휴업체에 알려주는 경우
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          관계법령에 의한 경우
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는
                  경우에는 개인정보관리책임자의 신원(소속, 성명 및 전화번호 기타
                  연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공
                  관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등
                  "정보통신망이용촉진 및 정보보호 등에 관한"이 규정한 사항을
                  미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를
                  철회할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해
                  열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이
                  필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을
                  요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를
                  이용하지 않습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑥
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를
                  최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의
                  분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든
                  책임을 집니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑦
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"또는 그로부터 개인정보를 제공받은 제3자는 개인정보의
                  수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를
                  지체없이 파기합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제12조 ( "몰"의 의무 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를
                  하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로
                  서비스를 제공하는 데 최선을 다하여야 합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록
                  이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을
                  갖추어야 합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을
                  발송하지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제13조 ( 회원의 ID 및 비밀번호에 대한 의무 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  제11조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은
                  회원에게 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는
                  안됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고
                  있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는
                  경우에는 그에 따라야 합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제14조 ( 이용자의 의무 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black text-sm font-medium font-['SUIT'] leading-[18px]">
                  이용자는 다음 행위를 하여서는 안되며, 이에 대한 법률적인
                  책임은 이용자에게 있습니다.
                </div>
              </div>
              <div className="self-stretch pl-[18px] flex-col justify-start items-start gap-1.5 flex">
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        1.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          신청 또는 변경시 허위내용의 등록
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        2.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"에 게시된 정보의 변경
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        3.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)를
                          송신 또는 게시
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        4.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"기타 제의 저작권 등 지적재산권에 대한 침해
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        5.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          "몰"기타 제의 명예를 손상시키거나 업무를 방해하는 행위
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="w-3.5 text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                        6.
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-600 text-sm font-normal font-['SUIT'] leading-[18px]">
                          외설 또는 폭력적인 메시지,화상,음성 기타 공서양속에
                          반하는 정보를 "몰"에 공개 또는 게시하는 행위
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제15조 ( 쿠폰 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 "몰"을 이용하는 회원에게 유료 "서비스"결제 시 일정금액
                  또는 일정비율을 할인 받을 수 있는 쿠폰을 발급할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "쿠폰"은 "몰"웹사이트 내에서만 사용가능하며, 어떠한 경우에도
                  현금으로 보상되지 않습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원은 "쿠폰"을 회원 본인만 사용할 수 있는 권한을 가지며,
                  어떠한 경우에도 이를 타인에게 실질적으로 매매 또는 양도할 수
                  없으며, 부정한 목적이나 용도로 사용할 수 없습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "쿠폰"은 일부 "서비스"에 따라 사용이 제한될 수 있으며,
                  결제취소나 환불 등 쿠폰 발행의 원인이 된 사건이 무효화된 경우,
                  해당 "쿠폰"의 사용이 불가능할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  결제 시 사용한 "쿠폰"은 결제를 취소하더라도 회원에게 환급되지
                  않습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑥
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 회원이 본 약관 제15조을 어긴 경우, 사유를 미리(미리
                  통지할 수 없는 경우에는 사후 지체 없이) 해당 회원에게
                  통지하고, 해당 "쿠폰"을 회수할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑦
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "쿠폰"은 유효기간이 만료되거나 이용계약이 취소, 종료되면
                  자동으로 소멸됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑧
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 "쿠폰"의 유효기간, 사용조건 및 제한에 관한 사항을
                  서비스화면에 별도로 게시하거나 통지하며, 해당 사항은 회사
                  정책에 따라 달라질 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑨
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "쿠폰"은 회원에게 발행된 익일부터 사용이 가능하며, 하나의 유료
                  "서비스"에 대해 두 개 이상의 쿠폰을 중복 사용할 수 없습니다.
                  (단, 관리자가 일괄 발행한 쿠폰은 당일부터 사용 가능)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제16조 ( 포인트 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="py-2 rounded-2xl justify-center items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 self-stretch bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                <div className="text-right text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                  포인트
                </div>
              </div>
              <div className="text-right text-emerald-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                =
              </div>
              <div className="grow shrink basis-0 self-stretch bg-slate-100 rounded-lg justify-center items-center gap-1 flex">
                <div className="text-right text-emerald-800 text-xs font-normal font-['SUIT'] leading-none">
                  “몰” 웹사이트 내 현금 1원
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 "몰"을 이용하는 회원에게 "몰"이 제공하는 유료 "서비스"
                  결제 시 결제수단으로 사용할 수 있는 "포인트"를 지급할 수
                  있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  포인트 1P는 "몰"웹사이트 내에서만 현금 1원의 의미를 가지며,
                  어떠한 경우에도 현금으로 보상되지 않습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원은 "포인트"를 본인의 결제에 사용할 수 있는 권한만을
                  가지며, 어떠한 경우에도 이를 타인에게 실질적으로 매매 또는
                  양도할 수 없으며, 부정한 목적이나 용도로 사용할 수 없습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 회원이 본 약관 제16조을 어긴 경우, 사유를 미리(미리
                  통지할 수 없는 경우에는 사후 지체없이) 해당 회원에게 통지하고,
                  해당 "포인트"를 회수할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  결제취소나 환불 등 "포인트"지급의 원인이 된 사건이 무효화된
                  경우, 해당 "포인트"를 회수할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑥
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  결제 시 사용한 "포인트"는 결제를 취소하더라도 회원에게
                  환급되지 않습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑦
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "포인트"의 유효기간은 1년을 기본으로 합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑧
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "포인트"는 유효기간이 만료되거나 이용계약이 취소, 종료되면
                  자동으로 소멸됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑨
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 "포인트"의 유효기간, 사용조건 및 제한에 관한 사항을
                  서비스화면에 별도로 게시하거나 통지하며, 해당 사항은 회사
                  정책에 따라 달라질 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑩
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "포인트"는 회원에게 지급된 익일부터 사용 가능합니다. (단,
                  관리자가 일괄 지급한 포인트는 당일부터 사용 가능)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제17조 ( 청약철회 등 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"과 재화 등 서비스 이용에 관한 계약을 체결한 이용자는 계약
                  내용에 관한 서면을 받은 날부터 7일 이내에는 청약의 철회를 할
                  수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자가 서비스를 전혀 이용하지 않고 7일 이내 청약철회 요청 시
                  결제대금을 전액 환불합니다. 단, 환급 시 소요되는 비용은
                  이용자가 부담합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자가 서비스를 일부 이용하고 청약철회 요청 시 결제대금에서
                  이용일수에 해당하는 금액과 총 이용 금액의 10% 이내의 위약금을
                  공제한 후 환급합니다. 단, 서비스 일부 이용 후 7일 이내
                  청약철회 요청 시 위약금 없이 결제대금의 이용일수에 해당하는
                  금액만 공제하고 환급합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 제공하는 서비스는 "콘텐츠산업진흥법"및
                  "콘텐츠이용자보호지침"에서 규정하는 청약철회가 불가능한
                  서비스가 포함되어 있습니다. 이 경우 "몰"은 동 법에 따라 청약의
                  철회가 불가능한 서비스에 대한 사실을 해당서비스 이용안내에
                  포함한 경우 이용자의 청약철회권을 일부 제한 할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제18조
              <br />( 연결 웹사이트와 피연결 웹사이트간의 관계 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"과 하위 "웹사이트"가 하이퍼 링크(예: 하이퍼 링크의
                  대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된
                  경우, 전자를 연결 웹사이트라고 하고 후자를 피연결 웹사이트라고
                  합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  연결 웹사이트는 피연결 웹사이트가 독자적으로 제공하는 재화
                  용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지
                  않는다는 뜻을 연결웹사이트의 사이트에서 명시한 경우에는 그
                  거래에 대한 보증책임을 지지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제19조 ( 저작권의 귀속 및 이용제한 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에
                  귀속합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이
                  복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로
                  이용하거나 제3자에게 이용하게 하여서는 안됩니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제20조 ( 분쟁처리 및 분쟁조정 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
                  피해를 보상처리하기 위하여 최선을 다합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그
                  사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는
                  이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"과 이용자간에 발생한 분쟁은 “전자문서 및 전자거래 기본법”
                  제32조 및 동 시행령 제16조에 의하여 설치된
                  전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제21조 ( 재판권 및 준거법 )
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"과 이용자간에 발생한 분쟁에 관한 소송은 민사소송법상의
                  관할법원에 제기합니다. 다만, 서비스 이용시 관할법원에 대한
                  별도 합의가 있는 경우에는 이에 따릅니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  "몰"와 이용자간에 제기된 소송에는 한국법을 적용합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제22조 (매매계약의 체결 및 대금 결제)
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  상품의 매매계약은 회원이 판매자가 제시한 상품의 판매 조건에
                  응하여 청약의 의사표시를 하고 이에 대하여 판매자가 승낙의
                  의사표시를 함으로써 체결됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 회원이 현금, 카드 기타의 방법으로 매매 대금을 결제할 수
                  있는 방법을 제공합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  매매 대금의 결제와 관련하여 구매자가 입력한 정보 및 그 정보와
                  관련하여 발생한 책임과 불이익은 전적으로 구매자가 부담하여야
                  합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사가 제공하는 대금결제 수단을 활용하여 상품을 주문한 후 일정
                  기간 내에 매매대금을 결제하지 않을 경우에는 회사는 대금결제
                  수단을 이용할 의사가 없다고 간주하여 당해 주문을 취소할 수
                  있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑤
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 구매자의 상품 매매계약 체결 내용을 나의 쇼핑 내역을
                  통해 확인할 수 있도록 조치하며, 매매계약의 취소 방법 및 절차를
                  안내합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ⑥
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 구매자가 매매대금 결제 시 사용한 결제수단에 대해 정당한
                  사용권한을 가지고 있는지의 여부를 확인할 수 있으며, 이에 대한
                  확인이 완료될 때까지 거래진행을 중지하거나, 확인이 불가한
                  해당거래를 취소할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제23조 (배송)
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  배송 소요기간은 입금 또는 대금결제 확인일의 익일을 기산일로
                  하여 배송이 완료되기까지의 기간을 말합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  공휴일 및 기타 휴무일 또는 천재지변 등 불가항력적인 사유가
                  발생한 경우 그 해당기간은 배송 소요기간에서 제외됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 배송과 관련하여 배송업체, 금융기관 등과의 사이에 발생한
                  분쟁은 당사자들간의 해결을 원칙으로 하며, 회사는 어떠한 책임도
                  부담하지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제24조 (취소)
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  구매자는 구매한 상품이 발송되기 전까지 구매를 취소할 수
                  있으며, 배송중인 경우에는 취소가 아닌 반품절차에 따라
                  처리됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회원이 결제를 완료한 후 배송대기 상태에서는 취소신청 접수 시
                  특별한 사정이 없는 한 즉시 취소처리가 완료됩니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  배송요청 상태에서 즉시 취소처리가 완료되는 것이 원칙이나
                  배송중인 경우에는 발송된 상품의 왕복배송비는 취소사유의
                  귀책당사자가 부담 합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제25조 (반품/환불)
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  반품에 관한 일반적인 사항은 전자상거래등에서의 소비자보호에
                  관한 법률 등 관련법령이 판매자가 제시한 조건보다 우선합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  반품에 소요되는 비용은 반품에 대한 귀책사유가 있는 자에게
                  일반적으로 귀속됩니다. (단순변심 : 구매자부담, 상품하자 :
                  판매자부담 등)
                </div>
                <div className="relative">
                  <div className="left-0 top-0 bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]" />
                  <div className="text-slate-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                    반품에 소요되는 비용
                  </div>
                  <div className="left-[20px] top-[46px] justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                      단순변심
                    </div>
                    <div className="relative">
                      <div className="w-1 left-[177px] top-[4px] origin-top-left -rotate-90 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="text-right text-teal-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                      구매자 부담
                    </div>
                  </div>
                  <div className="left-[20px] top-[76px] justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                      상품하자
                    </div>
                    <div className="relative">
                      <div className="w-1 left-[177px] top-[4px] origin-top-left -rotate-90 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="text-right text-teal-600 text-sm font-medium font-['SUIT'] leading-[18px]">
                      판매자 부담
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ③
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  반품 신청시 반품송장번호를 미기재하거나 반품사유에 관하여
                  판매자에게 정확히 통보(또는 서면)하지 않을 시 반품처리 및
                  환불이 지연될 수 있습니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ④
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  반품에 따른 환불은 반품 상품이 판매자에게 도착되고 반품사유 및
                  반품배송비 부담자가 확인된 이후에 결제취소 및 환불됩니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch text-emerald-800 text-xl font-extrabold font-['SUIT'] leading-relaxed">
              제26조 (구매안전 서비스)
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-20 bg-teal-400" />
              <div className="grow shrink basis-0 bg-zinc-100" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ①
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 회사에서 이루어지는 선불식 통신판매에 있어서 구매자가
                  지급하는 결제대금을 예치하고 있다가 구매자가 배송완료된 재화
                  또는 용역에 대해 구매확정하면 판매자에게 판매대금을
                  지급함으로써 구매자의 안전을 도모합니다.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-3.5 text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                ②
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
                  회사는 구매자에게 상품을 공급받은 사실을 배송완료일로부터
                  3영업일 이내에 회사에 통보하여 주도록 요청합니다. (구매확정)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default TermsPopup;
