import { Grid } from "@mui/material";
import NCST from "../assets/images/clients/client-en.png";
import NCHE from "../assets/images/clients/nche.png";
import USAID from "../assets/images/clients/usaid.png";
import GOV from "../assets/images/clients/gov.png";
import LOAN from "../assets/images/clients/loan.png";
import AIRTEL from "../assets/images/clients/airtel.png";
import TNM from "../assets/images/clients/tnm.png";
import ACU from "../assets/images/clients/acu.png";
import WORLDB from "../assets/images/clients/worldb.png";
import AFR from "../assets/images/clients/afr.png";
import AFRUNI from "../assets/images/clients/afruni.png";
import SARUA from "../assets/images/clients/SARUA.png";
import Image from "../components/image/image";
const partners = [
  {
    id: 1,
    name: "NCST",
    image: NCST,
  },
  {
    id: 2,
    name: "NCHE",
    image: NCHE,
  },
  {
    id: 3,
    name: "USAID",
    image: USAID,
  },
  {
    id: 4,
    name: "GOV",
    image: GOV,
  },
  {
    id: 5,
    name: "LOAN",
    image: LOAN,
  },
  {
    id: 6,
    name: "AIRTEL",
    image: AIRTEL,
  },
  {
    id: 7,
    name: "TNM",
    image: TNM,
  },
  {
    id: 8,
    name: "ACU",
    image: ACU,
  },
  {
    id: 9,
    name: "WORLDB",
    image: WORLDB,
  },
  {
    id: 10,
    name: "AFR",
    image: AFR,
  },
  {
    id: 11,
    name: "AFRUNI",
    image: AFRUNI,
  },
  {
    id: 12,
    name: "SARUA",
    image: SARUA,
  },
];

export default function Partners() {
  return (
    <>
      <div className="mt-20 flex justify-center ">
        <section className="w-full space-y-9 justify-center flex ">
          <div className="max-w-7xl  ">
            <Grid container spacing={1}>
              {partners.map((item) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    key={item.id}
                    className="flex justify-center align-middle items-center col-span-1 py-10 mx-10 "
                  >
                    <div className=" flex justify-center align-middle items-center overflow-hidden rounded-lg w-64 min-h-[10px] hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500">
                      <div className=" flex justify-center h-full rounded-t-lg overflow-hidden w-full object-fill items-center align-middle">
                        <Image
                          source={item.image}
                          alt=""
                          styling=" items-center justify-center h-full object-cover"
                        />
                      </div>
                    </div>
                  </Grid>
                );
              })}
              {/* <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="02"
                  objective='"To contribute to Malawi’s higher education policy formulation and review"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="03"
                  objective='"To promote and facilitate networking, collaboration and experience sharing in teaching, learning, research, community service/outreach and industry engagement"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="04"
                  objective='"To enhance leadership and institutional management capacity"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="05"
                  objective='"To facilitate effective dialogue among universities, colleges and other stakeholders on issues affecting higher education"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                {" "}
                <ObjectiveCard
                  number="06"
                  objective='"To organize fora for the dissemination of research on key issues affecting higher education in Malawi"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="07"
                  objective='"To establish a Secretariat that is effective, efficient and sustainable for the pursuit of the Association’s goals"'
                />
              </Grid> */}
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}
