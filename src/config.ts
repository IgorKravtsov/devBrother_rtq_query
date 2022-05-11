
export interface IValidation {
    type: "maxLength" | "minLength" | "isEmail" | "theSameAs";
    validValue: string | number;
}

export interface IFormConfig {
    name: string;
    placeholder: string;
    type: string;
    validations?: IValidation[];
}

export  const  loginFormConfig: IFormConfig[] = [
    {
        name: 'login',
        placeholder: 'enter login',
        type: 'text',
        validations: [
            {
                type: 'minLength',
                validValue: 3
            },
            {
                type: 'maxLength',
                validValue: 22
            },
        ]
    },
    {
        name: 'password',
        placeholder: 'enter password',
        type: 'password',
        validations: [
            {
                type: 'minLength',
                validValue: 6
            },

        ]
    },
]

export  const  registerFormConfig: IFormConfig[] = [
    {
        name: 'login',
        placeholder: 'enter login',
        type: 'text',
        validations: [
            {
                type: 'minLength',
                validValue: 3
            },
            {
                type: 'maxLength',
                validValue: 22
            },
        ]
    },
    {
        name: 'password',
        placeholder: 'enter password',
        type: 'password',
        validations: [
            {
                type: 'minLength',
                validValue: 6
            },

        ]
    },
    {
        name: 'confirm_password',
        placeholder: 'confirm password',
        type: 'password',
        validations: [
            {
                type: 'minLength',
                validValue: 6
            },
            {
                type: 'theSameAs',
                validValue: 'password'
            }

        ]
    },
]