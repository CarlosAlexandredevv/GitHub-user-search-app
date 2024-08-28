import { useState } from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Title } from './ui/Title';

export function GitHubUserSearch() {
  const [userData, setUserData] = useState(null);
  const handleDataFetch = (data) => {
    setUserData(data);
  };
  return (
    <main className="bg-bg_light dark:bg-bg_dark w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[700px] p-4 md:p-8">
        <Title />
        <Input onDataFetch={handleDataFetch} />
        {userData && <Card userData={userData} />}
      </div>
    </main>
  );
}
