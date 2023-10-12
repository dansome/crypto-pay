import Loader from "../loader/loader";
import './button.scss';

interface ButtonProps {
    className?: string,
    size?: string,
    click?: () => void,
    title?: string,
    isDisabled?: boolean,
    isSubmit?: boolean,
    loading?: boolean,
    type?: string | 'primary' | 'secondary' | 'link' | 'transparent'
}

function Button({
    className = '',
    click,
    title,
    type = '',
    isDisabled,
    loading,
    isSubmit = false,
    size = ''
}: ButtonProps) {

    return (
        <button className={`button ${className} ${type} ${size}`} disabled={isDisabled} type={isSubmit ? 'submit' : 'button'} onClick={click}>
            {!loading ? title : (
                <Loader></Loader>
            )}
        </button>
    );
}

export default Button;