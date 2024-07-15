import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icon";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-bottom">
          <div className="copyright">
            &copy; 2024 Fruits Shop LTD. All rights reserved
          </div>
          <div className="social">
            <Link href="" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="" target="_blank">
              <YoutubeIcon />
            </Link>
            <Link href="" target="_blank">
              <InstagramIcon />
            </Link>
          </div>
          {/* <div className="links">
            <Link href="#">Privacy Policy</Link>
            <div className="border-right border"></div>
            <Link href="#">Website Terms</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
