import { Penginapan } from "./type";
import data from "./dummy.json";

export const getPenginapan = (): Penginapan[] => {
  return data.penginapan;
};

export const getPenginapanById = (id: number): Penginapan | undefined => {
  return data.penginapan.find((p) => p.id === id);
};
