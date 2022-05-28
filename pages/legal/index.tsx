import Head from 'next/head';
import MainLegal from '../../components/MainLegal';
import Header from '../../components/Header';
import Layout from '../../Layout';

const Legal: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Exoneração de responsabilidade</title>
      </Head>
      <Layout>
        <Header />
        <MainLegal />
      </Layout>
    </div>
  );
};

export default Legal;
