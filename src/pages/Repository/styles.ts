import styled from 'styled-components';
import { shade } from 'polished';

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

export const Issues = styled.div`
  margin-top: 80px;

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
      border-color: #04d361;
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
