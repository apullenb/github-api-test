import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RepoList from './components/RepoList';
import axios from 'axios';


function App() {

    const [repos, setRepos] = useState([])

    const getRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/search/repositories?q=language:javascript')
        const sortRepos = response.data.items.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 20)
        setRepos(sortRepos)
      } catch (error) {
        console.error(error)
      }
    } 



  return (
    <Page>
      <h2>Top 20 JavaScript Repos!</h2>
      <h4>Want to See the Most Liked Repos?</h4>
      <button onClick={getRepositories}>View Now</button>
        <div className={repos.length > 0 ? '' : 'hide'}>
          <RepoList repos={repos} />
        </div>
    </Page>
  );
}

export default App;

const Page = styled.div`

margin: 2% 20%;

  h2 {
    background-color: #113b46;
    text-align: center;
    color: white;
    font-size: 40px;
    padding: 1% 3%;
    width: 100%;
  }

  h4 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  button {
    margin: 0 40%;
    max-width: 200px;
    background-color: #113b46;
    color: white;
    font-size: 19px;
    padding: 5px 25px;
    border: none;
    box-shadow: 2px 2px 3px gray;
    cursor: pointer;
  }

  .hide {
    display: none;
  }
`
