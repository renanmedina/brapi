const Footer = () => {
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
              <input type="hidden" name="_next" value="https://brapi.ga/docs" />
              <input type="hidden" name="_subject" value="Newsletter brapi" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_webhook"
                value={`${window.location.origin}/api/webhook/contact`}
              />
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
            </form>
            <button className="btn btn-accent" type="submit">
              Cadastrar
            </button>
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
          <p className="text-gray-400 text-sm text-center sm:text-left">
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
