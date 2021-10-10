import React from "react";
import styledCom from "styled-components";
import { useForm, useWatch, Control } from "react-hook-form";

type FormValues = {
  amount: number;
};



const AmountFieldArea = styledCom.form`
    background-color: white;
    border-radius:10px;
    border-radius:rounded;
    height:45px;
    width:380px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const AmountField = styledCom.input`
    background-color: white;
    border-radius:10px;
    border-radius:rounded;
    height:45px;
    width:380px;
    font-size:20px !important;
    color: black;
`;


interface Props {}

const AmountInput: React.FC<Props> = () => {
  const { register} = useForm<FormValues>();

  return (
    <AmountFieldArea>
      <AmountField {...register("amount")} />
    </AmountFieldArea>
  );
}

export default AmountInput;