
import { MoreVert, Search } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  height: 60px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  background-color: #c6c3c3;
  border-radius:6px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 60%;
  margin-top: 10px;
`;
const Searchbar = () => {
    return (
        <Container>
            <SearchContainer>
                <Search style={{ color: "Black", fontSize: 19 }} />
                <Input style={{ width: "60%" }} placeholder="Search contacts" />
                <IconButton aria-label="settings">
                </IconButton>
            </SearchContainer>
        </Container>
    )
}

export default Searchbar