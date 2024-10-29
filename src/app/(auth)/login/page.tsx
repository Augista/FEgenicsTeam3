import Image from "next/image";
export default function Login() {
  return (
    <section className="bg-[#CDDDFF] px-8 lg:px-24 py-16 w-full h-screen">
      <div className="bg-white rounded-2xl w-full h-full flex">
        <div className="w-full px-8 lg:w-[60%] p-12 lg:px-24 h-full justify-center flex flex-col space-y-3">
          <h1 className="text-black font-kumbh text-4xl mb-3">
            Masuk ke <span className="text-[#458FF6]">X</span>
          </h1>
          <div>
            <input
              type="text"
              placeholder="Email/Username"
              className="w-full p-3 my-2 border-[1px] border-[#B3B3B3] rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 my-2 border-[1px] border-[#B3B3B3] rounded-md"
            />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-[#B3B3B3]">Ingat saya</label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <button className="w-full bg-[#458FF6] text-white p-2 rounded-md my-2">
              Masuk
            </button>
            <button className="bg-[#ECF4FE] px-3 h-fit py-2 rounded-md">
              <Image
                src="/login/google.png"
                alt="google"
                width={28}
                height={28}
              ></Image>
            </button>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-[#458FF6] text-center">
              Lupa Password?
            </a>
            <a href="#" className="text-[#458FF6] text-center">
              <span className="text-[#B3B3B3]">Belum punya akun?</span> Daftar
            </a>
          </div>
        </div>
        <div className="bg-[#EFF4FF] rounded-2xl w-[40%] hidden lg:flex items-center justify-center">
          <Image
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
