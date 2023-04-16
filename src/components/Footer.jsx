//

function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <footer>
      <p className="footer">Manthan-MK || Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
