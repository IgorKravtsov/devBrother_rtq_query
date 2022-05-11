import React from "react";

export const useValidation = (value, validations) => {

    const [minLengthError, setMinLengthError] = React.useState(false);
    const [maxLengthError, setMaxLengthError] = React.useState(false);
    const [isEmailError, setIsEmailError] = React.useState(false);

    React.useEffect(() => {
        for(const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ?
                        setMinLengthError(true) : setMinLengthError(false)
                    break;

                case "maxLength":
                    value.length > validations[validation] ?
                        setMaxLengthError(true) : setMaxLengthError(false)
                    break;

                case "isCorrectEmail":
                    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    setIsEmailError(regExp.test(value.toLowerCase()));
                    break;
            }
        }
    }, [value])

    return {
        maxLengthError,
        minLengthError,
        isEmailError,
    }
}