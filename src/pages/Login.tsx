import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const defaultValues = {
		id: "A-0001",
		password: "admin123",
	};
	const [login] = useLoginMutation();
	const onSubmit = async (data: FieldValues) => {
		console.log("🚀 ~ onSubmit ~ data:", data);
		const toastId = toast.loading("Loading in");
		try {
			const res = await login(data).unwrap();
			const user = verifyToken(res.data.accessToken) as TUser;
			dispatch(setUser({ user: user, token: res.data.accessToken }));
			toast.success(`${user.role} logged in successfully.`, {
				id: toastId,
				duration: 2000,
			});
			navigate(`/${user.role}/dashboard`);
		} catch (error) {
			toast.error("Something went wrong", { id: toastId, duration: 2000 });
		}
	};
	return (
		<Row justify="center" align="middle" style={{ height: "100vh" }}>
			<PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
				<PHInput type="text" name="id" label="ID:" />

				<PHInput type="text" name="password" label="Password:" />

				<Button htmlType="submit">Login</Button>
			</PHForm>
		</Row>
	);
};

export default Login;
