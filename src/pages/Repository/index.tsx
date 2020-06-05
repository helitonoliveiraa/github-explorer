/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues, Pagination, Gif } from './styles';

interface RepositoryParams {
  repository: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setlimit] = useState(5);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api
      .get(
        `repos/${params.repository}/issues?page=${currentPage}&per_page=${limit}`,
      )
      .then(response => {
        const issuesArr: [] = response.data;
        setTotal(issuesArr.length);

        const totalPage = Math.ceil(issuesArr.length / limit);

        const pagesArr: number[] = [];
        for (let i = 1; i <= totalPage; i += 1) {
          pagesArr.push(i);
        }

        setPages(pagesArr);

        setIssues(issuesArr);
      });
  }, [params.repository, currentPage]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        ''
      )}
      {repository ? (
        <Issues>
          {issues.map(issue => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </Issues>
      ) : (
        ''
      )}
      {repository ? (
        <Pagination>
          <button
            type="button"
            disabled={currentPage < 2}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FiChevronLeft size={20} />
            Previus
          </button>

          <button
            type="button"
            disabled={pages.length === 0}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
            <FiChevronRight size={20} />
          </button>
        </Pagination>
      ) : (
        ''
      )}
      ;
    </>
  );
};

export default Repository;
