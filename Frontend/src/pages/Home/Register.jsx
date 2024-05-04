import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";
import BrandName from "../../assets/brandName.svg?react";
import BrandLogo from "../../assets/brandLogo.svg?react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
	const [isFormValid, setIsFormValid] = useState(false);

	const [isChecked, setIsChecked] = useState("false");

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Check if all fields are filled
		const areFieldsFilled = name && email && password;

		// Validate the name
		if (!name.trim()) {
			setNameError("Name is required");
		} else if (name.trim().length < 3) {
			setNameError("Name must be at least 3 characters");
		} else {
			setNameError("");
		}

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
		} else if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters");
		} else {
			setPasswordError("");
		}
		// Update the form validity
		if (areFieldsFilled && !nameError && !emailError && !passwordError) {
			try {
				const response = await axios.post('http://localhost:6001/user/register', { name, email, password });
				console.log(response.data);
				// Handle the response here
			} catch (error) {
				console.error("Error in registering user", error);
				// Handle the error here
			}
					
		} else {
			setIsFormValid(false);
			console.log("Form validation failed");
		}

	
	};



	return (
		<>
			<div className=" sm:bg-[#eefffa] h-screen">
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
					<div className="  grid sm:grid-cols-2 sm:px-36 px-2 py-5 sm:py-16  ">
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
											{/* <Input
												size="lg"
												color="deep-purple"
												value={name}
												onChange={(e) => setName(e.target.value)}
												placeholder="name@mail.com"
												className="  !border-blue-gray-200  focus:!border-deep-purple-700 focus:ring hover:ring-2 "
												labelProps={{
													className:
														"font-poppins",
												}}
											/> */}
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
											{/* <Input
												size="lg"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												color="deep-purple"
												placeholder="name@mail.com"
												className=" !border-blue-gray-200  focus:!border-deep-purple-700 focus:ring hover:ring-2 "

											/> */}
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
											{/* <Input
												type="password"
												size="lg"

												value={password}
												onChange={(e) => setPassword(e.target.value)}
												color="deep-purple"
												placeholder="********"
												className=" !border-blue-gray-200 focus:!border-deep-purple-700 focus:ring hover:ring-2"
											/> */}
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
										color="deep-purple"
										className="mt-1 rounded-full font-poppins py-4"
										fullWidth
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
			</div>
		</>
	);
}
