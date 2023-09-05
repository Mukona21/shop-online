import React from 'react'
import styled from 'styled-components'
import Product from '../components/Product'
import products from '../products'
import { medium } from '../responsive'

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 5rem;

  ${medium({
    width: '90%',
  })}
`

const Section = styled.section`
  padding: 2rem 0;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6189db;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  ${medium({
    flexDirection: 'column',
  })}
`

const Heading = styled.h3`
  color: #fff;
  font-weight: bold;
`

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  ${medium({
    justifyContent: 'space-around',
  })}
`
const Search = styled.div`
  ${medium({
    flexDirection: 'column',
  })}
`

const SearchInput = styled.input`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin-right: 0.5rem;

  &:focus {
    outline: none;
  }

  ${medium({
    width: '100%',
  })}
`

const Button = styled.button`
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-transform: uppercase;

  ${medium({
    margin: '1rem 0',
    width: '100%',
  })}
`

const ProductListing = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading>Products</Heading>
        <Search>
          <SearchInput type='text' placeholder='Search Product' />
          <Button>Search</Button>
        </Search>
      </HeaderWrapper>
      <Section>
        <ProductsWrapper>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsWrapper>
      </Section>
      <Section>
        <ProductsWrapper>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsWrapper>
      </Section>
      <Section>
        <ProductsWrapper>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsWrapper>
      </Section>
    </Wrapper>
  )
}

export default ProductListing
