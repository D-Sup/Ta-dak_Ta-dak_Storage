import { useNavigate } from 'react-router-dom'

import styled from 'styled-components';

import { ReactComponent as IconArrowLeft } from '../../assets/img/icon-arrow-left.svg'

interface SearchHeaderProps {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeader = ({ value, setValue }: SearchHeaderProps) => {

  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate(-1)
  }

  return (
    <SearchHeaderStyle>
      <BackBtnStyle>
        <IconArrowLeft onClick={handleGoBack} />
      </BackBtnStyle>
      <label className='a11y-hidden' htmlFor='searchId'>계정 검색</label>
      <input id='searchId' type='text' placeholder='계정 검색' value={value} onChange={(e) => setValue(e.target.value)} />
    </SearchHeaderStyle>
  )
}

export default SearchHeader

const SearchHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);
  @media (min-width: 768px) {
    background-color: var(--background-color);
  }

  #searchId {
    width: 90%;
    height: 32px;
    background: var(--input-box-color);
    color: var(--invert-color);
    box-shadow: 0 0 10px var(--search-bar-color);
    border-radius: 32px;
    padding: 0 16px;
    font-size: var(--font--size-md);
    font-weight: var(--font--Regular);

    &::placeholder {
      color: var(--text-color-2);
    }
  }

  @media (min-width: 768px) {
    box-shadow: none;
    #searchId {
      width: var(--basic-width);
      /* margin: auto;
      margin-bottom: -5px;
      border-radius: 10px; */
    }
  }
  `;

const BackBtnStyle = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;