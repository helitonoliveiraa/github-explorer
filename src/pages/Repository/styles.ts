/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isDesable?: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-right: 10px;

      svg {
        margin-right: 4px;
      }

      font-size: 16px;
      color: #a8a8b3;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#a8a8b3')};
      }
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 32px;

      strong {
        font-size: 36px;
        color: ${({ theme }) => theme.colors.title};
      }

      P {
        font-size: 20px;
        color: #737380;
        margin-top: 12px;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: ${({ theme }) => theme.colors.title};
      }

      span {
        display: block;
        font-size: 20;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const SelectContainer = styled.div`
  margin-top: 70px;

  label {
    color: #6c6c80;
    margin: 5px;

    select {
      border: 1px solid #6c6c80;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 10px;

  a {
    display: flex;
    align-items: center;
    height: 112px;
    padding: 0 24px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.backgroundItem};
    border: 2px solid ${({ theme }) => theme.colors.backgroundItem};
    text-decoration: none;
    transition: transform 0.3s, border-color 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      border-color: ${({ theme }) => theme.colors.primary};
    }

    div {
      strong {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.titleCard};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.description};
        margin-top: 8px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;

export const PaginationContainer = styled.footer`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 20;
    color: #6c6c80;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin: 0 30px;
      color: #6c6c80;
      padding: 0 4px;
    }
  }

  &::after {
    content: '';
  }
`;

export const PreviuosButton = styled.button<ButtonProps>`
  height: 72px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  opacity: 1;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }

  & + button {
    margin-left: 30px;
  }

  ${({ isDesable }) =>
    isDesable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      :disabled ;
    `}
`;

export const NextButton = styled.button<ButtonProps>`
  height: 72px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 1;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }

  & + button {
    margin-left: 30px;
  }

  ${({ isDesable }) =>
    isDesable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      :disabled ;
    `}
`;
