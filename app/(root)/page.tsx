import Image from "next/image";
import React from "react";
import onePieceOFbackground from "../../public/svg/onePieceOFbackground.svg";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
  
      <div className="absolute inset-x-0 top-0 z-[-4] items-center justify-center ">
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
      </div>
    </>
  );
};

export default Home;
