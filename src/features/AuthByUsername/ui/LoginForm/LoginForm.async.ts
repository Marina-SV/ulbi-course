import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// В самом LoginForm используем memo, поэтому пропсы теряются и нужно напрямую указать <FC<LoginFormProps>>
export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
