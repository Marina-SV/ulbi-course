export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    // если в authData хранятся какие-то данные, значит пользователь авторизован
    authData?: User;

    _inited: boolean;
}
