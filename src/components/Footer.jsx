import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-300 text-center break-words-safe">
          © {year} Lebenswerk Physiotherapie
          <br />
          {t('footer.rights_reserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
