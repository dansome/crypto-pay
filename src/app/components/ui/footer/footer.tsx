import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__inner}>
                <Image className={styles.footer__logo} src={'/svg/logo.svg'} width={64} height={64} alt={'logo'}></Image>
                <div className={styles.footer__links}>
                    <a className='link' href={'#use-cases'}>Use cases</a>
                    <a className='link' href={'#features'}>Features</a>
                    <a className='link' href={'#how-to-start'}>How to start</a>
                </div>
                <a href={'#how-to-start'}><Button type='transparent' title='Get started'></Button></a>
            </div>
            <div className={styles.footer__license}>©2023 Crypto Bot</div>
        </div>
    );
}

export default Footer;