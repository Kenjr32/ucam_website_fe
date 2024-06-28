import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createData(name: string, students: string, fee: string) {
  return { name, students, fee };
}

const rows = [
  createData("A", "1-100", "200, 000.00"),
  createData("B", "101-500", "500, 000.00"),
  createData("C", "501-2000", "1,000, 000.00"),
  createData("D", "Above 2000", "2.000, 000.00"),
  createData("E", "Central Offices", "200, 000.00"),
];
export default function OnlineApplication() {
  return (
    <>
      <div>
        <section className="w-full text-black pt-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                FILL THE FORM:
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="px-2 w-full text-black py-20 bg-white items-center flex justify-center">
          <div className="w-full max-w-7xl ">
            <div className="text-2xl pb-10">
              Please join our team in the advancement of both public and private
              Universities in Malawi. Membership eligibility is as follows:
            </div>
            <div className="py-2 text-base">
              1: You are a registered or accredited institution by the National
              Council for Higher Education.
            </div>
            <div className="py-2 text-base">
              2. Your annual membership subscriptions are up to date. Annual
              subscriptions are based on the number of students enrolled in the
              institution and are as follows:
            </div>
            <div className="flex justify-center text-2xl py-10">
              Subscription Categories
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
        <section className="w-full text-black pb-20 bg-white items-center flex justify-center">
          <div className="w-full lg:max-w-7xl ">
            <div className="justify-center flex">
              <Link
                className=""
                to="https://docs.google.com/forms/d/e/1FAIpQLSecAUqa3hVl8tsvCZTfutj9gGBEmfEQ77cGnrYR5GwqV3qPaA/viewform?usp=sf_link"
                target="_blank"
              >
                <div className="p-5 bg-red-600 text-white rounded-lg">
                  Join Us
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
