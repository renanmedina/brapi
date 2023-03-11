import { Analytics } from '~/components/Analytics';
import { AutoToast } from '~/components/AutoToast';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import '~/styles/global.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        {typeof window !== 'undefined' && <Analytics />}
        <AutoToast />
        <Footer />
      </body>
    </html>
  );
}
