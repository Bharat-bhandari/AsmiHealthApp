import React from "react";

import img1 from "../assets/image/image4.png";

import AditiImage from "../assets/image/Counselor/Aditi.jpg";
import AsthaImage from "../assets/image/Counselor/Astha.jpeg";
import CharviImage from "../assets/image/Counselor/Charvi.jpg";
import FeliciaImage from "../assets/image/Counselor/Felicia.jpg";
import IshaImage from "../assets/image/Counselor/Isha.jpeg";
import JanviImage from "../assets/image/Counselor/Janvi.jpg";
import JasmineImage from "../assets/image/Counselor/Jasmine.jpeg";
import KartikaImage from "../assets/image/Counselor/Kartika.jpeg";
import KashishImage from "../assets/image/Counselor/Kashish.jpeg";
import LakshaImage from "../assets/image/Counselor/Laksha.png";
import LekshmyImage from "../assets/image/Counselor/Lekshmy.jpg";
import ManjulaImage from "../assets/image/Counselor/Manjula.jpeg";
import ManviSodhiImage from "../assets/image/Counselor/Manvi Sodhi.jpg";
import MeghaImage from "../assets/image/Counselor/Megha.jpg";
import MohitVermaImage from "../assets/image/Counselor/Mohit Verma.jpeg";
import MuskanTikooImage from "../assets/image/Counselor/Muskan Tikoo.jpeg";
import NaincyImage from "../assets/image/Counselor/Naincy.jpeg";
import NamrataImage from "../assets/image/Counselor/Namrata.jpg";
import PrernaImage from "../assets/image/Counselor/Prerna.jpeg";
import PriyankaSharmaImage from "../assets/image/Counselor/Priyanka Sharma.jpg";
import RashiImage from "../assets/image/Counselor/Rashi.jpg";
import RutvijImage from "../assets/image/Counselor/Rutvij.jpeg";
import SaloniImage from "../assets/image/Counselor/Saloni.jpeg";
import SanyaRanaImage from "../assets/image/Counselor/Sanya Rana.jpeg";
import ShivangiImage from "../assets/image/Counselor/Shivangi.jpg";
import ShraddhaSaxenaImage from "../assets/image/Counselor/Shraddha Saxena.jpg";
import ShraddhaImage from "../assets/image/Counselor/Shraddha.jpg";
import ShrinidhiImage from "../assets/image/Counselor/Shrinidhi.jpg";
import ShrutiImage from "../assets/image/Counselor/Shruti.jpeg";
import SonaliVermaImage from "../assets/image/Counselor/Sonali Verma.jpg";
import UtkarshImage from "../assets/image/Counselor/Utkarsh.jpg";
import VanithaImage from "../assets/image/Counselor/Vanitha.png";

const counselorNames = [
  "Aditi",
  "Astha",
  "Charvi",
  "Felicia",
  "Isha",
  "Janvi",
  "Jasmine",
  "Kartika",
  "Kashish",
  "Laksha",
  "Lekshmy",
  "Manjula",
  "Manvi Sodhi",
  "Megha",
  "Mohit Verma",
  "Muskan Tikoo",
  "Naincy",
  "Namrata",
  "Prerna",
  "Priyanka Sharma",
  "Rashi",
  "Rutvij",
  "Saloni",
  "Sanya Rana",
  "Shivangi",
  "Shraddha Saxena",
  "Shraddha",
  "Shrinidhi",
  "Shruti",
  "Sonali Verma",
  "Utkarsh",
  "Vanitha",
];

const counselorImages = [
  AditiImage,
  AsthaImage,
  CharviImage,
  FeliciaImage,
  IshaImage,
  JanviImage,
  JasmineImage,
  KartikaImage,
  KashishImage,
  LakshaImage,
  LekshmyImage,
  ManjulaImage,
  ManviSodhiImage,
  MeghaImage,
  MohitVermaImage,
  MuskanTikooImage,
  NaincyImage,
  NamrataImage,
  PrernaImage,
  PriyankaSharmaImage,
  RashiImage,
  RutvijImage,
  SaloniImage,
  SanyaRanaImage,
  ShivangiImage,
  ShraddhaSaxenaImage,
  ShraddhaImage,
  ShrinidhiImage,
  ShrutiImage,
  SonaliVermaImage,
  UtkarshImage,
  VanithaImage,
];

const CounselorPage = () => {
  return (
    <div className="container py-[5%] mx-auto">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full max-w-5xl mt-32">
          <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
            Counsellors
          </div>
          <h1 className="text-6xl font-semibold text-neutral-900 leading-[1.1] mb-6">
            Meet Our Counsellors
          </h1>
          <p className="mb-24">
            At Asmi's Mental Health wellness, our psychologists possess a unique
            blend of clinical expertise and genuine compassion. Our meticulous
            selection process ensures a team dedicated to your well-being in a
            safe and supportive environment.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-10 mx-auto px-[6%]">
          {counselorImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md"
              style={{ width: "300px", height: "350px" }}
            >
              <img
                src={image}
                alt={`Counselor ${counselorNames[index]}`} // Display counselor name instead of index
                className="object-cover object-center w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
                <div className="text-center">
                  <h1 className="text-xl font-semibold">
                    {counselorNames[index]}
                  </h1>
                  <h2 className="text-sm">Psychologist</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorPage;
