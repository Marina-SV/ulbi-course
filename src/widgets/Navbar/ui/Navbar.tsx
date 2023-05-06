import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

/* компоненты, которые не требуют асинхронного чанка будем экспортировать
не по дефолту, а через именованный экспорт */

// для передачи внешних стилей в компонент
interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            {/* <div className={classNames(cls.links)}> */}
            {/*    */}
            {/* </div> */}
        </nav>
    );
};
