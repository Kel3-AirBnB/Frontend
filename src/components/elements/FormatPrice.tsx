import React from "react";

function formatRupiah(harga: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);
}

interface FormatPriceProps {
  harga: number;
}

const FormatPrice: React.FC<FormatPriceProps> = ({ harga }) => {
  return <>{formatRupiah(harga)}</>;
};

export default FormatPrice;
