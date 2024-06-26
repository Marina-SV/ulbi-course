import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red',
    CLEAR = 'clear'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to, children, theme = AppLinkTheme.INVERTED, className,
    } = props;
    return (
        <Link
            to={to}
            className={
                classNames(
                    cls.AppLink,
                    {},
                    [className, cls[theme]],
                )
            }
        >
            {children}
        </Link>
    );
});
