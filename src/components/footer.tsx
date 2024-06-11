
import Styles from "./footer.module.css";

import Grid from "@mui/material/Grid";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  console.log(new Date().getFullYear());
  return (
    <>
      <div className={Styles.Container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={Styles.Icon}>
              <a
                href="https://twitter.com/MalawiUca"
                className={Styles.IndividualIcon}
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://web.facebook.com/UCAM.MW"
                className={Styles.IndividualIcon}
                target="_blank"
              >
                {" "}
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/ucam-mw"
                className={Styles.IndividualIcon}
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <div className={Styles.TextContainer}>
              <p>Copyright ©</p>
              <div className={Styles.UCAMTextAndDate}>
                <p>
                  {new Date().getFullYear()} Universities and colleges
                  Association of Malawi (UCAM). All Rights Reserved
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
