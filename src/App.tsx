import React from 'react';
import styled from "styled-components";
// @ts-ignore
import Login from "./static/images/14.png";

function App() {
  return (
    <>
      <header>
        <Container>
          <Header>
            <TopHeader>
              <nav>
                <List>
                  <ListItem><a href="#">О НАС </a></ListItem>
                  <ListItem><a href="#">СТОИМОСТЬ</a></ListItem>
                  <ListItem><a href="#">ДОП. УСЛУГИ</a></ListItem>
                  <ListItem><a href="#">ГАРАНТИИ</a></ListItem>
                  <ListItem><a href="#">НОВОСТИ</a></ListItem>
                </List>
              </nav>
              <Phone href="tel:0 800 000 000 00">0 800 000 000 00</Phone>
              <Login><img src={Login} alt=""/></Login>
            </TopHeader>
            <Content></Content>
            <Description></Description>
          </Header>
        </Container>
      
      </header>
    </>
  );
}

export default App;


export const Container = styled.div``
const List = styled.ul``
const ListItem = styled.li``
const Header = styled.div``
const TopHeader = styled.div``
const Content = styled.div``
const Description = styled.div``
const Login = styled.button``
const Phone = styled.a``