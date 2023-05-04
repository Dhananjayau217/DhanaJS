async function getUser(){
    const response=await fetch('http://api.github.com/users/octocat')
    const data=await response.json()
    console.log(data)
}
//Execute aysnc function
getUser();
/*Output:
E:\ES6>node asyncawait1.js
{
  login: 'octocat',
  id: 583231,
  node_id: 'MDQ6VXNlcjU4MzIzMQ==',
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'The Octocat',
  company: '@github',
  blog: 'https://github.blog',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 8,
  followers: 9095,
  following: 9,
  created_at: '2011-01-25T18:44:36Z',
  updated_at: '2023-04-22T11:18:59Z'
}
*/
async function getUser(){
    try{
    const response=await fetch('http://api.github.com/users/octocat')
    const data=await response.json()
    console.log(data)
}catch(error){
    console.error(error);
}
}