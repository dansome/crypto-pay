import Link from 'next/link';
import styles from './navbar.module.scss';
import Button from '../button/button';
import Image from 'next/image';
import ThemeButton from '../theme-button/theme-button';
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__inner}>
                <Image className={styles.navbar__logo} src={'/svg/logo.svg'} width={64} height={64} alt={'logo'}></Image>
                <div className={styles.navbar__links}>
                    <a className='link' href={'#use-cases'}>Use cases</a>
                    <a className='link' href={'#features'}>Features</a>
                    <a className='link' href={'#how-to-start'}>How to start</a>
                </div>
                <div className={styles.navbar__actions}>
                    <div className={styles.navbar__themeButton}>
                        <ThemeButton></ThemeButton>
                    </div>
                    <a href={'#how-to-start'}><Button type='secondary' title='Get started'></Button></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;