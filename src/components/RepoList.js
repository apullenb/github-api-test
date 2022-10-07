import React from 'react'
import styled from 'styled-components';
import Repo from '../components/Repo'

function repoList(props) {

  return (
    <RepoCont>
       <RepoBox> {props.repos.slice(10, 19).map((r, i) => {
           return <div key={i}><Repo repo={r} /> </div>
        })}
       </RepoBox> 
       <RepoBox> {props.repos.slice(0, 9).map((r, i) => {
           return <div key={i}><Repo repo={r} /> </div>
        })}
       </RepoBox> 
    </RepoCont>
  )
}

export default repoList;

const RepoCont = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1.5px solid  #113b46;
margin: 5% 4%;
padding: 1% 2%;
background-color: #b3d9e3ff;

`

const RepoBox = styled.div`
display: flex;
flex-direction: column;
content-align: space-between;
width: 48%;
`

