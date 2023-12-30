import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(auth_options);
	if (!session?.user?.email) {
		return redirect('/login');
	}
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default DashboardLayout;
