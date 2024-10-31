import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import InputWithIcon from "@/components/form/input";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  return (
    <section className="bg-background px-8 lg:px-24 py-8 w-full h-screen">
      <div className="bg-white rounded-2xl w-full h-full flex">
      <div className="w-full px-8 lg:w-3/5 p-12 lg:px-20 h-full justify-center flex flex-col space-y-3">
          <Typography variant="h5" weight="medium" className="">
            Masuk ke <span className="text-[#458FF6]">X</span>
          </Typography>
          <div>
            <InputWithIcon
              icon={FiUser}
              placeholder="Email/Username"
              type="text"
              inputClassName="text-sm border-gray-400 rounded-lg"
              iconClassName="text-button"
            />
            <InputWithIcon
              icon={IoLockClosedOutline}
              placeholder="Password"
              type="password"
              inputClassName="text-sm border-gray-400 rounded-lg"
              iconClassName="text-button"
            />
            <div className="flex items-center">
              <Typography variant="bs" className="mt-2">
                <input type="checkbox" className="mr-2" />
                <label className="">
                  Saya setuju dengan semua{" "}
                  <span className="text-[#458FF6]">syarat dan ketentuan*</span>
                </label>
              </Typography>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <button className="w-full text-sm bg-[#458FF6] text-white py-[11px] rounded-md my-2">
              Masuk
            </button>
            <button className="bg-[#ECF4FE] px-3 h-fit py-2 rounded-md">
              <NextImage
                src="/login/google.png"
                alt="google"
                width={28}
                height={28}
              />
            </button>
          </div>
          <div className="flex flex-col">
            <a href="#">
              <Typography variant="bs" className="text-button text-center">
                Lupa Password?
              </Typography>
            </a>
            <a href="#" className="text-[#458FF6] text-center">
              <Typography variant="bs" className="text-button text-center">
                <span className="text-gray-400"> Belum punya akun? </span>Daftar
              </Typography>
            </a>
          </div>
        </div>
        <div className="bg-[#EFF4FF] rounded-2xl w-[40%] hidden lg:flex items-center justify-center">
          <NextImage
            src="/login/login-img.png"
            alt="doctor"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
