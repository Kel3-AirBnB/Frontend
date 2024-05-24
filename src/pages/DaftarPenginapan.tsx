import MainLayout from "@/layouts/MainLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/fragments/Table";
import { Button } from "@/components/elements/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { red } from "@mui/material/colors";
import { useState } from "react";

const DaftarPenginapan = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="capitalize text-xl font-bold">My Homestay List</h1>
          <Button onClick={() => setModal(true)} className="bg-[#FF385C] hover:bg-[#D21F40]">
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
                <img className="w-fit h-24" src="https://source.unsplash.com/photos/mR1CIDduGLc" alt="" />
              </TableCell>
              <TableCell className="font-medium">Hotel 1</TableCell>
              <TableCell>Jakarta</TableCell>
              <TableCell>Rp. 1.000.000</TableCell>
              <TableCell>4.5</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <Button className="hover:bg-transparent" variant="ghost">
                  <EditOutlinedIcon className="hover:text-blue-700" color="primary" />
                </Button>
                <Button className="hover:bg-transparent" variant="ghost">
                  <DeleteOutlinedIcon className="hover:text-red-700" sx={{ color: red[400] }} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {modal && (
        <>
          <div onClick={() => setModal(false)} className="fixed top-0 w-full h-full bg-black/30"></div>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4 h-4/5 overflow-scroll bg-white rounded-lg">
            <div className="h-14 border-b p-3">
              <h1 className="text-xl font-bold text-center">Add Homestay</h1>
            </div>
            <div className="w-full">
              <form className="w-full flex flex-col items-center">
                <div className="w-4/5">
                  <label htmlFor="name">Name</label> <br />
                  <input type="text" id="name" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" />
                </div>
                <div className="w-4/5">
                  <label htmlFor="harga">Harga</label> <br />
                  <input type="number" id="harga" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" />
                </div>
                <div className="w-4/5">
                  <label htmlFor="deskripsi">Deskripsi</label> <br />
                  <textarea id="deskripsi" className="w-full border border-gray-300 rounded-md focus:outline-none p-2"></textarea>
                </div>
                <div className="w-4/5">
                  <label htmlFor="alamat">Alamat</label> <br />
                  <textarea id="alamat" className="w-full border border-gray-300 rounded-md focus:outline-none p-2"></textarea>
                </div>
                <div className="w-4/5">
                  <label htmlFor="foto">Foto</label> <br />
                  <input type="file" id="foto" className="w-full border border-gray-300 rounded-md focus:outline-none p-2" multiple />
                </div>
                <button className="w-4/5 my-5 p-3 rounded-full bg-red-800 text-white hover:bg-red-900">Submit</button>
              </form>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default DaftarPenginapan;
