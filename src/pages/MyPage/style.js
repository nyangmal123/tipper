import styled from "styled-components";

export const MyPageWrapper = styled.div`
  background-color: #f4f5f6;
  width: 100%;
  display: flex;
  gap: 200px;
  height: 100vh;
  /* align-items: center; */
  /* justify-content: center; */
`;
//여기는 왼쪽 박스 스타일구역
export const LeftBox = styled.div`
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
  box-sizing: content-box;
  background-color: #fff;
`;
export const UserNicknameDiv = styled.div`
  width: 380px;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
  gap: 20px;
`;

export const UserText = styled.h3`
  font-size: 23px;
`;
export const UserContentDiv = styled.div`
  width: 380px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
  height: 172px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogOutBtn = styled.button`
  width: 84px;
  height: 32px;
  border: 1px solid #aaa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #888;
`;

export const UserAccountDiv = styled.div`
  display: flex;
  width: 380px;
  height: 72px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

export const UserHistoryDiv = styled.div`
  display: flex;
  width: 380px;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
`;

export const HistoryCategory = styled.div`
  width: 380px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
//여기서부터는 오른쪽 박스 스타일 구역
export const RightBox = styled.div`
  /* width: 900px; */
  height: 800px;
  /* background-color: #f4f5f6; */
  padding: 20px;
  display: flex;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RightWrapper = styled.div`
  width: 530px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
`;

export const ChangePasswordDiv = styled.div`
  display: flex;
  height: 380px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`;
export const UserInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 50px;
  padding: 3px;
`;
export const EnrollNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: 10px;
  margin-top: 20px;
`;
export const ChangeNickNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50px;
`;
export const StyledIcons = styled.img`
  width: 40px;
  height: 40px;
`;
export const CategoryImg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SaveBtn = styled.button`
  background-color: #6a24ff;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  color: white;
`;

//예금적금 버튼
export const ProductTypesBtn = styled.button`
  width: 122px;
  height: 46px;
  border-radius: 15px;
  background-color: white;
`;

//내가 쓴 글 컴포넌트 스타일
export const UserWriteWrapper = styled.div`
  width: 887px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  /* border: 1px solid #ccc; */
`;
export const ListCard = styled.div`
  width: 275px;
  height: 567px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
`;

export const CardCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SecondTitle = styled.p`
  display: flex;
  gap: 30px;
  color: #999;
`;
export const Block = styled.div`
  width: 20px;
  height: 25px;
`;
export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
