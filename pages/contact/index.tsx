import Head from 'next/head';
import Header from '../../components/Header';
import { MainContact } from '../../components/MainContact';
import Layout from '../../Layout';

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Contato</title>
      </Head>
      <Layout>
        <Header />
        <MainContact />
      </Layout>
    </div>
  );
};

export default Contact;
