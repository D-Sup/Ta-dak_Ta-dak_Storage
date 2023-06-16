import styled from 'styled-components';

import { ProfileLg } from './Profile';

import IconUploadLg from '../../assets/img/upload-file.svg'
import IconUploadMd from '../../assets/img/s-upload-file2.svg'
import IconUploadSm from '../../assets/img/s-upload-file.svg'


export function Input(props) {

  return (
    <>
      <InputContainerStyle>
        <div>
          <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
          <InputStyle {...props} autoComplete='off'></InputStyle>
        </div>
        {
          // 유효성 검사 통과할 경우 &&
          props.valid &&
          <ValidationSuccessStyle>{props.alertMsg}</ValidationSuccessStyle>
        }
        {
          // 유효성 검사 통과 못할 경우 &&
          !props.valid &&
          <ValidationErrorStyle>{props.alertMsg}</ValidationErrorStyle>
        }
      </InputContainerStyle>
    </>
  );
}

export function FileInputLg(props) {
  return (
    <>
      <FileLgLabelStyle htmlFor={props.id}>
        <ProfileLg url={props.url} />
      </FileLgLabelStyle>
      <FileInputStyle {...props} id={props.id} type="file"></FileInputStyle>
    </>
  ); 
}

export function FileInputMd(props) {
  return (
    <>
      <FileMdLabelStyle htmlFor={props.id}></FileMdLabelStyle>
      <FileInputStyle {...props} id={props.id} type="file"></FileInputStyle>
    </>
  );
}

export function FileInputSm(props) {
  return (
    <>
      <FileSmLabelStyle htmlFor={props.id}></FileSmLabelStyle>
      <FileInputStyle {...props} id={props.id} type="file"></FileInputStyle>
    </>
  );
}

const InputContainerStyle = styled.div`
  width: 322px;
  margin-bottom: 16px;
  div {
    background-color: #ffffff;
  }
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

const ValidationSuccessStyle = styled.span`
  display: block;
  font-size: var(--font--size-sm);
  line-height: 14px;
  color: var(--basic-color-4);
  margin-top: 6px;
`;

const ValidationErrorStyle = styled(ValidationSuccessStyle)`
  color: #eb5757;
`;

const FileLgLabelStyle = styled.label`
  display: inline-block;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    background: url(${IconUploadSm}) no-repeat center / auto;
    cursor: pointer;
  }
`;

const FileMdLabelStyle = styled.label`
  display: inline-block;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: url(${IconUploadMd}) no-repeat center / auto;
`;

const FileSmLabelStyle = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: url(${IconUploadLg}) no-repeat center / auto;
`;

const FileInputStyle = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;