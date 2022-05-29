import Head from 'next/head';
import Header from '../../components/Header';
import MainDocs from '../../components/MainDocs';
import Layout from '../../Layout';
import 'swagger-ui-react/swagger-ui.css';
import dynamic from 'next/dynamic';

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
              {/* todo: create better docs */}
              {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default Docs;
