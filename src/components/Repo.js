import React from 'react'
import styled from 'styled-components';

function Repo(props) {
  
  
  
    return (


    <Item>
        {props.repo.name}
    </Item>
  )
}

export default Repo;


const Item = styled.div`
display: flex;
padding: 1% 2%;
border-bottom: 1px solid gray;
`