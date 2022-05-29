import { useEffect, useState } from 'react';

const Footer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true);
    }
  }, []);

  return (
    <footer className="text-gray-400 bg-gray-900 body-font border-t border-gray-800">
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center flex-row">
        <div>
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <form
              action="https://formsubmit.co/166feb7796ce3daa45ec9848d1ae062e"
              method="POST"
              className="relative sm:w-64 w-full max-w-full sm:mr-4 mr-2"
            >
              {isReady && (
                <input
                  type="hidden"
                  name="_next"
                  value={encodeURI(
                    `${window.location.href}?show-toast=Agora você receberá nossas novidades!`,
                  )}
                />
              )}
              <input type="hidden" name="_subject" value="Newsletter brapi" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {isReady && (
                <input
                  type="hidden"
                  name="_webhook"
                  value={`${window.location.origin}/api/webhook/form/newsletter`}
                />
              )}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Receba novidades por email
              </label>
              <input
                type="email"
                placeholder="email@empresa.com"
                id="email"
                name="email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-brand-900 focus:bg-transparent focus:border-brand-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="hidden">Cadastrar</button>
            </form>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left max-w-md">
              Ajudamos desenvolvedores a construir o futuro das fintechs
              democratizando o acesso aos dados do mercado financeiro
              brasileiro.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left flex justify-center space-x-2">
            © {new Date().getFullYear()} brapi —
            <a
              href="https://formsubmit.co/el/xunuti"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              brapi@proton.me
            </a>
            <a
              href="https://github.com/alissonsleal/brapi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>{' '}
            </a>
          </p>
          <a
            href="https://vercel.com/?utm_source=alisson-oss&utm_campaign=oss"
            className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm hover:text-gray-500"
            tabIndex={0}
          >
            Powered by ▲ Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
