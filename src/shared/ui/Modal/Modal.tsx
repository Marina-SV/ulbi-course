import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, onClose, isOpen, lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    /* useRef нужен, чтобы хранить данные между перерендорами.
    Чтобы id SetTimeout не менялся, и ссылка на очистку таймера работала */
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const escapeModalWindow = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    /* С пустым массивом зависимостей функции из return отрабатывают 1!раз
    при размонтировании компонента из React-DOM дерева;
    С не пустым массивом зависимостей функции в return отрабатывают каждый раз, когда
    происходит изменение состояния переменных в массиве зависимостей.
    Функции в return очищают компонент от предыдущих колбеков */
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', escapeModalWindow);
        }

        return () => {
            clearTimeout(timerRef.current);
            removeEventListener('keydown', escapeModalWindow);
        };
    }, [isOpen, escapeModalWindow]);

    // не монтирует компонент в реакт дом дерево и возвращает null
    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
