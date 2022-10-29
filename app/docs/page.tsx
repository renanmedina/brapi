import { MainDocs } from '~/components/MainDocs';
import '~/styles/swagger-ui.css';

const Docs = () => {
  return (
    <>
      <div>
        {/* <Head>
          <title>brapi - Documentação</title>
        </Head> */}

        <section className="text-gray-400 bg-gray-900 body-font max-w-screen min-h-screen">
          <div className="container mx-auto flex flex-col px-5 py-0 md:py-24 items-center">
            <MainDocs />
          </div>
        </section>
      </div>
    </>
  );
};

export default Docs;
