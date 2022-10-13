import Head from "next/head";
import Image from "next/image";
import gusti from "../public/Gusti.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen md:p-8 bg-gradient-to-tr from-slate-500 to-sky-900">
        <div className="bg-gray-800 flex items-end justify-center  md:rounded-2xl relative">
          <div className="pt-10">
            <div className="flex justify-center items-center bottom-0">
              <div className="w-2/5 hidden md:block">
                <div className="text-white text-5xl  font-bold  z-10 ">
                  Integritas,{" "}
                  <span className="text-yellow-600">
                    Mentalitas, <br /> Kualitas
                  </span>
                  , Kapabilitas <br /> & Kapasitas
                </div>
                <div className="text-white my-6">
                  Untuk mendorong pembelajaran yakinkan diri kalo ilmu yang di
                  miliki adalah basic. YAKINKAN DENGAN IMAN USAHAKAN DENGAN ILMU
                  SAMPAIKAN DENGAN AMAL
                </div>
                <div className="">
                  <Link href="/pendidikan">
                    <a>
                      <div className="bg-yellow-600 px-10 py-3 inline-block text-white  text-2xl font-medium">
                        Edukasi
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="w-96 relative bottom-0 ">
                  <Image src={gusti} layout="responsive" className="w-11" />
                </div>
              </div>

              <div className=" absolute right-0 ">
                <div className="font-bold md:px-8 px-4 text-sm md:text-base md:py-6 py-3 bg-yellow-600 text-white md:my-6 my-3 rounded-l-lg">
                  Organisasi
                </div>
                <div className="font-bold md:px-8 px-4 text-sm md:text-base md:py-6 py-3 bg-yellow-600 text-white md:my-6 my-3 rounded-l-lg">
                  Organisasi
                </div>
                <div className="font-bold md:px-8 px-4 text-sm md:text-base md:py-6 py-3 bg-yellow-600 text-white md:my-6 my-3 rounded-l-lg">
                  Organisasi
                </div>
              </div>

              <div className="absolute bottom-0 w-full right-0 bg-yellow-600 px-10 text-white  text-sm py-2 md:rounded-b-2xl">
                <div className="md:flex justify-center hidden ">
                  <div className="font-medium mx-4">github.com/gustirizkia</div>
                  <div className="font-medium mx-4">
                    <i class="fa-brands fa-instagram"></i>
                    instagram.com/gusti.rizkia
                  </div>
                  <div className="font-medium mx-4">
                    linkedin.com/in/gusti-maulana-r
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
