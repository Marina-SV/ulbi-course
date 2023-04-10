import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

/* компоненты, которые не требуют асинхронного чанка будем экспортировать
не по дефолту, а через именованный экспорт */

// для передачи внешних стилей в компонент
interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <nav className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
        </div>
    </nav>
);
