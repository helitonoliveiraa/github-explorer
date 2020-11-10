import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import api from '../../service/api';

// eslint-disable-next-line prettier/prettier
import {
  Title, Form, Repositories, Error,
} from './styles';

interface Respository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState<Respository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório!');
      return;
    }

    try {
      const response = await api.get<Respository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
    } catch (err) {
      setInputError('Erro nas busca por esse repositório!');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Logo Github Explore" />
      <Title>Explore Repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.owner.login} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} color="#C9C9D4" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
