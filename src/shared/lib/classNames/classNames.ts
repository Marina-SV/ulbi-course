export type Mods = Record<string, boolean | string |undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        // Сортируем на наличие undefined
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // В mods только классы со значением true/false
            // Сортируем
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
