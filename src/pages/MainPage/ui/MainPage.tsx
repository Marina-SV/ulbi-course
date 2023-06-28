import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            {t('Главная страница')}
        </>
    );
};

export default MainPage;
