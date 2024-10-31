import React from "react";
import Typography from "@/components/Typography";
import NextImage from "@/components/NextImage";
import Button from "@/components/button/button";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  className?: string;
}

function FeatureCard({
  title,
  description,
  imageSrc,
  buttonText,
  className,
}: FeatureCardProps) {
  return (
    <div className={`flex w-4/5 justify-around items-center ${className}`}>
      <div className="bg-white w-fit p-8 rounded-full">
        <NextImage
          src={imageSrc}
          alt={title}
          width={180}
          height={180}
          className="rounded-full"
        />
      </div>
      <div className="flex items-start flex-col space-y-4 w-[30rem]">
        <Typography variant="h6" as="h6" weight="medium" className="text-start">
          {title}
        </Typography>
        <Typography variant="bs" className="text-gray-400 text-start">
          {description}
        </Typography>
        <Button size="small" href="">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default FeatureCard;
