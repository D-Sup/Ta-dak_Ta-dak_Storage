import { useEffect, useState, SVGProps } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useUserInfo from 'hooks/useUserInfo';

import styled from 'styled-components';

import { ReactComponent as IconHome } from '../../assets/img/icon-web-home.svg';
import { ReactComponent as IconHeart } from '../../assets/img/s-icon-heart.svg';
import { ReactComponent as IconMessage } from '../../assets/img/icon-message.svg';
import { ReactComponent as IconEdit } from '../../assets/img/icon-edit.svg';
import { ReactComponent as IconUser } from '../../assets/img/icon-user.svg';

const WebNavBar = () => {

  const location = useLocation();

  const { accountname } = useUserInfo()
  const hideNavbarPaths = [
    '/splash',
    '/introduce',
    '/login',
    '/signup',
    '/signup/profile'
  ]
  const hideNavbar = hideNavbarPaths.includes(location.pathname);
  const navItems = [
    { to: '/feed', component: IconHome, label: '홈' },
    // { to: '/recommendfeed', component: IconHeart, label: '추천게시글' },
    { to: '/chat', component: IconMessage, label: '채팅' },
    { to: '/upload', component: IconEdit, label: '게시물 작성' },
    { to: `/profile/${accountname}`, component: IconUser, label: '프로필' },
  ];

  const [selectedIcon, setSelectedIcon] = useState<((props: SVGProps<SVGSVGElement>) => JSX.Element)>();

  const handleIconClick = (iconName: ((props: SVGProps<SVGSVGElement>) => JSX.Element)): void => {
    setSelectedIcon(iconName);
  };

  useEffect(() => {
    const item = navItems.find((item) => location.pathname.includes(item.to));
    if (item) {
      setSelectedIcon(item.component);
    }
  }, [location.pathname, selectedIcon]);

  return (
    <>
      {
        !hideNavbar &&
        <WebNavBarStyle>
          {/* <NavBarStyle> */}
          {navItems.map((item) => (
            <NavBarItemStyle
              to={item.to}
              key={item.to}
              onClick={() => handleIconClick(item.component)}
              selected={selectedIcon === item.component}
              style={{ background: selectedIcon === item.component ? 'var(--basic-color-1)' : 'var(--background-color)' }}
              isClick={selectedIcon === item.component}
            >
              <item.component
                width={30}
                height={30}
                stroke={selectedIcon === item.component ? '#fff' : 'var(--text-color-2)'}
              />
              <span style={{ color: selectedIcon === item.component ? '#fff' : 'var(--text-color-2)' }}>

                {item.label}</span>
            </NavBarItemStyle>
          ))}
          {/* </NavBarStyle> */}
        </WebNavBarStyle>
      }
    </>
  )
}

export default WebNavBar;

const SettingStyle = styled.div`
  margin-top: 29px;
  padding: 23px;
  width: 220px;
  height: 180px;
  background-color: var(--background-color);
  border: 2px solid var(--basic-color-1);
  border-radius: 30px;
`;

const WebNavBarStyle = styled.div`
  width: 220px;
  height: 594px;
  margin: 0 100px 0 0;
  @media (min-width: 1500px) {
    margin: 0 0 0 172px; // 팔로우 추천, 네비게이션 바의 너비 차이 만큼 오른쪽으로 땡기기
    transform: translateX(-30%);
  }
`;

const NavBarStyle = styled.div`
  width: 220px;
  height: 555px;
  padding: 25px 23px;
  background-color: var(--background-color);
  border: 2px solid var(--basic-color-1);
  border-radius: 30px;
`

const NavBarItemStyle = styled(Link) <{ selected: boolean, isClick: boolean }>`
  padding: 15px;
  width: 85%;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 28px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;

  &:hover {
    background-color: red;
  }

  &:last-child {
  margin-bottom: 0px;
  }

  span {
    font-weight: 700;
    font-size: var(--font--size-lg);
    line-height: 1.5;
    padding-top: 3px;
    color: ${(props) => props.isClick ? '#FFF' : 'var(--text-color-2)'}
  }
  span:hover {
    color: #FFF;
  }
  `;

const SettingItemStyle = styled(NavBarItemStyle)`
  strong {
    color: var(--text-color-2);
    padding-top: 3px;
  }
`;