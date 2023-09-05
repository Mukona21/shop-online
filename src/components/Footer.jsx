import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Logo from '../assets/favicon-32x32.png'
import { small, medium } from '../responsive'

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  color: #363535;

  ${medium({
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
  })}
`
const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  letter-spacing: 0.6rem;
`
const Text = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
`
const Social = styled.div`
  font-size: 2rem;
  color: #2ca1ef;
  display: flex;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
`
const CentreWrapper = styled.div`
  flex: 1;
`

const Links = styled.h3`
  cursor: pointer;
  text-transform: uppercase;
  line-height: 2;
  font-size: small;

  &:hover {
    text-decoration: underline;
  }
`
const Help = styled.div`
  flex: 1;
`

const Centre = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;

  ${medium({
    flexDirection: 'column',
  })}
`

const Right = styled.div`
  flex: 1;
`
const LogoWrapper = styled.div`
  flex: 1;
  font-weight: bold;
  color: #2ca1ef;
  font-size: 2rem;
  border: solid 1px #2ca1ef;
  padding: 0.2rem;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
`

const Image = styled.img`
  object-fit: cover;
  margin-right: 0.8rem;
`
const ListItem = styled.li`
  padding-bottom: 0.7rem;
  cursor: pointer;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <Wrapper>
        <Left>
          <Heading>Address</Heading>
          <Text>
            U/Musa Road, Bayan Loco, <br />
            Kafanchan Jema'a LGA, <br />
            Kaduna State <br /> +234 8129 437 651
          </Text>
          <Social>
            <FaTwitter className='twitter' />
            <BsLinkedin className='linkedin' />
            <FaFacebookSquare className='facebook' />
          </Social>
        </Left>
        <Centre>
          <CentreWrapper>
            <h3 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
              Quick Links
            </h3>
            <Links>Home</Links>
            <Links>About</Links>
            <Links>Contact</Links>
            <Links>Login</Links>
          </CentreWrapper>
          <Help>
            <h3 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
              Need Help
            </h3>
            <ul style={{ marginLeft: '-2rem' }}>
              <ListItem>How to register a product</ListItem>
              <ListItem>Ordering for an Item</ListItem>
              <ListItem>Product categories</ListItem>
              <ListItem>Payment Methods</ListItem>
            </ul>
          </Help>
        </Centre>
        <Right>
          <div className='logo'>
            <img src={Logo} />
            <span className='logo-text'>ShopOnline</span>
          </div>
          <small
            style={{
              marginTop: '1.2rem',
              fontSize: '1rem',
              letterSpacing: '0.25rem',
            }}
          >
            Shop with ease
          </small>
        </Right>
      </Wrapper>
    </div>
  )
}

export default Footer
