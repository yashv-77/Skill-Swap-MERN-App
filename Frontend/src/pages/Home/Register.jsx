import {
	Card,
	Checkbox,
	Alert,
	Button,
	Typography,
} from "@material-tailwind/react";
import BrandName from "../../assets/brandName.svg?react";
import BrandLogo from "../../assets/brandLogo.svg?react";

import { Link, Navigate } from "react-router-dom";
import RegisterSvg from "../../assets/registerSvg2.svg?react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Create state variables for your error messages
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	// validation
	const [isloading, setIsloading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [isChecked, setIsChecked] = useState("false");


	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsloading(true);
		// Check if all fields are filled
		const areFieldsFilled = name && email && password;
		let formIsValid = true;

		// Validate the name
		if (!name.trim()) {
			setNameError("Name is required");
			formIsValid = false;
		} else if (name.trim().length < 3) {
			setNameError("Name must be at least 3 characters");
			formIsValid = false;
		} else {
			setNameError("");
		}

		// Validate the email
		if (!email) {
			setEmailError("Email is required");
			formIsValid = false;
		} else if (!email.includes("@")) {
			setEmailError("Email is not valid");
			formIsValid = false;
		} else {
			setEmailError("");
		}
		// Validate the password
		if (!password) {
			setPasswordError("Password is required");
			formIsValid = false;
		} else if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters");
			formIsValid = false;	
		} else {
			setPasswordError("");
		}
		// Update the form validity
		if (formIsValid && areFieldsFilled) {
			try {
				await new Promise(resolve => setTimeout(resolve, 1000));
				const response = await axios.post('http://localhost:6001/user/register', { name, email, password });
				console.log(response.data);
				// Handle the response here
				setIsloading(false);
				setShowAlert(true);
				Navigate('/login');
			} catch (error) {
				console.log("Error in registering user", error);
				// Handle the error here
			}

		} else {
			setIsloading(false);
			console.log("Form validation failed");
		}


	};



	return (
		<>
			<div className=" sm:bg-[#eefffa] h-screen relative overflow-hidden">
				<Link to="/" className="hidden sm:block">
					<div className="flex items-center justify-center p-4">
						<BrandLogo />
						<BrandName />
					</div>
				</Link>
				<div className="container rounded-3xl sm:shadow-2xl bg-white ">
					<Link to="/" className=" sm:hidden">
						<div className="flex items-center justify-center p-4">
							<BrandLogo />
							<BrandName />
						</div>
					</Link>
					<div className="grid sm:grid-cols-2 sm:px-36 px-2 py-5 sm:py-16  ">
						{/* Card Container */}
						<div className="">
							<Card color="transparent" shadow={false}>
								<Typography
									variant="h3"
									color="black"
									className="font-poppins sm:text-left text-center"
								>
									Create New Account
								</Typography>
								<Typography
									color="gray"
									className="mt-1 font-normal text-sm  sm:text-left text-center  font-poppins"
								>
									Nice to meet you! Enter your Details To Sign Up
								</Typography>

								<form
									onSubmit={handleSubmit}
									className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:mx-0 sm:w-96 "
								>
									<div className="mb-1 flex flex-col">
										<div>
											<Typography
												variant="h6"
												color="blue-gray"
												className="mb-3 text-sm font-poppins"
											>
												Your Name
											</Typography>
											<input
												placeholder="Enter Your Good Name"
												value={name}
												type="text"
												onChange={(e) => setName(e.target.value)}
												className=" w-full bg-gray-100 text-sm outline-none border-gray-500 border rounded-[21px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
											/>

											<p className="text-center text-sm h-[20px] text-red-500">{nameError}</p>
										</div>

										<div>
											<Typography
												variant="h6"
												color="blue-gray"
												className="mb-3 font-poppins text-sm"
											>
												Your Email
											</Typography>
											<input
												placeholder="Your Email"
												value={email}
												type="text"
												onChange={(e) => setEmail(e.target.value)}
												className=" w-full bg-gray-100 text-sm outline-none border-gray-500 border rounded-[21px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
											/>

											<p className="text-sm text-center h-[20px] text-red-500">{emailError}</p>
										</div>

										<div>
											<Typography
												variant="h6"
												color="blue-gray"
												className="mb-3 font-poppins text-sm"
											>
												Password
											</Typography>
											<input
												placeholder="*******"
												value={password}
												type="password"
												onChange={(e) => setPassword(e.target.value)}
												className=" w-full bg-gray-100 text-sm outline-none border-gray-500 border rounded-[21px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
											/>

											<p className="text-center h-[20px] text-sm text-red-500">{passwordError}</p>
										</div>
									</div>
									<Checkbox
										// checked={isChecked}
										className=""
										onChange={() => setIsChecked(!isChecked)}
										label={
											<Typography
												variant="small"
												color="gray"
												className="flex items-center font-normal font-poppins"
											>
												I agree the
												<strong className="font-medium transition-colors hover:text-gray-900">
													&nbsp;Terms and Conditions
												</strong>
											</Typography>
										}
										containerProps={{ className: "-ml-2.5" }}
									/>

									<Button
										type="submit"

										className="mt-1 flex justify-center rounded-full bg-[#8c52ff] font-poppins py-4"
										fullWidth
										loading={isloading}
										disabled={isChecked}
									>
										Sign up
									</Button>

									<Typography
										color="gray"
										className="mt-4 text-center font-normal text-sm font-poppins"
									>
										Already have an account?{" "}
										<Link to="/login" className="font-medium text-black">
											Sign in
										</Link>
									</Typography>
								</form>
							</Card>
						</div>

						{/* Svg Container */}
						<div className="hidden sm:block">
							<RegisterSvg />
						</div>
					</div>
				</div>
				{showAlert && (
				<div className="absolute bottom-5 right-5">
					<Alert animate={{
						mount: { x: 0 },
						unmount: { x: 200 },
					}}
						className="rounded-l-3xl rounded-b-2xl "
						icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
							<path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
							<path d="M8.5 9.5L12 13L21.0002 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>}
						color="green">You Are Succesfully Registered</Alert>
				</div>)}
			</div>
		</>
	);
}
