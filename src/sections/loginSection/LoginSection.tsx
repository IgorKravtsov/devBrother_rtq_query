import React, {FC, ReactElement, useEffect, useState} from 'react';
import {IFormConfig} from "../../config";
import FormBuilder from "../../components/formBuilder/FormBuilder";
import styles from "./loginSection.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {IInputConfigs} from "../../types/IInputConfigs";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UserDTO} from "../../interfaces/userDTO";
import Error from "../../components/error/Error";
import {useActions} from "../../hooks/useActions";
import * as util from '../../util';
import {setUserData} from "../../store/slices/userSlice";

export interface LoginSectionProps {
    config: IFormConfig[];
}

const LoginSection:FC<LoginSectionProps> = ({config}): ReactElement => {

    const [credentialsError, setCredentialsError] = useState('');
    const [inputs, setInputs] = useState<IInputConfigs[]>([]);

    const navigate = useNavigate();
    const {userData} = useTypedSelector(state => state.user);
    // const {setUserData} = useActions();

    useEffect(() => {
        setCredentialsError('');
        if(!isReduxStorageHasData()) {
            const userDataFromLocalStorage =  localStorage.getItem("userData");
            if(userDataFromLocalStorage) {
                const objUserData = JSON.parse(userDataFromLocalStorage);
                setUserData(objUserData);
            } else {
                setCredentialsError('You need to register at first!');
            }
        }
    }, [])

    useEffect(() => {
        if(util.isObjectNotEmpty(userData!, 'login') && inputs.length > 0) {
            checkInputData();
        }
    }, [inputs])

    const isReduxStorageHasData = () => {
        return Object.keys(userData!).includes("login");
    }

    const checkInputData = () => {
        const errors = inputs.filter(input => input.validationError !== '');
        if(errors.length === 0) {
            let userDataFromInputs: UserDTO = {login: '', password: ''};
            inputs.forEach(input => {
                switch (input.name) {
                    case "login":
                        userDataFromInputs = {...userDataFromInputs, login: input.value}
                        break;
                    case "password":
                        userDataFromInputs = {...userDataFromInputs, password: input.value}
                        break;
                }
            });
            checkCreditsAndGoToAnotherPage(userDataFromInputs, userData!);
        }
    }

    const checkCredentials = (firstUserData: UserDTO, secondUserData: UserDTO): boolean => {
        return firstUserData.login === secondUserData.login && firstUserData.password === secondUserData.password;
    }

    const checkCreditsAndGoToAnotherPage = (firstUserData: UserDTO, secondUserData: UserDTO) => {
        if(checkCredentials(firstUserData, secondUserData)) {
            navigate(RouteNames.PRODUCTS)
        } else {
            setCredentialsError('Incorrect login or password!');
        }
    }

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.promo}>LOGIN</h2>
            {<Error isVisible={credentialsError !== ''}>{credentialsError}</Error>}
            <FormBuilder setInputValues={setInputs} formConfig={config}/>
            <h5>
                Don't have account yet?
                <Link
                    className={styles.anchor}
                    to={RouteNames.REGISTER}
                > Register</Link>
            </h5>
        </section>
    );
};

export default LoginSection;