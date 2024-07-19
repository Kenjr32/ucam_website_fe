

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Appointment from "../assets/resources/Files/Notice of Appointment of Executive Director-June2024.pdf";
import Constitution from  "../assets/resources/Files/UCAM CONSTITUTION Web.pdf"
import Teaching from "../assets/resources/Files/what-teaching-looks-like-2022-07-27.pdf";
import Writing from "../assets/resources/Files/writing-beyond-the-university-2022-10-04-revised.pdf";
const rows = [
  {
    id: 1,
    title: "Appointment",
    description: "Appointment of Prof Pittman as Executive Director",
    file: Appointment,
    size: "252 kb",
  },
];
const administrative = [
  {
    id: 1,
    title: "UCAM CONSTITUTION",
    description: "The Constitution of UCAM in a pdf format",
    file: Constitution,
    size: "275 kb",
  },
];
const faculty = [
  {
    id: 1,
    title: "What Teaching Looks Like Higher Education through Photographs",
    description:
      "What Teaching Looks Like: Higher Education through Photographs is not just another book about improving higher education: it is a call to think differently, through and with the visual medium of photographs, about teaching and learning.",
    file: Teaching,
    size: "70,258kb(68.6mb)",
  },
  {
    id: 2,
    title: "Writing Beyond the University",
    description: "Preparing Lifelong Learners for Lifewide Writing",
    file: Writing,
    size: "5,640kb(5.50mb)",
  },
];

export default function Resources() {
  return (
    <>
      <div>
        <section className="w-full text-black pt-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                Notices
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black pb-20 bg-white items-center flex justify-center">
          <div className="w-full xl:max-w-7xl ">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 150 }}
                size="small"
                aria-label="striped table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <p className="font-bold lg:text-xl md:text-base">Name</p>
                    </TableCell>
                    <TableCell align="left">
                      <p className="font-bold lg:text-xl md:text-base">
                        Description
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold lg:text-xl md:text-base">Size</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="bg-gray-200"
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="center">
                        <div className="text-base font-medium py-0">
                          {row.size}
                        </div>
                        <div className="w-full flex justify-center">
                          <a href={row.file} target="_blank">
                            <div className="p-2 bg-red-700 rounded-lg text-white w-24">
                              Download
                            </div>
                          </a>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>
        <section className="w-full text-black pt-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                Administrative Documents
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black pb-10 bg-white items-center flex justify-center">
          <div className="w-full xl:max-w-7xl ">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 150 }}
                size="small"
                aria-label="striped table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <p className="font-bold lg:text-xl md:text-base">Name</p>
                    </TableCell>
                    <TableCell align="left">
                      <p className="font-bold lg:text-xl md:text-base">
                        Description
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold lg:text-xl md:text-base">Size</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {administrative.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="bg-gray-200"
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="center">
                        <div className="text-base font-medium py-0">
                          {row.size}
                        </div>
                        <div className="w-full flex justify-center">
                          <a href={row.file} target="_blank">
                            <div className="p-2 bg-red-700 rounded-lg text-white w-24 justify-center flex">
                              Download
                            </div>
                          </a>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>
        <section className="w-full text-black pt-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                Faculty Development Resources
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black pb-20 bg-white items-center flex justify-center">
          <div className="w-full xl:max-w-7xl ">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 150 }}
                size="small"
                aria-label="striped table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <p className="font-bold lg:text-xl md:text-base">Name</p>
                    </TableCell>
                    <TableCell align="left">
                      <p className="font-bold lg:text-xl md:text-base">
                        Description
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold lg:text-xl md:text-base">Size</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {faculty.map((row) => (
                    <>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        className="bg-gray-200"
                      >
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="center">
                          <div className="text-base font-medium py-0">
                            {row.size}
                          </div>
                          <div className="w-full flex justify-center">
                            <a href={row.file} target="_blank">
                              <div className="p-2 bg-red-700 rounded-lg text-white w-24">
                                Download
                              </div>
                            </a>
                          </div>
                        </TableCell>
                      </TableRow>
                      <div className="border-2 border-red-700 w-full"></div>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>
      </div>
    </>
  );
}
