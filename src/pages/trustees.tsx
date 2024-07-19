
import Chinyama from "../assets/images/team/chinyama.jpg";
import Madimbo from "../assets/images/team/Maggie.jpg";
import Ngwira from "../assets/images/team/yolamu.jpg";
import Sheron from "../assets/images/team/sheron 2.jpg";
import Ridley from "../assets/images/team/ridley.jpg";
import Ngongondo from "../assets/images/team/ngongondo.jpg";
import Sharon from "../assets/images/team/sharon.jpg";
import { Grid } from "@mui/material";
import Image from "../components/image/image";
const trustees = [
  {
    id: 1,
    name: "Dr Moses Chinyama",
    title: "Chairperson of UCAM Board of Trustees",
    description:
      "Dr. Moses Chinyama, a representative of Lilongwe University of Agriculture and Natural Resources (LUANAR) on the UCAM Board of Trustees, has been serving as Vice Chairperson of UCAM since December 2019; and Chairperson of a Fundraising sub-committee of the Higher Education Conference 2021. His background is in Mechanical Engineering; he is a Chartered Mechanical Engineer and registered with the Engineering Council, United Kingdom since 2006. He is currently serving College Director for Natural Resources College (NRC) of LUANAR. Before joining LUANAR, he served for two and half years at the Malawi University of Science and Technology (MUST) as Team Leader during its inception stages acting in the position of Vice Chancellor. He spent over twenty-three years of successful academic career with University of Malawi and served in various management positions, two years as Head of Department of Mechanical Engineering, four years as Dean of Faculty of Engineering and six months as College Vice Principal at the Polytechnic. He coordinated various projects funded by local and international organisations, among them; African Development Bank through the Support to Higher Education in Science and Technology (HEST) Project; and funding by the World Bank European Union through the Mining Governance and Growth Support Project, and the Royal Academy of Engineering. He coordinated the restructuring of engineering education at the Polytechnic which culminated into the development of curricula for fourteen specialised engineering degree programmes, five engineering diploma programmes; and the development of one Masters degree programmes with three specialised pathways. ",
    image: Chinyama,
  },
  {
    id: 2,
    name: "Dr Maggie Madimbo",
    title: "Board of Trustees",
    description:
      "Dr. Maggie Madimbo, currently Vice Chancellor for African Bible College in Lilongwe, Malawi. She did PhD in Organizational Leadership Concentration Higher Education, Eastern University, and Philadelphia, USA. She is passionate about developing Christian leaders. She rejoices in witnessing the transformation of communities as such she invests in leadership studies. She has published a book on Women leaders in Malawi and has written several book chapters and journal articles. She believes Christian education with good leadership is key to bringing transformation in Malawi and beyond. She loves to mentor and inspire young people to dream big and think outside the box in order for them to bring transformational change in their communities. She has been instrumental in starting several associations including association of Private Universities in Malawi (APUMA) At APUMA she served as the first elected chair. She now seats on the Board of Trustees for the development of Universities and Colleges Association in Malawi (UCAM). Dr. Madimbo has also served as the first female chair for Network for African Congregational Theology (NetACT) a network of over 50 institutions in sub-Saharan Africa.",
    image: Madimbo,
  },
  {
    id: 3,
    name: "Mr Yonamu Ngwira",
    title: "Board of Trustees",
    description:
      "Yonamu Ngwira is a seasoned higher education administrator. Currently serving as University Registrar for Mzuzu University, Malawi, he Is one of the founding members of UCAM having played key roles in the organisation of the first International conference on higher education under the banner of “friends of higher education”. He is one of the Trustees of UCAM. He also serves as UCAM Secretary as well as Secretary for the Conference Organising Committee. He holds a BA in Public Administration from the University of Malawi and an MA in Public Communication and Public Relations from the University of Westminster, UK under Chevening Scholarship He is a higher education quality assessment expert trained on External Quality Assurance (National, Regional, International Experiences) under UNESCO, IIEP, DIES and SAQAN. He has led various teams under the National Council for Higher Education (NCHE) on institutional and programme registration and accreditation assessment exercises. He has also served as external assessor for various individual higher education institutions. He also holds a certificate in University Leadership in the Southern Africa Region, offered by the Southern African Regional Universities Association (SARUA) and Leadership Foundation for Higher Education, UK. He started his journey in higher education administration in 1999 as an Assistant Registrar. He handled different portfolios including academic, human resource and administration, student affairs, communication and PR. He then took a break through leave of absence to assist Daeyang University in setting up its structures in transition from a college to a university. He therefore became its founding university registrar and coordinator for a medical school project. He is passionate about higher education growth and networking in Malawi and beyond.",
    image: Ngwira,
  },
  {
    id: 4,
    name: "Sheron Ndhlovu",
    title: "Board of Trustees",
    description:
      "",
    image: Sheron,
  },
  {
    id: 5,
    name: "Prof. Cosmo Ngongondo",
    title: "Board of Trustees",
    description:
      "Cosmo Ngongondo, Acting Dean of the School of Natural and Applied Sciences, is a Professor of Earth Sciences in the Department of Geography and Earth Sciences, at the University of Malawi. Professor Ngongondo holds a PhD in Hydrology (Hydrological Analysis and Modelling) from the University of Oslo in Norway, an MSc in Water Resources Engineering and Management from the University of Zimbabwe and a BSc in Earth Sciences and Physics from the University of Malawi. His research interests are in the scientific assessments of the impacts of climate change in key areas such as water resources, forestry, agricultural production and human health. He has conducted analyses of climate change indicators in Malawi and in the southern Africa region that have fed into climate change and variability impact assessments. He is the current Chief Editor of the Malawi Journal of Science and Technology (MJST), Managing Guest Editor of the Journal of the Physics and Chemistry of the Earth (JPCE), WaterNet Symposium Special Edition and Guest Editor of Hydrology Research Journal. His scientific research work in hydrological and climatic sciences and climate change adaptation received global recognition when he was awarded the 2013 African Union – The World Academy of Sciences (AU-TWAS) Young Scientists National Award in the Earth and Life Sciences category. Professor Ngongondo serves as a member of: the Board of Directors of Southern Region Water Board; the Board of Trustees of WaterNet, a capacity building network for water resources management in Southern Africa; and the Southern Africa Network of Water Centres of Excellence (SANWATCE). He is an External Examiner for the following Universities: Western Cape and North West in South Africa; Botswana; Zimbabwe; Lilongwe University of Agriculture and Natural Resources (LUANAR); Mzuzu and Malawi University of Science and Technology (MUST). ",
    image: Ngongondo,
  },
  {
    id: 6,
    name: "Dr Robert Ridley",
    title: "Board of Trustees",
    description:
      "Dr Robert Ridley’s career spans academia, industry, international public health and diplomacy.  He was appointed Vice-Chancellor of Unicaf University in Malawi in July 2020, after serving as Deputy Vice-Chancellor from October 2018. He was previously Vice-Chancellor at Mzuzu University in Malawi from 2013 to 2017, and Pro Vice-Chancellor at the University of Malawi from 2011. His academic expertise covers malaria drug and vaccine research, public health, public private partnerships and innovation, with over 100 scientific publications and several patents. Following an honours degree at Cambridge University and a PhD at Wolverhampton, he held positions at the University of Malawi, McMaster University and Edinburgh University from 1980 to 1992. From 1992 to 1998 he was a Vice-Director at Roche pharmaceutical company in Switzerland, heading their malaria drug discovery programme. In 1999 he was instrumental in establishing the Medicines for Malaria Venture, an international public private partnership linking academics to pharmaceutical companies through the provision of grants for the discovery and development of antimalarial drugs, where he served as Acting Chief Executive Officer and as Chief Scientific Officer. From 2002 he joined the Special Programme for Research and Training in Tropical Diseases (TDR) at the World Health Organization in Geneva, where he was Director from 2004 till he returned to Malawi in 2011. TDR provides support for research and capacity building on diseases of poverty, acting at the interface of research, evidence generation, policy and the implementation of health interventions for the strengthening of health systems.",
    image: Ridley,
  },
];

