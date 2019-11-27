interface GaiaSession {
    token: string | null;
    expiresIn: number | null;
    expired?: boolean;
}

export const setSession = (token: string) => {
    const gaiaSession: GaiaSession = {
        token,
        expiresIn: new Date().getTime() + 604800000
    }

    localStorage.setItem('gaiaSession', JSON.stringify(gaiaSession));
}

export const getSession: () => GaiaSession = () => {
    if (localStorage.gaiaSession) {
        const gaiaSession: GaiaSession = JSON.parse(localStorage.gaiaSession);
        gaiaSession.expired = new Date().getTime() < (gaiaSession.expiresIn || 0);

        return gaiaSession;
    }

    return { token: null, expiresIn: null, expired: true };
}
