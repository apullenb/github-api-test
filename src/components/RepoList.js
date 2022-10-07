import React from 'react'
import styled from 'styled-components';
import Repo from '../components/Repo'

function repoList(props) {

  return (
    <RepoBox>
        {props.repos.map((r, i) => {
           return <div key={i}><Repo repo={r} /> </div>
        })}
        
    </RepoBox>
  )
}

export default repoList;


const RepoBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
margin: 5%;
padding: 1%;
background-color: #c9dee3ff;
`

