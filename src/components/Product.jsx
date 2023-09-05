import React from 'react'
import styled from 'styled-components'
import { medium, small } from '../responsive'

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 250px;
  border-radius: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }

  ${medium({
    width: '30%',
  })}

  ${small({
    width: '70%',
  })}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
`

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  ${medium({
    height: '70%',
  })}
`

const DetailsWrapper = styled.div`
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  ${medium({
    height: '25%',
  })}
`

const Description = styled.p`
  font-size: 1rem;
  color: #585858;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.5rem;
`

const Price = styled.p`
  font-size: 1rem;
  color: #585858;
  padding: 0.5rem 0 0 0.5rem;
`

const Product = ({ product }) => {
  const { id, img, desc, price } = product
  return (
    <ProductWrapper key={id}>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <DetailsWrapper>
        <Description>{desc}</Description>
        <Price>&#8358;{price}</Price>
      </DetailsWrapper>
    </ProductWrapper>
  )
}

export default Product
