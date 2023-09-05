import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { medium } from '../responsive'

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem 0;

  ${medium({
    width: '90%',
  })}
`

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  outline: none;
  border: solid 1px gray;
  margin-bottom: 1.5rem;
  background-color: #fff;
  width: 100%;
  font-size: 1.2rem;
`

const Button = styled.button`
  border: none;
  padding: 1rem 0;
  margin-bottom: 1rem;
  background-color: ${(props) => props.bg};
  border-radius: 0.25rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`
const HorizontalLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Text = styled.div`
  text-align: center;
  font-weight: 600;
  margin: 1rem 0;
`
const PasswordWrapper = styled.div`
  position: relative;
`
const PasswordIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
`
const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
`
const TextSmall = styled.small`
  color: rgb(55, 65, 81);
  padding: 0 0.2rem;
`
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <Wrapper>
      <h1>Sign In</h1>
      <Form>
        <Input type='text' placeholder='Email address' />
        <PasswordWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Your password'
          />
          <PasswordIconWrapper onClick={toggleShowPassword}>
            {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
          </PasswordIconWrapper>
        </PasswordWrapper>
        <ForgotPasswordWrapper>
          <TextSmall>
            Don't have an account?
            <Link
              to='/sign-up'
              style={{
                color: 'red',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              {' '}
              Register
            </Link>
          </TextSmall>
          <TextSmall>
            <Link
              to='/forgot-password'
              style={{
                color: '#3B8DDD',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Forgot password
            </Link>
          </TextSmall>
        </ForgotPasswordWrapper>
        <Button bg={'#209CEE'}>Sign in</Button>
        <HorizontalLine>
          <hr style={{ width: '45%' }} />
          <Text> OR </Text>
          <hr style={{ width: '45%' }} />
        </HorizontalLine>
        <Button bg={'#EE4360'}>Continue with Google</Button>
      </Form>
    </Wrapper>
  )
}

export default Signin
