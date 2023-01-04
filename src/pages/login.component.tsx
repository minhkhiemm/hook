import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Button from "@material-ui/core/Button";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { TextFieldComponent } from "../common";
import { Formik } from "formik";
import { loginFormValidation } from "./login.validation";
import { Form } from "formik";

interface PropsForm {
    onLogin: (login: LoginEntity) => void;
}

const useFormStyles = makeStyles((theme) =>
    createStyles({
        formContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    }));

export const LoginComponent: React.FC<PropsForm> = (props) => {
    const { onLogin } = props;
    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    );
    const classes = useFormStyles();
    const onTextFieldChange = (fieldId) => (e) => {
        setLoginInfo({
            ...loginInfo,
            [fieldId]: e.target.value,
        });
    };

    return (
        <Formik
            onSubmit={onLogin}
            initialValues={createEmptyLogin()}
            validate={loginFormValidation.validateForm}
        >

            {() => (
                <Form>
                    <div className={classes.formContainer}>
                        <TextFieldComponent label="Name" name="login" />
                        <TextFieldComponent label="Password" type="password" name="password" />
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
