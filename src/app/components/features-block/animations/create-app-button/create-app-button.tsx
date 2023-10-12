import Image from 'next/image';
import styles from './create-app-button.module.scss';
import clsx from 'clsx';

interface CreateAppButtonProps {
    active: boolean;
}

const CreateAppButton = ({ active }: CreateAppButtonProps) => {
    return (
        <div className={clsx(styles.createAppButton, active && styles.active)}>
            <div className={styles.createAppButton__button}>
                <Image src={'/png/animations/create-app/tree.png'} width={21} height={21} alt={'button icon'}></Image>
                <div className={styles.createAppButton__buttonText}>Create App</div>
            </div>
            <Image className={styles.createAppButton__arrow} src={'/svg/arrow_white.svg'} width={130} height={130} alt={''}></Image>
        </div>
    );
}

export default CreateAppButton;