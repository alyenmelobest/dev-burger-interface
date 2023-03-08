import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');

  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 80%;
  border-radius: 10px 0px 0px 10px;
`

export const ContainerItens = styled.div`
  height: 80%;
  padding: 25px 75px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #373737;
  border-radius: 0px 10px 10px 0px;

  img {
    width: 381px;
    height: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    margin-top: 25px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  padding-left: 10px;

  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;

  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
`

export const SignInLink = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  margin-top: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #cc1717;
`
