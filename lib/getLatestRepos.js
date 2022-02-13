import axios from "axios";

const getLatestRepos = (data, token) => {
  try {
    const username = data.githubUsername;
    if (token) {
      const res = axios
        .get(
          `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        )
        .then((res) => {
          let repos = res.data.items;
          let latestSixRepos = repos.splice(0, 6);
          // console.log("LATEST 6 repos", latestSixRepos);
          return latestSixRepos;
        })
        .catch((e) => {});
    } else {
      const res = axios
        .get(
          `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
        )
        .then((res) => {
          let repos = res.data.items;
          let latestSixRepos = repos.splice(0, 6);
          return latestSixRepos;
        })
        .catch((e) => {});
    }
  } catch (err) {}
};

export default getLatestRepos;
