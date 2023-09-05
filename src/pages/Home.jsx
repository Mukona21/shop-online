import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/shopping.jpg'
import Footer from '../components/Footer'
import Product from '../components/Product'
import products from '../products'
import { medium } from '../responsive'

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;

  ${medium({
    width: '90%',
  })}
`

const Hero = styled.div`
  height: 400px;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const HeroText = styled.h2`
  position: absolute;
  top: 10rem;
  left: -2rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem 1rem 1rem 4rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #fff;
  line-height: 3rem;

  ${medium({
    fontSize: '1rem',
  })}
`
const Section = styled.section`
  padding: 2rem 0;
`
const TextSection = styled.h4`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: ${(props) => props.bg};
  color: #fff;
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

const Home = () => {
  return (
    <>
      <Hero>
        <Image src={HeroImage} alt='hero' />
        <HeroText>
          <span
            style={{
              fontSize: '2.5rem',
              borderBottom: 'solid 4px #e75151',
              fontWeight: 'bold',
            }}
          >
            Shop with ease
          </span>
          <br />
          Get your products delivered in good time
        </HeroText>
      </Hero>
      <Wrapper>
        <Section>
          <TextSection bg='#209CEE'>Latest Products</TextSection>
          <ProductsWrapper>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsWrapper>
        </Section>
        <Section>
          <TextSection bg='#6189DB'>Fashion/Clothing</TextSection>
          <ProductsWrapper>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsWrapper>
        </Section>
        <Section>
          <TextSection bg='#7D76C2'>Electronics</TextSection>
          <ProductsWrapper>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsWrapper>
        </Section>
      </Wrapper>
    </>
  )
}

export default Home
