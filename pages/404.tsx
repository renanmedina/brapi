import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../Layout';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col md:justify-center items-center min-h-screen space-y-12">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p>Essa página não existe :(</p>
        </div>
        <Link href="/" passHref>
          <a className="btn btn-primary">Voltar para a página inicial</a>
        </Link>
      </main>
    </Layout>
  );
};

export default NotFound;
