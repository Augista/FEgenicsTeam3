import React from "react";
import Typography from "@/components/Typography";
import NextImage from "@/components/NextImage";
import Button from "@/components/button/button";

interface DoctorCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

function DoctorCard({
  title,
  description,
  price,
  imageSrc,
}: DoctorCardProps) {
  return (
    <div className={`w-[381px] h-[473px] rounded-[10px] border border-normal flex flex-col gap-4 justify-center items-center`}>
      <NextImage
        src={imageSrc}
        alt={title}
        width={140}
        height={140}
        imgClassName="rounded-full"
      />
      <Typography variant="t" weight="semibold" className="mt-2">
        {title}
      </Typography>
      <Typography variant="bl" weight="regular">
        {description}
      </Typography>
      <Typography variant="bl" weight="semibold" className="text-normal">
        {price}
      </Typography>
      <div className="flex flex-col gap-2 mt-2">
        <Button href="" size="medium" className="w-[330px]">
          Konsultasi Sekarang
        </Button>
        <Button href="" size="medium" className="w-[330px]">
          Buat Jadwal
        </Button>
      </div>
    </div>
  );
}

export default DoctorCard;
