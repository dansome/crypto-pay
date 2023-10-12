import { HTMLProps, ReactNode } from 'react';
import styles from './grid.module.scss';
import clsx from 'clsx';

interface GridProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

interface GridRowProps {
    children: ReactNode;
    className?: string;
    reverse?: boolean;
}

type GridColProps = Omit<HTMLProps<HTMLDivElement>, 'width'> & {
    width: number | { xs?: number; sm?: number; md: number; lg: number };
    children?: ReactNode;
    flex?: boolean;
    offset?: number | { xs?: number; sm?: number; md?: number; lg?: number };
}

const GridCol = ({ children, width, className, flex, offset, ...rest }: GridColProps) => {
    let widthClasses = '';

    if (typeof width === 'number') {
        widthClasses = clsx(
            styles[`col-lg-${width}`],
            styles[`col-md-${width}`],
            styles[`col-sm-${width}`],
            styles[`col-xs-${width}`]
        );
    } else if (typeof width === 'object') {
        widthClasses = clsx(
            styles[`col-lg-${width.lg || 12}`],
            styles[`col-md-${width.md || 12}`],
            styles[`col-sm-${width.sm || 12}`],
            styles[`col-xs-${width.xs || 12}`]
        );
    }
    let offsetClasses = '';

    if (typeof offset === 'number') {
        offsetClasses = clsx(
            styles[`col-lg-offset-${offset}`],
            styles[`col-md-offset-${offset}`],
            styles[`col-sm-offset-${offset}`],
            styles[`col-xs-offset-${offset}`]
        );
    } else if (typeof offset === 'object') {
        offsetClasses = clsx(
            styles[`col-lg-offset-${offset.lg || 0}`],
            styles[`col-md-offset-${offset.md || 0}`],
            styles[`col-sm-offset-${offset.sm || 0}`],
            styles[`col-xs-offset-${offset.xs || 0}`]
        );
    }
    return (
        <div {...rest} className={clsx(
            widthClasses,
            offsetClasses,
            { 'flex': flex },
            className
        )}>
            {children}
        </div>
    );
};


const GridRow = ({ children, className, reverse }: GridRowProps) => {
    return (<div className={clsx(
        styles.row,
        reverse && styles.reverse,
        className
    )}>
        {children}
    </div>)
};

const Grid = ({ children, id, className }: GridProps) => {
    return (
        <div className={clsx(styles["container-fluid"], className)} id={id}>
            {children}
        </div>
    );
};

export { Grid, GridRow, GridCol };
