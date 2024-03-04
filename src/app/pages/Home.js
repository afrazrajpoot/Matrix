import React from "react";
import Header from "../components/Header";
import RecentWork from "../components/homeComponents/RecentWork";

import OurTechnologies from "../components/homeComponents/OurTechnologies";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";

// SVG icon component for the tick symbol


const Home = () => {
  let arr = [
    {
      img: "/img/our-process.PNG",
      title: "Strategy",
      desc: [
        " ✓ Digital Strategy",
        " ✓ Brand Strategy",
        " ✓ Digital transformation",
      ],
    },
    {
      img: "/img/web-development.PNG",
      title: "Experience Design",
      desc: [
        " ✓ Website Design",
        " ✓ Mobile App Design",
        " ✓ eCommerce Design",
        " ✓ Global Experience Assessment",
        " ✓ Data Curation + Labeling",
        " ✓ Information Architecture + User Experience",
      ],
    },
    {
      img: "/img/content-management-systems.PNG",
      title: "Technology",
      desc: [
        " ✓ Solution Architecture",
        " ✓ Website Development",
        " ✓ Mobile App Development",
        " ✓ eCommerce Development",
        " ✓ Global Experience Assessment",
        " ✓ Data Curation + Labeling",
        " ✓ Information Architecture + User Experience",
      ],
    },
    {
      img: "/img/web-development.PNG",
      title: "Digital Marketing",
      desc: [
        " ✓ Website Design",
        " ✓ Mobile App Design",
        " ✓ eCommerce Design",
        " ✓ Global Experience Assessment",
        " ✓ Data Curation + Labeling",
        " ✓ Information Architecture + User Experience",
      ],
    },
    {
      img: "/img/content-management-systems.PNG",
      title: "Digital Marketing",
      desc: [
        " ✓ Website Design",
        " ✓ Mobile App Design",
        " ✓ eCommerce Design",
        " ✓ Global Experience Assessment",
        " ✓ Data Curation + Labeling",
        " ✓ Information Architecture + User Experience",
      ],
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <main className="bg-slate-100">
        <RecentWork />
        <section className="mt-[3vw] ">
          <h1 className="font-medium text-[1.5vw] mt-[2vw] w-full flex justify-center flex-col items-center">
            What we do
            <div className="border-black border-solid border-[1px] w-full  max-w-[10vw]"></div>
          </h1>

          <div className=" mt-[1.5vw] pt-[2vw] px-[5vw] flex justify-center items-start  ml-[3.5vw] ">
            {arr?.map((elem, i) => (
              <>
                <div
                  key={i}
                  className="p-4 rounded-lg max-w-[30vw] relative ml-[2vw] "
                >
                  <div
                    className="h-[5vw] w-[5vw] mt-[-1.5vw] ml-[-1vw] rounded-full"
                    style={{
                      background: "linear-gradient(to right, #000080, #000000)",
                    }}
                  >
                    <img src={elem.img} alt="" className="w-full h-full" />
                  </div>
                  <div className="mt-[1vw]">
                    <h1 className="text-[1.2vw] ml-[-1vw]  font-medium">
                      {elem.title}
                    </h1>

                    <ul className="list-disc pl-4">
                      {elem.desc.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-700 flex  justify-start text-[0.9vw] leading-[2vw]"
                        >
                          <span className=" ml-[-2vw]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {i !== arr.length - 1 && (
                    <div className="absolute inset-0  border-r-[1px] border-solid h-[23vw] border-gray-300 opacity-1"></div>
                  )}
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
      <OurTechnologies />
      <WhyChooseUs />
    </>
  );
};

export default Home;
