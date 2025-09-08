import useGitHubUserFetch from "./Hook/useGitHubUserFetch"

export default function App() {
  const { gitHubUsers, error, loading } = useGitHubUserFetch("https://api.github.com/users");
  console.log(gitHubUsers);

  if (loading) {
    return <div className="flex justify-center items-center">
      <img src="/loader.gif" alt="" />
    </div>
  }

  if (error) {
    return <p>ERROR : {error.message}</p>
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center m-8 text-black">GitHub Users</h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {gitHubUsers.map((user) => (
          <div key={user.login} className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
            <div className="relative">
              <img
                className="w-32 h-32 rounded-full ring-4 ring-blue-500/50 dark:ring-blue-400/50 object-cover"
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
              />
              <span className="absolute bottom-1 right-1 h-4 w-4 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
            </div>
            <div className="mt-4 text-center">
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.login}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium capitalize mt-1">{user.type}</span>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <a
                href={user.html_url}
                className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                View Profile
              </a>
              <a
                href="#"
                className="px-6 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200"
              >
                Connect
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
