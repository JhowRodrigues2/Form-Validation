import React from "react";
import { useState } from "react";
import formImg from "../assets/form-img.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O email é obrigatório!"),
    phone: yup
      .string()
      .min(11, "telefone deve conter DDD + Número")
      .required("O Telefone é obrigatório!"),
    CPF: yup
      .string()
      .min(11, "Digite os 11 números do CPF")
      .max(11, "CPF inválido")
      .required("O CPF é obrigatório!"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(e) {
    console.log(e);
  }
  return (
    <div className="bg-[#e6e6e6] flex h-[60vh] w-[700px] rounded-lg gap-3 p-10">
      <div className=" hidden h-[100%] xl:flex flex-col justify-center items-center">
        <img src={formImg} alt="" className="w-3/3 h-1/2" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3 w-full justify-center xl:w-1/2"
      >
        <h1 className="font-bold text-lg text-[#1E90FF]">Dados Pessoais</h1>
        <div className="relative">
          <input
            {...register("name", { required: true })}
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
          />

          <FaUser className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
          {errors.name && (
            <span className="text-red-500 font-medium">
              {errors.name?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            {...register("email", { required: true })}
            className="text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
          />
          <AiOutlineMail className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
          {errors.email && (
            <span className="text-red-500 font-medium">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="(00)00000-0000"
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
          />
          <BsTelephoneInbound className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
          {errors.phone && (
            <span className="text-red-500 font-medium">
              {errors.phone?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            {...register("CPF", { required: true })}
            placeholder="CPF, apenas números "
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
          />
          <HiOutlineIdentification className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
          {errors.CPF && (
            <span className="text-red-500 font-medium">
              {errors.CPF?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#1E90FF] w-20 text-white h-10 rounded-lg hover:bg-[#316aa3] hover:transition duration-150"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Form;
