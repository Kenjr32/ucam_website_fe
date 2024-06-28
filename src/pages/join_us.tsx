
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  students: string,
  fee: string,
 
) {
  return { name, students, fee };
}

const rows = [
  createData("A", "1-100", "200, 000.00"),
  createData("B", "101-500", "500, 000.00"),
  createData("C", "501-2000", "1,000, 000.00"),
  createData("D", "Above 2000", "2.000, 000.00"),
  createData("E", "Central Offices", "200, 000.00"),
];
export default function JoinUs() {
   
  return (
    <>
      <div>
        <section className="w-full px-5 text-black py-20 bg-white items-center flex justify-center">
          <div className=" bg-white max-w-7xl  ">
            <div className="w-full">
              <div className="text-2xl font-semibold">
                Soliciting Membership to the Universities and Colleagues
                Association (UCAM) of Malawi{" "}
              </div>
              <div className="text-xl  py-2 font-medium">
                Dear Esteemed Colleagues,
              </div>
              <div className="font-normal">
                Welcome to the UCAM! When a college or university joins UCAM,
                your entire campus community becomes part of a national network
                of both public and private University educators committed to
                extending the advantages of quality education to all students,
                regardless of academic specialization or intended career. UCAM
                functions as a catalyst and facilitator, forging links among
                vice-chancellors, principals, administrators, faculty, and
                professional staff engaged in institutional advancement,
                research and/or curricular development. Through a broad range of
                activities, UCAM reinforces the collective commitment to quality
                education at the national and international levels. Our
                high-quality programmes, conferences, publications, research,
                meetings, training, public outreach and advocacy efforts, and
                campus-based projects at UCAM can help individual institutions
                ensure that the quality of students' learning is central to
                their work as they evolve to meet new economic, social, and
                educational challenges.
              </div>
              <div className="pt-5">
                Please join our team in the advancement of both public and
                private Universities in Malawi. Membership eligibility is as
                follows - 1: You are a registered or accredited institution by
                the National Council for Higher Education. 2: Your annual
                membership subscriptions are up to date. Annual subscriptions
                are based on the number of students enrolled in the institution
                and are as follows:
              </div>
            </div>
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
                      <p className="font-bold lg:text-xl md:text-base">
                        CATEGORY
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p className="font-bold lg:text-xl md:text-base">
                        NO OF STUDENTS
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p className="font-bold lg:text-xl md:text-base">
                        APPLICABLE FEE (MK)
                      </p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.students}</TableCell>
                      <TableCell align="right">{row.fee}</TableCell>
                    </TableRow>
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
