// import { Response } from "express";

const githubFetch = {
  repository: (userName: string) => {
    const url = `users/${userName}/repos`;
    return github_fetch(url);
  },

  languages: async (userName: string, projectName: string) => {
    const url = `repos/${userName}/${projectName}/languages`;
    return github_fetch(url);
  },
};

function github_fetch(url: string) {
  let options = {
    method: "GET",
  } as RequestInit;

  if (
    process.env.GITHUB_API_KEY !== undefined &&
    process.env.GITHUB_API_KEY.length > 0
  ) {
    options = {
      ...options,
      headers: { Authorization: process.env.GITHUB_API_KEY },
    };
  }

  return fetch(`https://api.github.com/${url}`, options);
}

export default githubFetch;
