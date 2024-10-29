import Typography from "@/components/Typography";
import Button from "@/components/button/button";
import NextImage from "@/components/NextImage";
import FeatureCard from "./feature-card";
import TestimonialCard from "./testi-card";

export default function Landing() {
  return (
    <section className="w-full h-full">
      <section className="h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <NextImage
            src="/landing/landing-img.png"
            alt="landing"
            width={500}
            height={400}
            className=""
          />
          <Typography
            variant="h6"
            as="h6"
            weight="medium"
            className="text-center"
          >
            Satu Tempat untuk Kesehatanmu:
            <br /> Konsultasi, Pembelajaran, hingga Diskusi
          </Typography>
          <Button href="" size="small" className="mt-4">
            Mulai Sekarang
          </Button>
        </div>
      </section>
      <section className="h-full w-full overflow-hidden bg-light">
        <div className="m-20 text-center flex flex-col justify-start items-center">
          <div className="mb-16">
            <Typography
              variant="t"
              weight="medium"
              className="text-center text-button"
            >
              FEATURES
            </Typography>
            <Typography
              variant="h6"
              as="h6"
              weight="bold"
              className="text-center text-button"
            >
              Apa Saja yang Disediakan?
            </Typography>
          </div>
          <div className="flex flex-col w-full justify-center items-center space-y-8">
            <FeatureCard
              title="Konsultasi Langsung dengan Dokter untuk Kesehatan Menyeluruh"
              description="Jaga kesehatan tubuh dan pikiranmu dengan berbicara langsung kepada dokter profesional. Dapatkan saran yang tepat untuk setiap masalah kesehatan yang kamu alami, baik fisik maupun mental."
              imageSrc="/landing/konsul.png"
              buttonText="Chat Sekarang"
            />
            <FeatureCard
              title="Learning Path Terstruktur untuk Meningkatkan Kesehatanmu"
              description="Dari tips menjaga kebugaran fisik, panduan nutrisi, hingga kesejahteraan mental, semua bisa kamu pelajari untuk hidup yang lebih baik."
              imageSrc="/landing/belajar.png"
              buttonText="Belajar Sekarang"
              className="flex-row-reverse items-start"
            />
            <FeatureCard
              title="Forum Diskusi Kesehatan untuk Berbagi Pengalaman dan Solusi"
              description="Bergabunglah dengan komunitas yang peduli pada kesehatan. Di sini, kamu bisa berbagi cerita, menemukan jawaban, dan saling mendukung dalam perjalanan menuju hidup yang lebih sehat."
              imageSrc="/landing/diskusi.png"
              buttonText="Diskusi Sekarang"
            />
          </div>
        </div>
      </section>

      <section className="h-screen w-full overflow-hidden">
        <div className="m-20 text-center flex flex-col justify-start items-center">
          <div className="mb-16">
            <Typography
              variant="t"
              weight="medium"
              className="text-center text-button"
            >
              TESTIMONIALS
            </Typography>
            <Typography
              variant="h6"
              as="h6"
              weight="bold"
              className="text-center text-button"
            >
              Apa yang Mereka Katakan?
            </Typography>
          </div>
          <div className="flex space-x-8">
            <TestimonialCard
              testimonial="Aplikasi ini memudahkan kamu buat konsultasi langsung dengan dokter, praktis dan cepat, tanpa ribet harus ke klinik."
              profileSrc="/landing/profile.png"
              name="A"
              role="Pelajar"
              rating={5}
            />
            <TestimonialCard
              testimonial="Di forum diskusi, kamu bisa berbagi pengalaman soal kesehatan, saling kasih dukungan, dan nemuin solusi bareng komunitas yang peduli."
              profileSrc="/landing/profile.png"
              name="B"
              role="Ibu Rumah Tangga"
              rating={5}
            />
            <TestimonialCard
              testimonial="Ada jalur pembelajaran lengkap mulai dari kebugaran fisik hingga kesehatan mental, jadi kamu bisa terus belajar untuk hidup lebih sehat setiap hari!"
              profileSrc="/landing/profile.png"
              name="C"
              role="Pekerja Kantoran"
              rating={5}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
