const devlogs = document.getElementById("testing");

const projectRepos = repos.map( repo => ({
    name: repo.name,
    url: repo.html_url,
    //for main page ^
}));
        
// await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
//   owner: 'BUILDERS-DEPOT',
//   repo: {repo.name},
//   path: 'devlogs.md',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })