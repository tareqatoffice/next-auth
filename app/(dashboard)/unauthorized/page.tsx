import Link from 'next/link';

const page = () => {
	return (
		<div className="grid place-content-center">
			<div className="flex flex-col gap-1 items-center justify-center">
				Only for Admin Role.
				<Link
					className="underline"
					href="/"
				>
					Dashboard
				</Link>
			</div>
		</div>
	);
};

export default page;
