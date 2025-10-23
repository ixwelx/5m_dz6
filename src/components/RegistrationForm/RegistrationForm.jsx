import {Form, Input, Button} from "antd";
import cls from "./RegistrationForm.module.scss"
import {toast} from "react-toastify";

export  const RegistrationForm = () => {

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Successfully registered");
    }

    return (
        <div className={cls.container}>
            <Form layout="vertical" onFinish={onSubmit}>
                <Form.Item
                    label={"Name"}
                    name={" name"}
                    rules={[
                        {
                            required:true, message: "Name is required"},
                        {
                            pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: "Name format is invalid",
                        },
                        {
                            min: 2, message: "Minimum lenth 2 characters",
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Email"}
                    name={"email"}
                    rules={[
                        {required:true, message: "Email is required"},
                        {type: "email", message: "Email format is invalid"}
                    ]} >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Password"}
                    name={"password"}
                    rules={[
                        {required:true, message: "Password is required"},
                        {min: 8, message: "Minimum lenth 8 characters"}
                    ]} >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label={"Confirm password"}
                    name={"passwordConfirm"}
                    rules={[
                        {required:true, message: "Confirm passwords is required"},
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The passwords don't match")
                                );
                            },
                        }),
                    ]} >
                    <Input.Password/>
                </Form.Item>
                <Button type={"primary"} htmlType={"submit"}>Submit</Button>
            </Form>
        </div>
    )
}