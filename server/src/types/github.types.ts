export type GitHubRepository = {
    id: string,
    isPrivate: boolean,
    languages: GitHubRepositoryLanguage[],
    url: string,
};

export type GitHubRepositoryLanguage = {
    size: number,
    node: {
        name: string,
    }
};