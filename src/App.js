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
        setRepos(response.data.items)
      } catch (error) {
        console.error(error)
      }
    } 

useEffect(() => {
  // getRepositories()
}, [])

  return (
    <Page>
      <h2>Top 20 JavaScript Repos!</h2>
      <RepoList repos={repos} />
    </Page>
  );
}

export default App;

const Page = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 2% 15%;

  h2 {
    background-color: #113b46;
    text-align: center;
    color: white;
    font-size: 40px;
    padding: 1% 3%;
  }
`
