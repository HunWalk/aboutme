import { Colors } from ".";

const Fonts = {

    family: {
        default: 'Montserrat',
    },

    style: {
        title: {
            margin: 0,
            fontFamily: 'Montserrat',
            fontWeight: 900,
            color: Colors.black,
            fontSize: '2.5em',
            textTransform: 'uppercase'
        },
        subTitle: {
            fontFamily: 'Montserrat',
            fontWeight: '400',
            color: Colors.grey,
            fontSize: '1.5em',
            textTransform: 'uppercase'
        },
        smallTitle: {
            margin: 0,
            fontFamily: 'Montserrat',
            fontWeight: 900,
            color: Colors.black,
            fontSize: '1em',
            textTransform: 'uppercase'
        },
        sidebarLink: {
            textDecoration: 'none',
            fontSize: '1.5em',
            fontFamily: 'Montserrat',
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: Colors.black,
        }
    },

    size: {
        h1: '3em',
        h2: '2.7em',
        h3: '2.6em',
        h4: '2.5em',
        h5: '2em',
        h6: '1.5em',
        default: '1em',
    }

}

export default Fonts


