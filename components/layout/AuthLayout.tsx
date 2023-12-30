import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Logo from '../common/Logo';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(auth_options);
	if (session?.user?.email) {
		return redirect('/');
	}
	return (
		<div className="shadow-md rounded-sm border px-4 py-6">
			<div className="flex flex-col items-center gap-3">
				<Logo />
				<div className="grid gap-1 place-items-center min-w-[300px]">
					<p className="font-medium">Login your Account</p>
					{children}
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
