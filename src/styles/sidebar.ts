import { styled } from '../styles'

export const ContinaerSidebar = styled('aside', {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: '0',
  right: '-18.5rem',
  width: '25rem',
  height: '100%',
  backgroundColor: '$gray800',
  boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
  transition: 'right 0.3s ease',
  padding: '2rem 3rem ',
  zIndex: 2,
  variants: {
    isVisible: {
      true: {
        right: '0',
      },
      false: {
        right: '-600px',
      },
    },
  },
  img: {
    cursor: 'pointer',
    position: 'absolute',
    right: '2rem',
  },
  h2: {
    fontSize: '$xl',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginBottom: '1rem',
  },
})
export const ProductCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '25rem',
  maxHeight: '24rem',
  overflowY: 'scroll',
  overflowX: 'hidden',
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray900',
    borderRadius: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray500',
    borderRadius: '8px',
  },
})
export const ProductCart = styled('div', {
  display: 'flex',
  gap: '1rem',

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'normal',
    color: '$gray300',
  },
  div: {
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  p: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',
    marginTop: '1rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainerCart = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const FooterSidebar = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  marginBottom: '4rem',
  gap: '1rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '> div:nth-of-type(2)': {
    marginBottom: '4rem',
    span: {
      fontSize: '$md',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '$xl',
    },
  },

  '> div:nth-of-type(1)': {
    span: {
      fontWeight: 'normal',
      color: '$gray300',
    },
  },
  button: {
    padding: '1.5rem',
    backgroundColor: '$green500',
    border: 'none',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
