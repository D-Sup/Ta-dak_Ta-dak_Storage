import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import { ReactComponent as Tadak} from '../assets/img/tadak.svg';
import { ReactComponent as Fire} from '../assets/img/fire.svg';
import { ReactComponent as WoodFire} from '../assets/img/woodfire.svg';
import { ReactComponent as SubTitle} from '../assets/img/subtitle.svg';
import { ReactComponent as FireworkR} from '../assets/img/firework-r.svg';
import { ReactComponent as FireworkL} from '../assets/img/firework-l.svg';
import { ReactComponent as Kakao}  from '../assets/img/icon-kakao.svg';
import { ReactComponent as Google} from '../assets/img/icon-google.svg';
import { ReactComponent as Facebook} from '../assets/img/icon-facebook.svg';

export default function SplashPage() {
  const navigate = useNavigate();
  return (
    <>
    <SplashPageStyle>
      <SplashCharacterContainer>
        <TitleStyle1></TitleStyle1>
        <TitleStyle2></TitleStyle2>
        <FireworkRStyle></FireworkRStyle>
        <FireworkLStyle></FireworkLStyle>
        <FireStyle></FireStyle>
        <WoodFireStyle></WoodFireStyle>
        <SubTitleStyle></SubTitleStyle>
      </SplashCharacterContainer>
        <section>
        <LoginModalStyle>
          <ul>
            <li>
              <BtnSocialStyle className='kakao' aria-label='카카오로 로그인'>
                <Kakao></Kakao>
                <p>카카오톡 계정으로 로그인</p>
              </BtnSocialStyle>
            </li>
            <li>
              <BtnSocialStyle className='google' aria-label='구글로 로그인'>
                <Google></Google>
                <p>구글 계정으로 로그인</p>
              </BtnSocialStyle>
            </li>
            <li>
              <BtnSocialStyle className='facebook' aria-label='페이스북으로 로그인'>
                <Facebook></Facebook>
                <p>페이스북 계정으로 로그인</p>
              </BtnSocialStyle>
            </li>
        </ul>
          <div>
            <Link to="/login">
              <button className='email-login'>이메일로 로그인</button>
            </Link>
            <span>|</span>
            <Link to="/signup">
              <button className='Signup'>회원가입</button>
            </Link>
        </div>
        </LoginModalStyle>
        </section>
    </SplashPageStyle>
    </>
  )
}

const SplashCharacterContainer = styled.div`
  text-align: center; 
`;

const firework1 = keyframes`
  0% {
    transform: rotate(8deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  50% {
    
    transform: rotate(8deg)
  }
  70% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(8deg);
  }
  `;
const firework2 = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-80px);
}
`
const firework3 = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-60px);
}
`
const loginmodal = keyframes`
  0% {
  opacity: 0;
  transform: translateY(0px);
}
  40% {
    opacity: 0;
    transform: translateY(0px);
}
  100% {
  opacity: 1;
  transform: translateY(-25vh);
}
`

const SplashPageStyle = styled.div `
background-color: #FFFFEA;
width: var(--basic-width);
height: var(--basic-height);
  section {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -150px
  }
  @media (min-width: 390px) {
    width: 100%;
    height: var(--basic-height);
    }  
`

const TitleStyle1 = styled(Tadak)`
  margin: 10vh 96px 0px 50px;
`

const TitleStyle2 = styled(Tadak)`
  margin: 10px 50px 0px 96px;
`

const FireStyle = styled(Fire)`
  margin: 0 auto;
  position: relative;
  top: 80px;
  left: -20px;
  z-index: 100;
  animation: ${firework1} 2s infinite;
  @media (min-width: 768px) {
    left: -10px;
    }  
`  

const FireworkRStyle = styled(FireworkR)`
  position: relative;
  left: 240px;
  top: -30px;
  animation: ${firework2} 2s infinite;
  @media (min-width: 768px) {
    left: -50px;
    top: 150px;
    }  
`

const FireworkLStyle = styled(FireworkL)`
  position: relative;
  top: -40px;
  left: -30px;
  animation: ${firework3} 2s infinite;
  @media (min-width: 768px) {
    left: -350px;
    top: 160px;
    }  
` 

const WoodFireStyle = styled(WoodFire)`
  position: relative;
  width: 400px;
  height: 400px;
  top: -190px;
`

const SubTitleStyle = styled(SubTitle)`
  position: relative;
  text-align: center;
  top: -20px 
`

const LoginModalStyle = styled.article`
width: var(--basic-width);
height: 100vh;
border-radius: 20px;
background-color: #ffffff;
position: relative;
top: -100px;
z-index: 101;
animation: ${loginmodal} 3.6s forwards;
  ul {
    list-style: none;
    position: relative;
    top: 20px
  }
  div {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
      button {
        font-size: var(--font--size-lg);
        color: var(--common-text-color-2);
      }
  }
  @media (min-width: 390px) {
    width: 100%;
    }
`
const BtnSocialStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 322px;
  height: 44px;
  margin: 20px auto;
  position: relative;
  border-radius: 44px;
  p {
    font-size: var(--font--size-md);
  }
  svg {
    margin-left: 14px;
  }
  &.kakao {
    border: solid 1px #F2C94C;
  }
  &.google {
    border: solid 1px #767676;
  }
  &.facebook {
    border: solid 1px #2D9CDB;
  }
  @media (min-width: 768px) {
    width: calc(100% - 40px);
    justify-content: center;
    gap: 10px;
    
    svg {
      margin-left: 0px;
    }
  }`