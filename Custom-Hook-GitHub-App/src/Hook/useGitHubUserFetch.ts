import { useEffect, useState } from "react";

interface gitHubUserType {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
    type: string
}

// Custom Hook
const useGitHubUserFetch = (url: string) => {

    const [gitHubUsers, setGitHubUsers] = useState<gitHubUserType[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setGitHubUsers(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [url])

    return { gitHubUsers, error, loading };
}

export default useGitHubUserFetch;