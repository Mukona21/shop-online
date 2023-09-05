import { css } from 'styled-components'

export const small = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `
}

export const medium = (props) => {
  return css`
    @media only screen and (max-width: 750px) {
      ${props}
    }
  `
}
