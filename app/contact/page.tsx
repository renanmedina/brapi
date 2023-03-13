import { Metadata } from 'next';
import { MainContact } from '../../components/MainContact';

export const metadata: Metadata = {
  title: 'Contato',
};

const ContactPage = () => {
  return (
    <div>
      <MainContact />
    </div>
  );
};

export default ContactPage;
