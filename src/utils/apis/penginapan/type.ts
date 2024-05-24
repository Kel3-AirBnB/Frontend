export interface Foto {
  url: string;
}

export interface Penginapan {
  id: number;
  nama: string;
  alamat: string;
  rating: string;
  foto: Foto[];
  deskripsi: string;
  harga: number;
}