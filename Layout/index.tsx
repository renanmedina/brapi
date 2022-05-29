import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
