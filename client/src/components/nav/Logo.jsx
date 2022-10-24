import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = ({ largeLogo, light }) => {
  return (
    <LogoWrapper large={largeLogo} light={light}>
      <Link to='/'>
        <img src='/logo.png' alt='Logo' />
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  img {
    margin-right: 1rem;
    width: 250px;
  }

   a{
     display: flex;
     align-items: center;
     color:${props => props.light ? '#000' : '#fff'};
   }

  @media (min-width: 768px) {
    span {
      font-size: ${props => props.large ? '2rem' : '1.5rem'}
    }
  }
`

export default Logo