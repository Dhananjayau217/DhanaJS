
//need to handle both success and fail cases
function getUsers(onSuccess){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //Handle resolve and reject in the asynchronous API
            if(onSuccess){
                resolve([
                    {id:1,name:'dhana'},
                    {id:2,name:'pavan'},
                    {id:3,name:'uma'},
                ])
            }else{
                reject('failed to fetch data!')
            }
        },1000)
    })
}
// console.log(getUsers());

//fail case
getUsers(false)
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error);
})

//Output :  failed to fetch data!

//Success case  
getUsers(false)
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error);
})

//more often we consume the promises
//Fetch a user from the GitHub API
fetch('http://api.github.com/users/octocat')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.error(error)
})

/*Output:
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