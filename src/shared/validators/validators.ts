export const isEmail = (value: string | null) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Esse campo deve ser do tipo e-mail' : undefined;

export const isNumber = (value: string | null) => (
    !value || !isNaN(Number(value))
        ? undefined
        : 'Esse campo deve ser do tipo número'
);

export const required = (value: string | null) => (
    value || typeof value === 'number'
        ? undefined
        : 'Esse campo é obrigatorio'
);
