import { getFooterCopy, getFullYear } from "../utils";

function Footer() {
  const fullYear = getFullYear();
  const footerCopy = getFooterCopy(true);
  return (
    <>
      Copyright {fullYear} - {footerCopy}
    </>
  );
}

export default Footer;
