import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { authService } from "../../config/firebase";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import {
  UpWraper,
  BannerImage,
  GreetingBox,
  GreetingTitle,
  GreetingMent,
  Username,
  Greetingment,
  Greetingcontent,
  ProductFdButton,
  BankListBanner,
  BankListBannerTitle,
  BankWrap,
  BottomWrap,
  BankList,
  BankListTilte,
  Sidebar,
  BankAndQna,
  QuestionWrap,
  QuestionTitle,
  FinanceHoneyTip,
  MainPageWrapper,
  Bannerimage,
  DownWraper,
  TodayTipTitle,
  TodayTipComment,
  Tips,
  Tip,
  TipTitle,
  TipComments,
  TipComment,
} from "./style";
import { onAuthStateChanged } from "firebase/auth";
const MainPage = () => {
  const navigate = useNavigate();

  // 유저 정보 가져오기
  const isLoggedIn = sessionStorage.key(0);
  // 메인 페이지 새로고침 시 user 의 display name 불러오지 못하는 부분 해결
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // 해결 방법 1
  // state 만들어 useEffect 안에 setstate 로 user 값 변경해주니 새로고침해도 불러와짐.
  // useEffect 가 return 후 실행되므로 깜빡이는 현상 발생. 개선 필요함.
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // 해결 방법 2
  // 기존 const user = authService.currentUser 가 새로고침시 displayName 을 불러오지 못하니
  // 세션스토리지에서 key 를 가져와 JSON.parse 안에 넣어줘서 해결. 유즈이펙트보다 쉽고 유즈이펙트 깜빡임도 사라짐.
  // const userSession = sessionStorage.getItem(isLoggedIn);
  // const user = JSON.parse(userSession ?? "");
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <MainPageWrapper>
      <UpWraper>
        <GreetingBox>
          <img src={require("../../assets/mainpage/상단 이미지.png")} />
          <GreetingTitle>
            <GreetingMent>팁퍼에서 시작하는</GreetingMent>
            <span>
              {/* {!isLoggedIn && <Username>고객님</Username>}
              {isLoggedIn && <Username>{user?.displayName}님</Username>} */}
              {isLoggedIn ? (
                <Username>{user?.displayName}님</Username>
              ) : (
                <Username>고객님</Username>
              )}
            </span>
            <Greetingment>의 금융관리</Greetingment>
          </GreetingTitle>
          <Greetingcontent>
            <div />
            제 1금융권의 상품만 다루는 안전한 목돈 만들기. 원하는 조건에 맞춰
            <p />
            상품을 찾아드릴게요. 한눈에 비교하고, 만기수령액을 확인해봐요.
          </Greetingcontent>
          <ProductFdButton onClick={() => navigate("/service")}>
            상품 찾기
          </ProductFdButton>
        </GreetingBox>
        <BankListBanner>
          <BankListBannerTitle>은행 바로가기</BankListBannerTitle>
          <img
            src={require("../../assets/mainpage/은행 바로가기.png")}
            style={{ marginLeft: "10px" }}
          />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop={true}
            observer={true}
            observeParents={true}
            style={{ borderRadius: "20px" }}
          >
            <BankBanner>
              <BankWrap>
                <img src={require("../../assets/logo/oori_logo.png")} />
                <a href="https://www.wooribank.com/">우리은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/hana_logo.png")} />
                <a href="https://www.kebhana.com/">하나은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/ibk_logo.png")} />
                <a href="https://www.ibk.co.kr/">기업은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/tnguq_logo.png")} />
                <a href="https://www.suhyup-bank.com/">수협은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/sc_logo.png")} />
                <a href="https://www.standardchartered.co.kr/np/kr/Intro.jsp">
                  SC제일은행
                </a>
              </BankWrap>
            </BankBanner>
            <BankBanner>
              <BankWrap>
                <img src={require("../../assets/logo/sh_logo.png")} />
                <a href="https://www.shinhan.com/index.jsp">신한은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/kb_logo.png")} />
                <a href="https://www.kbstar.com/">국민은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/tksdjq_logo.png")} />
                <a href="https://www.kdb.co.kr/index.jsp">산업은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/rhkdwn_logo.png")} />
                <a href="https://pib.kjbank.com/ib20/mnu/BPB0000000001">
                  광주은행
                </a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/busan_logo.png")} />
                <a href="https://www.busanbank.co.kr/ib20/mnu/BHP00001">
                  부산은행
                </a>
              </BankWrap>
            </BankBanner>
            <BankBanner>
              <BankWrap>
                <img src={require("../../assets/logo/oori_logo.png")} />
                <a href="https://www.dgb.co.kr/dgb_ebz_main.jsp">대구은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/nh_logo.png")} />
                <a href="https://banking.nonghyup.com/nhbank.html">농협은행</a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/jeju_logo.png")} />
                <a href="https://www.e-jejubank.com/JeJuBankInfo.do">
                  제주은행
                </a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/rudska_logo.png")} />
                <a href="https://www.knbank.co.kr/ib20/mnu/BHP000000000001">
                  경남은행
                </a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/wjsqnr_logo.png")} />
                <a href="https://cdn.ftoday.co.kr/news/photo/2https://www.jbbank.co.kr/">
                  전북은행
                </a>
              </BankWrap>
            </BankBanner>
            <BankBanner>
              <BankWrap>
                <img src={require("../../assets/logo/kbank_logo.png")} />
                <a href="https://www.kbanknow.com/ib20/mnu/PBKMAN000000">
                  케이뱅크
                </a>
              </BankWrap>
              <BankWrap>
                <img src={require("../../assets/logo/kakao_logo.png")} />
                <a href="https://www.kakaobank.com/">카카오뱅크</a>
              </BankWrap>
            </BankBanner>
            {/* <BankBanner>
            </BankBanner> */}
            {/* <SilderBanner>
              <a href="https://spib.wooribank.com/pib/Dream?withyou=PSTRS0147">
              <BannerImage>
              <img src={require("../../assets/banner/image/banner_01.PNG")} />
              </BannerImage>
              </a>
            </SilderBanner>
            <SilderBanner>
              <a href="https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp?lncd=01&grcd=21&tmcd=121&pdcd=0123&wvcd=***********&banner=ibk_main_mddl_01211210123">
                <BannerImage>
                  <img src={require("../../assets/banner/image/banner_02.PNG")} />
                  </BannerImage>
                  </a>
                  </SilderBanner>
                  <SilderBanner>
              <a href="https://spib.wooribank.com/pib/Dream?withyou=PSTRS0147">
                <BannerImage>
                <img src={require("../../assets/banner/image/banner_01.PNG")} />
                </BannerImage>
                </a>
            </SilderBanner>
            <SilderBanner>
              <a href="https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp?lncd=01&grcd=21&tmcd=121&pdcd=0123&wvcd=***********&banner=ibk_main_mddl_01211210123">
              <BannerImage>
              <img src={require("../../assets/banner/image/banner_02.PNG")} />
              </BannerImage>
              </a>
            </SilderBanner> */}
          </Swiper>
        </BankListBanner>
      </UpWraper>
      <DownWraper>
        <TodayTipTitle>오늘의 금융 팁</TodayTipTitle>
        <TodayTipComment>
          금융지식 또는 금융이슈를 전달해드려요. 차곡차곡 쌓은 지식을 통해
          선택의 폭을 넓혀봐요.
        </TodayTipComment>
        <Tips>
          <Tip>
            <TipTitle>정기예금</TipTitle>
            <TipComments>
              <TipComment>
                일정금액을 일정기간 동안 금융 기관에 맡기고
              </TipComment>
              <TipComment>정한 기한 안에는 찾지 않겠다고 약속하는</TipComment>
              <TipComment>예금이에요.</TipComment>
              <TipComment>한동안 사용하지 않을 시드머니가 있는</TipComment>
              <TipComment>친구들은 정기예금을 고려해봐도 좋아요.</TipComment>
            </TipComments>
            <img
              src={require("../../assets/mainpage/정기예금.png")}
              style={{ marginTop: "180px" }}
            />
          </Tip>
          <Tip>
            <TipTitle>정기적금</TipTitle>
            <TipComments>
              <TipComment>정해진 기간 동안 일정액을 매월 적립하고</TipComment>
              <TipComment>만기일에 약정금액을 지급받는 상품이에요.</TipComment>
              <TipComment>매달 혹은 일정기간, 꾸준히 저축하고 싶은</TipComment>
              <TipComment>친구들은 정기적금을 찾아보아요.</TipComment>
            </TipComments>
            <img src={require("../../assets/mainpage/정기적금.png")} />
          </Tip>
        </Tips>
        <Tips>
          <Tip>
            <TipTitle
              style={{
                marginBottom: "10px",
              }}
            >
              이자를 계산하는 법1
            </TipTitle>
            <img
              src={require("../../assets/mainpage/단리.png")}
              style={{ margin: "250px 20px 0 0" }}
            />
            <TipTitle>단리</TipTitle>
            <TipComments>
              <TipComment>단리는, 원금에 대해서만 이자가 발생하는</TipComment>
              <TipComment>계산 방법이에요.</TipComment>
              <TipComment>연 5.0%의 단리 상품이 있다고 하면,</TipComment>
              <TipComment>매년 동일한 금액의 이자가 붙게 돼요.</TipComment>
            </TipComments>
          </Tip>
          <Tip>
            <TipTitle
              style={{
                marginBottom: "10px",
              }}
            >
              이자를 계산하는 법2
            </TipTitle>
            <TipTitle>복리</TipTitle>
            <TipComments>
              <TipComment>
                복리는, 원금과 이자가 합쳐진 금액에서 다시
              </TipComment>
              <TipComment>이자가 붙는 계산 방법이에요.</TipComment>
              <TipComment>연 5.0%의 복리 상품이 있다고 하면,</TipComment>
              <TipComment>해마다 누적되는 이자가 커지게 돼요.</TipComment>
            </TipComments>
            <div
              style={{
                position: "relative",
                margin: "75px 0 0 200px",
              }}
            >
              <img
                src={require("../../assets/mainpage/복리화살표.png")}
                style={{
                  position: "absolute",
                  margin: "40px 0 0 0px",
                  width: "130px",
                }}
              />
              <img
                src={require("../../assets/mainpage/복리.png")}
                style={{ margin: "110px 0 0 0", position: "absolute" }}
              />
            </div>
          </Tip>
        </Tips>
      </DownWraper>
    </MainPageWrapper>
  );
};
export default MainPage;
//* 탑슬라이드 배너
const SilderBanner = styled(SwiperSlide)`
  width: 100%;
  height: 220px;
  img {
    background-size: cover;
  }
`;
// 은행 배너랩
const BankBannerWrap = styled.div`
  width: 400px;
  height: 250px;
  border: solid 1px #dedede;
  margin: 40px 0 0 25px;
  padding-top: 40px;
`;
// 은행 배너
const BankBanner = styled(SwiperSlide)`
  width: 100%;
  height: 220px;
  font-size: 30px;
  padding-top: 50px;
  text-align: center;
`;
