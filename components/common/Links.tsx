import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logout from './Logout';

const Links = async () => {
	const session = await getServerSession(auth_options);

	return (
		<ul className="flex gap-2 text-sm">
			{session?.user?.role === 'admin' && (
				<li>
					<Link href="/admin">Admin</Link>
				</li>
			)}
			<li>
				<Link
					className="transition hover:underline"
					href="/"
				>
					Dashboard
				</Link>
			</li>
			<Logout />
		</ul>
	);
};

export default Links;
