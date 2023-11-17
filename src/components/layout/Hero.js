import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Rigth from "../icons/Rigth";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">Todo es mejor con una Pizza</h1>
        <p className="my-4 text-gray-500">
          Pizza es la pieza que no puede faltar un fin de semana con amigos
        </p>
        <div className="flex gap-4 text-sm">
          <Button
            className="flex gap-2 items-center"
            color="bg-red-500"
            hover="hover:bg-red-700"
          >
            Pide ahora mismo
            <Rigth />
          </Button>
          <Button
            hover="hover:text-gray-500"
            className="flex gap-2 items-center text-gray-950"
          >
            Más información
            <Rigth />
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
};

export default Hero;
