import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: 'Армения' },
    { value: Country.Russia, content: 'Россия' },
    { value: Country.Belarus, content: 'Белорусь' },
    { value: Country.Kazakhstan, content: 'Казахстан' },
    { value: Country.Ukraine, content: 'Украина' },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <Select
            className={classNames('', {}, [className])}
            label={`${t('Укажите страну')}:`}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
