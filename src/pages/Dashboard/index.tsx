// eslint-disable-next-line prettier/prettier
import React, {
  useState, useEffect, FormEvent, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import SwitchButton from '../../components/SwitchButton';

import api from '../../services/api';

// eslint-disable-next-line prettier/prettier
import {
  Title, Form, Repositories, Error, Header,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const [focus, setFocus] = useState(false);
  const [inputError, setInputError] = useState('');
  const [newRepository, setNewRepository] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplore:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplore:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório!');
      return;
    }

    const repositoryExists = repositories.find(
      repository => repository.full_name === newRepository,
    );

    if (repositoryExists) {
      setInputError(
        'Este repositório já está na lista, informe um novo repositório!',
      );
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
      setFocus(false);
    } catch (err) {
      setFocus(false);
      setInputError('Erro nas busca por esse repositório!');
    }
  }

  function handleFocus() {
    setInputError('');
    setFocus(true);
  }

  return (
    <>
      <Header>
        <img
          src={title === 'light' ? logoLight : logoDark}
          alt="Logo Github Explore"
        />

        <SwitchButton />
      </Header>
      <Title>Explore Repositórios no Github.</Title>

      <Form
        hasError={!!inputError}
        hasFocus={!!focus}
        onSubmit={handleAddRepository}
      >
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          onFocus={() => handleFocus()}
          onBlur={() => setFocus(false)}
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.owner.login}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} color="#C9C9D4" />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
