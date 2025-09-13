export const fetchGitHubUserProfile = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
    return data;
}