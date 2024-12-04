import { styled } from '..'

export const ContainerHeader = styled('header', {
    display: 'flex',
    flexDirection: 'row',
    padding: '3rem 0 ',
    width: '100%',
    maxWidth: '1500px',
    margin: '0 auto',

    button: {
        marginLeft: 'auto',
        position: 'relative',
        width: '48px',
        height: '48px',
        background: '$gray800',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',

        '&:hover': {
            opacity: 0.7,
        },

        span: {
            position: 'absolute',
            color: '$white',
            width: '20px',
            height: '20px',
            backgroundColor: '$green500',
            borderRadius: '100%',
            bottom: '32px',
            left: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

})
