import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/turabe_logo.png';

function Logo() {
    const logoStyle={
        // position: 'fixed',
        // marginLeft: '2rem',
        // paddingTop: '2rem',
        display: 'inline',
        fontFamily: 'Cafe24 Ssurround',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '25px',
        letterSpacing: '-0.336005px',
        color: '#F5F4F3'}

  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <p style={logoStyle}>튜레이브</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Logo;