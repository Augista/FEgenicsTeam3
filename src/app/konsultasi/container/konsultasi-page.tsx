import Typography from "@/components/Typography";
import Button from "@/components/button/button";
import NextImage from "@/components/NextImage";
import DoctorCard from "./doctor-card";

export default function Konsultasi() {
    return (
        <section className="w-full h-full">
            <section className="w-full h-screen flex items-center justify-between bg-light px-[100px]">
                <div className="flex flex-col justify-center relative">
                    <Typography
                        variant="h4"
                        as="h4"
                        weight="medium"
                        className="text-left"
                    >
                        Konsultasi Kesehatan,
                        <br /> Kapan Saja dan Dimana Saja
                    </Typography>
                    <Typography
                        variant="t"
                        as="h6"
                        weight="light"
                        className="text-left text-gray-400 my-4"
                    >
                        Akses layanan konsultasi kesehatan dengan dokter
                        <br /> profesional secara online 24/7.
                    </Typography>
                    <div className="absolute w-[293.91px] h-[295px] bg-[#458ff6] rounded-full blur-[450px] ml-24"></div>
                    <Button href="" size="medium" className="mt-4">
                        Konsultasi Sekarang
                    </Button>
                </div>
                <NextImage
                    src="/konsultasi/report.png"
                    alt="report-checking"
                    width={466}
                    height={366}
                    className=""
                />
            </section>
            <section className="w-full h-full py-[140px]">
                <section className="flex flex-col mx-[100px] gap-16">
                    <Typography variant="h4" as="h4" weight="medium" className="text-left">
                        Temui Dokter <span className="text-normal">X</span>!
                    </Typography>
                    <div className="flex flex-wrap gap-4">
                        <Button href="" size="large">
                            Semua
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Dokter Umum
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Dokter Gigi
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Spesialis Kulit
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Psikiater
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Spesialis Penyakit Dalam
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Spesialis THT
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Spesialis Saraf
                        </Button>
                        <Button href="" size="large" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Spesialis Jantung
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                        <DoctorCard
                            imageSrc="/konsultasi/doctor.png"
                            title="Dr. Victor Gunawan"
                            description="Dokter Umum"
                            price="Rp30.000 / 30 menit"
                        />
                    </div>
                    <div className="w-full justify-center items-center flex flex-col gap-4">
                        <Button href="" size="medium" bgColor="bg-transparent outline outline-1 outline-normal transition-colors duration-300 hover:bg-button" textColor="text-black group-hover:text-white">
                            Temukan Dokter Lainnya
                        </Button>
                        <Typography variant="bl" weight="semibold" className="text-normal">
                            9 dari 70
                        </Typography>
                    </div>
                </section>
            </section>
        </section>
    );
}