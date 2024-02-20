import { useEffect, useState, SVGProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useUserInfo from 'hooks/useUserInfo';

import styled from 'styled-components';

import { ReactComponent as IconHome } from '../../assets/img/icon-home.svg';
import { ReactComponent as IconHeart } from '../../assets/img/s-icon-heart.svg';
import { ReactComponent as IconMessage } from '../../assets/img/icon-message.svg';
import { ReactComponent as IconEdit } from '../../assets/img/icon-edit.svg';
import { ReactComponent as IconUser } from '../../assets/img/icon-user.svg';

const NavBar = () => {

  const location = useLocation();

  const { accountname } = useUserInfo()

  const hideNavBarPaths = [
    '/login',
    '/signup',
    '/signup/profile',
    '/upload',
    '/addproduct',
    '/profilemodification',
    '/chatroom',
  ];
  const hideNavBar = hideNavBarPaths.includes(location.pathname);

  const navItems = [
    { to: '/feed', component: IconHome, label: '홈' },
    { to: '/recommendfeed', component: IconHeart, label: '추천게시글' },
    { to: '/chat', component: IconMessage, label: '채팅' },
    { to: '/upload', component: IconEdit, label: '게시물 작성' },
    { to: `/profile/${accountname}`, component: IconUser, label: '프로필' },
  ];

  const [selectedIcon, setSelectedIcon] = useState<((props: SVGProps<SVGSVGElement>) => JSX.Element)>(IconHome);

  const handleIconClick = (iconName: ((props: SVGProps<SVGSVGElement>) => JSX.Element)): void => {
    setSelectedIcon(iconName);
  };

  useEffect(() => {
    const item = navItems.find((item) => item.to === location.pathname);
    if (item) {
      setSelectedIcon(item.component);
    }
  }, [location.pathname]);


  return (
    <>
      {!hideNavBar && (
        <NavBarStyle>
          <article>
            {navItems.map((item) => (
              <StyledLink
                to={item.to}
                key={item.to}
                onClick={() => handleIconClick(item.component)}
                selected={selectedIcon === item.component}
              >
                <div></div>
                <item.component
                  width={24}
                  height={24}
                  stroke={selectedIcon === item.component ? 'var(--basic-color-2)' : 'var(--text-color-2)'}
                  fill={selectedIcon === item.component ? 'var(--basic-color-2)' : 'var(--basic-color-1)'}
                />
                <span>{item.label}</span>
              </StyledLink>
            ))}
          </article>
        </NavBarStyle>
      )}
    </>
  );
}

export default NavBar;

const NavBarStyle = styled.nav`
  overflow: hidden;
  position: relative;
  width: var(--basic-width);
  background-color: #FFF;
  box-shadow: 0 -1px 3px gray;
  /* background-color: var(--basic-color-1); */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  article {
    display: flex;
    height: 60px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link) <{ selected: boolean }>`
  padding: 13px 10px;
  text-align: center;
  width: calc(100% / 5);
  height: 100%;
  border-radius: 10px;
  transition: background-color 0.3s;

  span {
    display: block;
    font-size: 0.6em;
    color: var(--text-color-2);
    line-height: 1.5;
  }

  &:hover {
    background-color: #fdf5b9;
  }
`;