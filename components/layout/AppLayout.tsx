import AuthProvider from '../provider/AuthProvider';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>;
};

export default AppLayout;