export default function Trustees() {
  return (
    <>
      <div>
        <section className="w-full text-black pt-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                TRUSTEES
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>

        <div className="mt-20 flex justify-center ">
          <section className="w-full space-y-9 justify-center flex ">
            <div className="max-w-7xl  ">
              <Grid container spacing={6}>
                {trustees.map((item) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      xl={4}
                      key={item.id}
                      className=" flex justify-center align-middle items-center col-span-1 py-10 mx-8 "
                    >
                      <div className="p-4 shadow-xl h-[580px] align-middle items-center overflow-hidden rounded-lg w-full  hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500">
                        <div className=" flex justify-center h-96  rounded-t-lg overflow-hidden w-full object-fill items-center align-middle">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-full w-full object-cover"
                          />
                        </div>
                        <div className="font-bold py-2">{item.name}</div>
                        <div className="text-sm pb-2">{item.title}</div>
                        <div className="line-clamp-4 text-gray-500 text-sm italic">
                          {item.description}
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
        <section className="w-full text-black pt-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                SECRETARIAT
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black pt-10 bg-white">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <div>
              <div>
                The Secretariat for the universities and colleges association of
                Malawi is housed in Zomba, Malawi. Its main function is to
                implement all resolutions and policies of the association whose
                major role is to promote and advance higher education in Malawi.
                The Secretariat is headed by an executive director who is
                responsible for the overall administration of the association
                and the Secretariat.
              </div>
              <div className="py-20">
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    className=" flex justify-center align-middle items-center col-span-1 py-10  "
                  >
                    <div className=" p-4 shadow-xl align-middle items-center overflow-hidden rounded-lg w-full  hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500">
                      <div className=" flex justify-center h-96  rounded-t-lg overflow-hidden w-full object-fill items-center align-middle">
                        <Image
                          source={Sharon}
                          alt=""
                          styling=" items-center justify-center h-full w-full object-cover"
                        />
                      </div>
                      <div className="font-bold py-2">Prof. Sharon Pittman</div>
                      <div className="text-sm pb-2">Executive Director</div>
                      <div className="line-clamp-4 text-gray-500 text-sm italic"></div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
