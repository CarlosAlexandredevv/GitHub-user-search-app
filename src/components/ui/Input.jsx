import { Search } from 'lucide-react';
import { useState } from 'react';

export function Input({ onDataFetch }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      onDataFetch(data);
    } catch (error) {
      console.error('Erro ao buscar dados', error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative flex items-center">
      <Search className="absolute left-3 text-username" />
      <input
        onChange={handleChange}
        type="text"
        className="w-full dark:bg-bg_container_dark shadow-lg p-4 pl-12 rounded-xl truncate outline-none 
        dark:text-white placeholder:truncate placeholder:pr-16"
        placeholder="Search GitHub username"
        value={username}
      />
      <button
        className="absolute right-2 text-white bg-submit p-2 rounded-md cursor-pointer hover:opacity-80 duration-300 active:scale-90 disabled:cursor-progress"
        disabled={loading}
      >
        Search
      </button>
    </form>
  );
}
