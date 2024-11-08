"use client";

import React, { useEffect, useState } from "react";
import PortfolioList from "./portfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../data.js";
import Image from "next/image";

const Portfolio = () => {
  const [selected, setSelected] = useState("wordpress");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "wordpress",
      title: "وردپرسی",
    },
    {
      id: "wordpress1",
      title: "طراحی ui",
    },
    {
      id: "wordpress2",
      title: "طراحی سایت",
    },
  ];
  console.log(data);

  useEffect(() => {
    switch (selected) {
      case "wordpress":
        setData(featuredPortfolio);
        break;
      case "wordpress1":
        setData(webPortfolio);
        break;
      case "wordpress2":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="bg-white flex flex-col  items-center" id="Portfolio">
      <h1 className="text-[40px] portBoxShadow p-6 rounded-full m-10 mt-20 max-[640px]:text-[20px] ">
        نمونه کارهای انجام شده
      </h1>
      <ul className="  mb-12 p-0 list-none flex overflow-hidden max-[640px]:flex-wrap max-[640px]:justify-center">
        {list.map((item, index) => (
      <React.Fragment key={index}>
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
            </React.Fragment>
        ))}
      </ul>
      <div className="w-[70%]  flex items-center justify-center flex-wrap max-[640px]:w-[100%]">
      <div className="z-0 w-[1000px] h-[400px] rounded-r-full left-[20px] mt-[500px] portBoxShadow  absolute"></div>
      <div className="z-0 w-[400px] h-[800px] rounded-b-full right-[100px] mb-48 portBoxShadow  absolute"></div>
        {data.map((item, index) => (
            <React.Fragment key={index}>
          <div
            className="cursor-pointer portBoxShadow hover:shadow-none flex flex-col tran w-[320px] h-[200px] relative border rounded-xl border-solid mx-5 my-3 items-center justify-center hover:bg-violet-300/30 max-[640px]:w-[150px] max-[640px]:h-[120px]"
            style={{ zIndex: "9" }}
          >
            <Image
              className="w-[100%] h-[100%] object-cover rounded-xl z-10 hover:opacity-20"
              src={item.img}
              alt=""
              fill
            />
            <h3 className="absolute text-[20px]">{item.title}</h3>
          </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
