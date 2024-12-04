import { styled } from '../styles'

export const ContinaerSidebar = styled('aside', {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: '0',
  right: '-18.5rem',
  width: '23rem',
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

  h2: {
    fontSize: '$xl',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginBottom: '1rem',
  },
})
export const CloseButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',

  padding: '0',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.01)', // Um pequeno aumento do ícone no hover
  },

  '&:focus': {
    outline: 'none', // Remover a borda de foco
  },

  // Garantir que o ícone de imagem não ultrapasse o limite
  '& img': {
    width: '24px',
    height: '24px',
  },
});
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
  button: {
    background: 'blue',
    border: 'none',
    width: '0px'
  }
})

export const ImageContainerCart = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  overflow: 'hidden', // Adiciona isso para forçar o limite de overflow do contêiner

  img: {
    width: '100%', // Ajusta a largura para o contêiner
    height: '100%', // Ajusta a altura para o contêiner
    objectFit: 'cover', // Mantém o aspecto da imagem

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
