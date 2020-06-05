import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props: FormProps) =>
      props.hasError &&
      css`
        border-color: #e53030;
        span {
          display: block;
          text-align: center;
          color: #e53030;
          background-color: #e53030;
          max-width: 501px;
          margin: 2px 0px 0px 3px;
          border-radius: 4px;
        }
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #0000cd;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#0000CD')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  text-align: center;
  color: #fff;
  background-color: #e53030;
  max-width: 501px;
  margin: 2px 0px 0px 3px;
  border-radius: 4px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 715px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      border-radius: 50%;
      width: 64px;
      height: 64%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
