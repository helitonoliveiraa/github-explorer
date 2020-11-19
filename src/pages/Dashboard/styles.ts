/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
  hasFocus: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.colors.title};
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
    color: ${({ theme }) => shade(0.6, theme.colors.backgroundItem)};
    border: 2px solid ${({ theme }) => theme.colors.backgroundInput};
    background: ${({ theme }) => theme.colors.backgroundInput};

    ${({ hasError }) => hasError
      && css`
        border-color: #f03442;
        border-right: none;
      `}

    ::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 20px;
    }

    ${({ hasFocus }) => hasFocus && css`
      border-color: ${({ theme }) => theme.colors.primary};
      border-right: none;
    `}
  }

  button {
    width: 210px;
    border: none;
    border-radius: 0 5px 5px 0;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
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
    background: ${({ theme }) => theme.colors.backgroundItem};
    border: 2px solid ${({ theme }) => theme.colors.backgroundItem};
    text-decoration: none;

    transition: transform 0.3s, border-color 0.3s;

    &:hover {
      transform: translateX(10px);
      border-color: ${({ theme }) => theme.colors.primary};
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
        color: ${({ theme }) => theme.colors.titleCard};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.description};
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
