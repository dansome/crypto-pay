import './loader.scss';

interface LoaderProps {
    size?: number
}

const Loader = ({ size = 16 }: LoaderProps) => {

    return (
        <div className="loader" style={{width: `${size}px`, height: `${size}px`}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;