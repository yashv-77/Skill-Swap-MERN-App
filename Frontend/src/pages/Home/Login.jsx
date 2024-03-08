import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import BrandName from "../../assets/brandName.svg?react";
import BrandLogo from "../../assets/brandLogo.svg?react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import LoginSvg from "../../assets/loginSvg.svg?react";
import { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Create state variables for your error messages
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// Check if all fields are filled
		const areFieldsFilled = email && password;

		// Validate the email
		if (!email) {
			setEmailError("Email is required");
		} else if (!email.includes("@")) {
			setEmailError("Email is not valid");
		} else {
			setEmailError("");
		}

		// Validate the password
		if (!password) {
			setPasswordError("Password is required");
		} else {
			setPasswordError("");
		}

		// Update the form validity
		if (areFieldsFilled && !nameError && !emailError && !passwordError) {
			setIsFormValid(true);
			console.log("Form submitted successfully");
			// Add more code here to handle the form submission
		} else {
			setIsFormValid(false);
			console.log("Form validation failed");
		}
	};

	return (
		<div>
			<div className="sm:bg-[#eefffa] sm:h-screen">
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
					<div className="grid sm:grid-cols-2 sm:px-36 px-2 p-8 sm:py-16   ">
						{/* Card Container */}
						<Card color="transparent" shadow={false}>
							<Typography
								variant="h2"
								color="black"
								className="font-poppins sm:text-left text-center"
							>
								Hi! Welcome Back
							</Typography>
							<Typography
								color="gray"
								className="mt-1 font-normal text-sm sm:text-left text-center font-poppins"
							>
								Nice to meet you again! Sign In.
							</Typography>

							<form
								onSubmit={handleSubmit}
								className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:mx-0 sm:w-96"
							>
								<div className="mb-3 flex flex-col gap-5">
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
										
										<p className=" text-center text-sm text-red-500">{emailError}</p>
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
											placeholder="* * * * * * * * "
											value={password}
											type="password"
											onChange={(e) => setPassword(e.target.value)}
											className=" w-full bg-gray-100 text-sm outline-none border-gray-500 border rounded-[21px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
										/>
										
										<p className="text-sm text-center text-red-500">{passwordError}</p>
									</div>
								</div>

								<Button
									type="submit"
									varient=""
									loading=""
									color=""
									className="mt-6 rounded-full bg-[#8c52ff] flex justify-center font-poppins py-4"
									fullWidth
								>
									Sign In
								</Button>

								<Typography
									color="gray"
									className="mt-4 text-center font-normal font-poppins text-sm"
								>
									Don't Have an Account?{" "}
									<Link
										to="/register-user"
										className="font-medium text-black underline-offset-2"
									>
										Create Now
									</Link>
								</Typography>
							</form>
						</Card>
						{/* Svg Container */}
						<div className="hidden sm:block">
							<LoginSvg />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
