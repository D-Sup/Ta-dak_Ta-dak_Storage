import { useState } from 'react';
import styled from 'styled-components';
// import IconUploadLg from '../../assets/img/upload-file.svg'
// import IconUploadSm from '../../assets/img/s-upload-file.svg'

// 유저 정보 저장하는 state 전역으로 관리해서 <input>에 value, onChange 설정해주기

export function Input(props) {
  const [valid, setValid] = useState(true)

  return (
    <>
      <InputContainerStyle>
        <LabelStyle htmlFor={props.inputId}>{props.label}</LabelStyle>
        <InputStyle {...props} valid={valid} autoComplete='off'></InputStyle>
        {
          // 유효성 검사 통과 못할 경우 &&
          !valid&&
          <ValidationErrorStyle>*각각의 type에 맞는 에러메세지</ValidationErrorStyle>
        }
      </InputContainerStyle>

      
    {/* export function ImgUploadLgBtn() {
      return <ImgUploadLgLabelStyle type='file'/>
    }

    export function ImgUploadSmBtn() {
      return (
        <>
        <ImgUploadSmLabelStyle type='file'/>
        <input type='file' />
        </>
      )
    } */}
    </>
  );
}

const InputContainerStyle = styled.div`
  width: 322px;
  /* background-color: #ffffff; */
  margin-bottom: 16px;
`;

const LabelStyle = styled.label`
  display: block;
  font-size: var(--font--size-sm);
  color: var(--basic-color-7);
  line-height: 15px;
  margin-bottom: 10px;
`;

const InputStyle = styled.input`
  ::placeholder {
    color: var(--basic-color-8);
    font-size: var(--font--size-md);
  }
  background-color: transparent;
  width: 100%;
  font-size: var(--font--size-md);
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.valid ? 'var(--basic-color-8)' : '#eb5757')};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => (props.valid ? 'var(--basic-color-4)' : '#eb5757')};
  }
`;

const ValidationErrorStyle = styled.span`
  display: block;
  font-size: var(--font--size-sm);
  line-height: 14px;
  color: #eb5757;
  margin-top: 6px;
`;

// const ImgUploadCommonStyle = css`
//   background-repeat: no-repeat;
//   background-position: center; 
// `;


// const ImgUploadLgLabelStyle = styled.label`
//   ${ImgUploadCommonStyle}
//   background-image : url(${IconUploadSm});
//   width: 36px;
//   height: 36px;

// `;

// const ImgUploadSmLabelStyle = styled.label`
//   ${ImgUploadCommonStyle}
//   background-image : url(${IconUploadLg});
//   width: 50px;
//   height: 50px;
//   opacity: 1;
// `;