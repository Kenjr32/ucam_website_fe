import React from 'react';

import Grid from "@mui/material/Grid";
import Styles from "../components/ObjectiveCard.module.css";
export default function Contact() {
  return (
    <>
      <div>
        <section className="w-full text-black pt-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                YOU CAN CONTACT US THROUGH
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full space-y-9 justify-center flex pb-20">
          <div className="max-w-7xl w-full">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <div className={Styles.Container}>
                  <div className={Styles.Card}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <div className="text-2xl">Phone</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg">We are one call away</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg text-red-600">
                          WhatsApp: +265(0) 88 182 3022
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg text-red-600">
                          Phone : +265 (0)88 182 3022
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <div className={Styles.Container}>
                  <div className={Styles.Card}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <div className="text-2xl">Email</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg">Send us an email</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg text-red-600">
                          universitiesmalawi@gmail.com
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                {" "}
                <div className={Styles.Container}>
                  <div className={Styles.Card}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <div className="text-2xl">Location</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg">UCAM Secretariat,</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg">Zomba,</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-lg">Malawi</div>
                      </Grid>
                     
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}
