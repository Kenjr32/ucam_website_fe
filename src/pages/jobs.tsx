import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Finance from "../assets/resources/Files/UCAM Job Advert.pdf";


const Jobs = [
  {
    id: 1,
    title: "Finance and Administration Officer",
    description: "Download to see Job Description",
    file: Finance,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSegNg-_hAtqZW02hiHtfm1pYROj7UsXn06ZxHko04EoF6iJDA/viewform?usp=sf_link",
    size: "260 kb",
  },
  {
    id: 2,
    title: "Finance and Administration Officer",
    description: "Download to see Job Description",
    file: Finance,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSegNg-_hAtqZW02hiHtfm1pYROj7UsXn06ZxHko04EoF6iJDA/viewform?usp=sf_link",
    size: "260 kb",
  },
];

export default function AvailableJobs() {
  return (
    <>
      <div>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full  max-w-7xl mx-auto items-center flex justify-center">
            <div></div>
            <div className="w-full xl:max-w-7xl ">
              <ol type="1">
                {Jobs.map((item) => {
                  return (
                    <li key={item.id} className="py-10 ">
                      <div className="font-bold lg:text-xl md:text-base pb-2">
                        {item.id}. {item.title}
                      </div>
                      <div className="px-2 pb-5">
                        <div className="font-medium">i. Job description</div>
                        <div className="py-8">
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 150 }}
                              size="small"
                              aria-label="striped table"
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell>
                                    <p className="font-bold lg:text-xl md:text-base">
                                      Name
                                    </p>
                                  </TableCell>
                                  <TableCell align="left">
                                    <p className="font-bold lg:text-xl md:text-base">
                                      Description
                                    </p>
                                  </TableCell>
                                  <TableCell align="center">
                                    <p className="font-bold lg:text-xl md:text-base">
                                      Size
                                    </p>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow
                                  key={item.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                  className="bg-gray-200"
                                >
                                  <TableCell component="th" scope="row">
                                    {item.title}
                                  </TableCell>
                                  <TableCell align="left">
                                    {item.description}
                                  </TableCell>
                                  <TableCell align="center">
                                    <div className="text-base font-medium py-0">
                                      {item.size}
                                    </div>
                                    <div className="w-full flex justify-center">
                                      <a href={item.file} target="_blank">
                                        <div className="p-2 bg-red-700 rounded-lg text-white w-24">
                                          Download
                                        </div>
                                      </a>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </div>
                        <div className="pb-8 font-medium">ii. Application Form</div>
                        <div className="w-full flex justify-start mx-5">
                          <a href={item.link} target="_blank">
                            <div className="p-2 bg-red-700 rounded-lg text-white w-24 justify-center flex">
                              Apply
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
