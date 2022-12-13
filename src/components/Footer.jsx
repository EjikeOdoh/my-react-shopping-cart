import "./footer.css";

const Footer = () => {
  const time = new Date().getFullYear();
  return <footer>My shopping Cart © {time}</footer>;
};

export default Footer;
