import styled from 'styled-components'

const ProfilePic = styled.img.attrs({
    className: 'ProfilePic'
})({
    marginTop: '2em',
    borderRadius: '7em',
    width: 'auto',
    maxWidth: '7em',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
})

export default ProfilePic