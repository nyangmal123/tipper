import styled from "styled-components";

// auth background
export const AuthBackground = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  background-color: #e9e9e9;
`;

// auth wrapper
export const AuthWrapper = styled.div`
  width: 420px;
  /* min-width: 400px; */
  background-color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

// auth logo, title
export const AuthLogo = styled.div`
  width: 150px;
  margin: 1.5rem 0;
`;
export const AuthLogoImg = styled.img`
  width: 100%;
`;
export const AuthTitle = styled.div`
  width: 300px;
  font-size: 1.4rem;
  font-weight: 600;

  margin-top: 1rem;
  text-align: center;
`;
export const AuthText = styled.span`
  color: #656666;
  font-size: 0.7rem;
  font-weight: 600;

  margin: 0.5rem 0 2.2rem;
`;

// auth form
export const AuthForm = styled.form``;
export const AuthInputWrapper = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
`;
export const AuthLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;
export const AuthInput = styled.input`
  height: 1.6rem;
  font-size: 0.9rem;
  border: 1px solid #c7cace;
  border-radius: 0.2rem;

  margin: 0.3rem 0 0.8rem;
  padding: 0.3rem;
`;
export const AuthButton = styled.button`
  width: 300px;
  height: 2.5rem;
  color: white;
  background-color: #1175c7;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;

  margin: 0.7rem 0;
`;

// social login form
export const SocialLoginTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;

  display: block;
  text-align: center;
  /* color: #656666; */
  margin: 0.1rem 0 0.6rem;
  position: relative;

  &::before {
    width: 130px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 2rem;
    top: 0.6rem;
    content: "";
  }

  &::after {
    width: 130px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    right: 2rem;
    top: 0.6rem;
    content: "";
  }
`;
export const SocialLoginForm = styled.div`
  width: 300px;

  margin: 0.8rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SocialLoginButton = styled.div`
  border: 1px solid #c7cace;
  border-radius: 0.2rem;
  width: 48%;
  height: 2.5rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* justify-content: center; */
  /* align-items: center; */
  margin-bottom: 0.4rem;
`;
export const SocialLoginButtonLogo = styled.div`
  width: 28px;

  padding: 4px 0 0 10px;
`;
export const SocialLoginButtonLogoImg = styled.img`
  width: 100%;
`;
export const SocialLoginButtonText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;

  margin: auto;
`;
