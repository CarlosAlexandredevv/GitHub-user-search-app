import { Hotel, Link, MapPin, Twitter } from 'lucide-react';

export function Card({ userData }) {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });

    const year = date.getFullYear();

    return `Joined ${day} ${month} ${year}`;
  }
  return (
    <div className="w-full flex flex-col gap-5 bg-bg_container_light dark:bg-bg_container_dark rounded-lg mt-5 p-4 md:p-8 shadow-lg">
      <div className="flex gap-5">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={
            userData.avatar_url || <p className="opacity-40">Not Avaliable</p>
          }
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="dark:text-white text-lg font-semibold">
            {userData.name || <p className="opacity-40">Not Avaliable</p>}
          </h1>
          <a
            target="blank"
            href={`https://github.com/${userData.login}`}
            className="text-sm text-username truncate w-[150px] sm:w-auto"
          >
            @{userData.login || <p className="opacity-40">Not Avaliable</p>}
          </a>
          <span className="text-gray-500 text-sm">
            {formatDate(userData.created_at) || (
              <p className="opacity-40">Not Avaliable</p>
            )}
          </span>
        </div>
      </div>

      <div>
        <p className="dark:text-white">
          {userData.bio || <p className="opacity-40">Not Avaliable</p>}
        </p>
      </div>

      <div className="flex justify-around rounded-lg gap-3 bg-bg_light dark:bg-bg_dark p-6 w-full">
        <div className="flex flex-col gap-1.5 items-center">
          <h3 className="text-sm text-icon dark:text-gray-300">Repos</h3>
          <span className="dark:text-white font-semibold">
            {userData.public_repos || (
              <p className="opacity-40">Not Avaliable</p>
            )}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 items-center">
          <h3 className="text-sm text-icon dark:text-gray-300">followers</h3>
          <span className="dark:text-white font-semibold">
            {userData.followers || <p className="opacity-40">Not Avaliable</p>}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 items-center">
          <h3 className="text-sm text-icon dark:text-gray-300">Following</h3>
          <span className="dark:text-white font-semibold">
            {userData.following || <p className="opacity-40">Not Avaliable</p>}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 max-w-full box-border truncate">
        <div className="flex gap-3">
          <MapPin className="text-icon dark:text-white" />
          <p className="dark:text-white text-icon truncate w-[200px]">
            {userData.location || <p className="opacity-40">Not Avaliable</p>}
          </p>
        </div>

        <div className="flex gap-3">
          <Link className="text-icon dark:text-white" />
          <a
            target="blank"
            href={userData.blog || null}
            className="dark:text-white  text-icon truncate w-[200px]"
          >
            {userData.blog || <p className="opacity-40">Not Avaliable</p>}
          </a>
        </div>

        <div className="flex gap-3">
          <Twitter className="text-icon dark:text-white" />
          <a
            target="blank"
            href={
              userData.twitter_username === null
                ? null
                : `https://twitter.com/${userData.twitter_username}`
            }
            className="dark:text-white  text-icon truncate w-[200px]"
          >
            {userData.twitter_username || (
              <p disabled className="opacity-40">
                Not Avaliable
              </p>
            )}
          </a>
        </div>

        <div className="flex gap-3">
          <Hotel className="text-icon dark:text-white" />
          <p className="dark:text-white text-icon">
            {userData.company || <p className="opacity-40">Not Avaliable</p>}
          </p>
        </div>
      </div>
    </div>
  );
}
