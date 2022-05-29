import Link from 'next/link';
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
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center flex-row justify-between">
        <div className="w-full flex flex-wrap md:flex-nowrap gap-8 justify-center md:justify-start">
          <div className="footer flex space-x-8 max-w-fit">
            <div>
              <span className="footer-title">Empresa</span>
              <Link href="/about" passHref>
                <a className="link link-hover">Sobre</a>
              </Link>
              <Link href="/contact" passHref>
                <a className="link link-hover">Contato</a>
              </Link>
              <Link href="/career" passHref>
                <a className="link link-hover">Carreira</a>
              </Link>
              <Link href="/press-kit" passHref>
                <a className="link link-hover">Press kit</a>
              </Link>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <Link href="/terms-of-use" passHref>
                <a className="link link-hover">Termos de uso</a>
              </Link>
              <Link href="/privacy-policy" passHref>
                <a className="link link-hover">Política de privacidade</a>
              </Link>
              <Link href="/cookie-policy" passHref>
                <a className="link link-hover">Política de Cookie</a>
              </Link>
            </div>
          </div>
          <div className="flex md:flex-nowrap flex-wrap justify-center md:justify-end w-full gap-8 md:gap-2">
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left max-w-md">
              Ajudamos desenvolvedores a construir o futuro das fintechs
              democratizando o acesso aos dados do mercado financeiro
              brasileiro.
            </p>
            <form
              action="https://formsubmit.co/166feb7796ce3daa45ec9848d1ae062e"
              method="POST"
              className="relative sm:w-64 w-full max-w-full min-w-[200px] sm:mr-4 mr-2"
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
          </div>
        </div>
      </div>

      <div className="footer py-4 border-t bg-base-200 border-base-300">
        <div className="flex px-5 items-center container flex-col md:flex-row justify-center md:justify-between text-center mx-auto">
          <div className="flex items-center grid-flow-col space-x-2">
            {/* todo change image */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
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
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://vercel.com/?utm_source=alisson-oss&utm_campaign=oss"
                className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm hover:text-gray-500"
                tabIndex={0}
              >
                Powered by ▲ Vercel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
