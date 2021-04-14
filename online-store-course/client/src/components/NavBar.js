import React, { useContext } from 'react';
import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory, NavLink } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem('token', '');
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)}>
              Админ панель
            </Button>
            <Button variant={'outline-light'} onClick={() => logOut()} className='ml-2'>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
