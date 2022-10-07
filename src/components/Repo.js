import React from 'react'
import styled from 'styled-components';

function Repo(props) {
  
  console.log(props)
  
    return (


    <Item>
        <p><span>Repo Name:</span> {props.repo.name}</p>
        <p><span>Stars: </span> {props.repo.stargazers_count}</p>
    </Item>
  )
}

export default Repo;


const Item = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 2%;
margin: 2px;
background-color: white;
font-size: 17px;

span {
    font-weight: 500;
}
`