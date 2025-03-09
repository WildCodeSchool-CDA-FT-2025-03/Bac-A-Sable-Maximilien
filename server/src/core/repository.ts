import { md5 } from "js-md5";



/**
 * Generates a GitHub repository URL from username and repository name
 * @param user - GitHub username or organization name
 * @param repo_name - Repository name
 * @returns Full GitHub URL in format: https://github.com/{user}/{repo_name}
 */
export const create_url = (user: string, repo_name: string): string => {
    return `https://github.com/${user}/${repo_name}`;
}

/**
 * Generates a unique ID for a repository using MD5 hash of its URL
 * @param repo - Repository object containing the URL
 * @returns MD5 hash string of the repository URL
 */
export function create_id(url: string): string {
    const hash = md5.create();
    hash.update(url);
    return hash.toString();
}
