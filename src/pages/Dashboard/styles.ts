/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 100px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 714px;
  display: flex;

  input {
    flex: 1;
    height: 72px;
    border: none;
    padding: 0px 30px;
    border-radius: 5px 0 0 5px;
    font-size: 20px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${({ hasError }) => hasError
      && css`
        border-color: #f03442;
        border-right: none;
      `}

    ::placeholder {
      color: #a8a8b3;
      font-size: 20px;
    }
  }

  button {
    width: 210px;
    border: none;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.p`
  color: #f03442;
  margin-top: 5px;
`;

export const Repositories = styled.ul`
  margin-top: 120px;
  max-width: 714px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 112px;
    padding: 16px;
    border-radius: 5px;
    background: #fff;
    text-decoration: none;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 24px;

      strong {
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
