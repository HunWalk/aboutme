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
            fontSize: '4em'
        },
        subTitle: {
            fontFamily: 'Montserrat',
            fontWeight: 'normal',
            color: Colors.grey,
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
        h1: '4em',
        h2: '3.5em',
        h3: '3em',
        h4: '2.5em',
        h5: '2em',
        h6: '1.5em',
        default: '1em',
    }

}

export default Fonts


