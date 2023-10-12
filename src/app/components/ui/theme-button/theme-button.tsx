'use client'

import Image from 'next/image';
import styles from './theme-button.module.scss';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className={styles.themeButton} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            <Image className={styles.themeButton__img} src={resolvedTheme === 'dark' ? '/svg/moon.svg' : '/svg/sun.svg'} width={32} height={32} alt={'theme button image'}></Image>
        </div>
    );
}

export default ThemeButton;