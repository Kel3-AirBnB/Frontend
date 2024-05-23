import MainLayout from "@/layouts/MainLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/fragments/Table";
import { Button } from "@/components/elements/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { red } from "@mui/material/colors";

const DaftarPenginapan = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="capitalize text-xl font-bold">My Homestay List</h1>
          <Button className="bg-[#FF385C] hover:bg-[#D21F40]">
            Add New Homestay
          </Button>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Description</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  className="w-fit h-24"
                  src="https://source.unsplash.com/photos/mR1CIDduGLc"
                  alt=""
                />
              </TableCell>
              <TableCell className="font-medium">Hotel 1</TableCell>
              <TableCell>Jakarta</TableCell>
              <TableCell>Rp. 1.000.000</TableCell>
              <TableCell>4.5</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <Button className="hover:bg-transparent" variant="ghost">
                  <EditOutlinedIcon
                    className="hover:text-blue-700"
                    color="primary"
                  />
                </Button>
                <Button className="hover:bg-transparent" variant="ghost">
                  <DeleteOutlinedIcon
                    className="hover:text-red-700"
                    sx={{ color: red[400] }}
                  />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
};

export default DaftarPenginapan;
