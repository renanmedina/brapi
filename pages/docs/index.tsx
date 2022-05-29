import Head from 'next/head';
import Header from '../../components/Header';
import Layout from '../../Layout';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <progress className="progress w-56"></progress>
    </div>
  ),
});

const Docs: React.FC = () => {
  return (
    <>
      <div>
        <Head>
          <title>brapi - Documentação</title>
        </Head>
        <Layout>
          <Header />

          <section className="text-gray-400 bg-gray-900 body-font max-w-screen">
            <div className="container mx-auto flex flex-col px-5 py-0 md:py-24 items-center">
              <SwaggerUI url="/swagger/latest.json" />
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default Docs;
