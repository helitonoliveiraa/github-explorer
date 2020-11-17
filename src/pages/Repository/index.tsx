import React, {
  // eslint-disable-next-line indent
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import SwitchButton from '../../components/SwitchButton';

import api from '../../service/api';

// eslint-disable-next-line prettier/prettier
import {
  Header,
  SelectContainer,
  RepositoryInfo,
  Issues,
  PaginationContainer,
  PreviuosButton,
  NextButton,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface RepositoryProps {
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
  const { title } = useContext(ThemeContext);

  const [repository, setRepository] = useState<RepositoryProps | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setTotal(response.data.length);

      if (repository?.open_issues_count) {
        const totalIssues = repository?.open_issues_count;
        const totalPages = Math.ceil(totalIssues / limit);
        setPages(totalPages);
      }
    });

    api
      .get(
        `repos/${params.repository}/issues?page=${currentPage}&per_page=${limit}`,
      )
      .then(response => {
        setIssues(response.data);
      });
  }, [
    params.repository,
    limit,
    total,
    currentPage,
    repository?.open_issues_count,
  ]);

  function handlePrevious() {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <Header>
        <img src={title === 'light' ? logoLight : logoDark} alt="Logo" />

        <div>
          <Link to="/">
            <FiChevronLeft size={20} color="#A8A8B3" />
            Voltar
          </Link>
          <SwitchButton />
        </div>
      </Header>

      {repository && (
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
      )}

      <SelectContainer>
        <label htmlFor="qtd">
          Issues por página
          <select id="qtd" onChange={e => setLimit(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </label>
      </SelectContainer>

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} color="#C9C9D4" />
          </a>
        ))}
      </Issues>

      <PaginationContainer>
        <div>
          Total pages:
          {` ${pages}`}
        </div>

        <section>
          <PreviuosButton
            type="button"
            onClick={handlePrevious}
            isDesable={currentPage === 1}
          >
            <FiChevronLeft size={40} color="#fff" />
          </PreviuosButton>
          <span>
            Página:
            {` ${currentPage}`}
          </span>
          <NextButton
            type="button"
            onClick={handleNext}
            isDesable={currentPage >= pages}
          >
            <FiChevronRight size={40} color="#fff" />
          </NextButton>
        </section>
      </PaginationContainer>
    </>
  );
};

export default Repository;
