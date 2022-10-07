import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Repo(props) {
  

  
    return (

    <Item>
        <p><span>Repo Name:</span> {props.repo.name}</p>
        <p><span><FontAwesomeIcon icon={faStar} style={{color:'#e7cc09', fontSize:'24px'}} />: </span> {props.repo.stargazers_count}</p>
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