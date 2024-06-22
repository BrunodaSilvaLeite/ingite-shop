import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1500px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  variants: {
    slidePositionLeft: {
      atStart: {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '150px',
          background:
            'linear-gradient(to left, transparent,  rgba(0, 0, 0, 60%))',
          pointerEvents: 'none',
          zIndex: 1,
        },
      },
      notAtStart: {},
    },
    slidePositionRight: {
      atStart: {},
      notAtStart: {
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '150px',
          top: 0,
          bottom: 0,
          right: 0,
          background:
            'linear-gradient(to right, transparent,  rgba(0, 0, 0, 60%))',
          pointerEvents: 'none',
          zIndex: 1,
        },
      },
    },
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  img: {
    objectFit: 'cover',
  },
})

export const ProductContainer = styled('div', {
  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,

    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },

    strong: {
      fontSize: '$lg',
      color: '$gray300',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
    button: {
      marginLeft: 'auto',
      position: 'relative',
      width: '56px',
      height: '56px',
      background: '$green500',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ArrowContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '50%',
  fill: '#fff',
  cursor: 'pointer',
})
