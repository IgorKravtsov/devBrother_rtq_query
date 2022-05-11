import React, {ReactElement, useState, useEffect} from 'react';
import FormBuilder from "../../components/formBuilder/FormBuilder";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import styles from './registerSection.module.scss';
import {IFormConfig} from "../../config";
import {IInputConfigs} from "../../types/IInputConfigs";
import {UserDTO} from "../../interfaces/userDTO";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {setUserData} from "../../store/slices/userSlice";

export interface RegisterSectionProps {
    config: IFormConfig[];
}

const RegisterSection:React.FC<RegisterSectionProps> = ({config}): ReactElement => {
    const [inputs, setInputs] = useState<IInputConfigs[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const errors = inputs.filter(input => input.validationError !== '');
        // console.log("errors", errors)
        if(errors.length === 0) {
            let userData:UserDTO = {login: '', password: ''};
            inputs.forEach(input => {
                switch (input.name) {
                    case "login":
                        userData = {...userData, login: input.value}
                        // console.log("name",userData)
                        break;
                    case "password":
                        userData = {...userData, password: input.value}
                        break;
                }
            });
            if(userData.login !== '' && userData.password !== '') {
                setUserData(userData);
                navigate(RouteNames.LOGIN);
            }
        }
    }, [inputs])

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.promo}>REGISTER</h2>
            <FormBuilder setInputValues={setInputs} formConfig={config}/>
            <h5>
                Already have an account?
                <Link
                    className={styles.anchor}
                    to={RouteNames.LOGIN}
                > Login</Link>
            </h5>
        </section>
    );
};

export default RegisterSection;