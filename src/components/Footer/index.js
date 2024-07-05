import styles from './Footer.module.scss';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';


const iconeProps = {
    color: '#FFFFFF',
    size: 24
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
            <FaFacebook {...iconeProps} />
            <XIcon style={{color: '#FFFFFF'}} {...iconeProps}/>
            <FaInstagram {...iconeProps}/> 
            </div>
            <span>
                Desenvolvido por Alura.
            </span>
        </footer>
    )
}