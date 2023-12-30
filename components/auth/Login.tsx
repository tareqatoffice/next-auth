'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
	const [values, setValues] = useState({});
	const router = useRouter();

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setValues((prev) => ({ ...prev, [id]: value ?? '' }));
	};
	const submitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = await signIn('credentials', { ...values });
		if (data?.status === 200) {
			router.push('/');
		}
	};
	return (
		<form
			className="w-full"
			onSubmit={submitHandler}
		>
			<div className="mb-5">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Your email
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
					placeholder="name@mail.com"
					onChange={inputChange}
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your password
				</label>
				<input
					type="password"
					id="password"
					onChange={inputChange}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
				/>
			</div>
			<div className="flex items-start mb-5">
				<div className="flex items-center h-5">
					<input
						id="remember"
						type="checkbox"
						className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
					/>
				</div>
				<label
					htmlFor="remember"
					className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Remember me
				</label>
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
			>
				Submit
			</button>
			<h2 className="text-center my-3 font-bold">OR</h2>
			<div className="grid grid-cols-2 gap-2">
				<button
					className="border rounded p-2"
					type="button"
					onClick={() =>
						signIn('google', {
							callbackUrl: `${window.location.origin}`,
						})
					}
				>
					Google
				</button>
				<button
					className="border rounded p-2"
					type="button"
					onClick={() =>
						signIn('github', {
							callbackUrl: `${window.location.origin}`,
						})
					}
				>
					Github
				</button>
			</div>
		</form>
	);
};

export default Login;
