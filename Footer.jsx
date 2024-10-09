import React from 'react';
import {AiFillFacebook} from "react-icons/ai";
import {IoLogoInstagram} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className="grid gap-5">
      <hr className="border-t border-black w-full" />

      <div className="flex space-x-4 justify-between p-2 mx-12 flex-wrap">
        <div className=" grid grid-cols-1 gap-8 p-0 m-2">
          <span className="font-bold">LOGO</span>

          <div className="flex flex-row space-x-2">
          <AiFillFacebook className="w-6 h-6"/>
          <IoLogoInstagram className="w-6 h-6"/>
          <FaXTwitter className="w-6 h-6"/>
          </div>
        </div>
        
        <div className="flex flex-col">
          <p>pagelink1</p>
          <p>pagelink2</p>
          <p>pagelink3</p>
          <p>pagelink4</p>
        </div>

        <div className="flex flex-col">
          <p>pagelink1</p>
          <p>pagelink2</p>
          <p>pagelink3</p>
          <p>pagelink4</p>
        </div>

        <div className="flex flex-col">
          <p>pagelink1</p>
          <p>pagelink2</p>
          <p>pagelink3</p>
          <p>pagelink4</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
