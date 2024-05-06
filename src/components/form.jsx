import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Select } from "./formelements";
import { createAccount } from "@/utility/authsession";
import { useState } from "react";
import LoadingBar from "./loadingbar";
import { useSearchParams } from 'next/navigation';
import { userData, userInteraction } from "../../store/userdata";

const schema = yup
  .object({
    fullname: yup.string().required(),
    phone: yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits"),
    address: yup.string().required(),
    area: yup
      .string()
      .required()
      .notOneOf(["select area"], "please choose the option"),
    plan: yup
      .string()
      .required()
      .notOneOf(["select plan"], "please choose the option"),
  })
  .required();

export default function Form() {

  const [btnClicked, setIsClicked] = useState(false);
  const selectedPlan = useSearchParams().get('plan');
  const {setData,setID} = userData(s=>s)
  const setStatus = userInteraction(s=>s.setStatus)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setIsClicked(true);
    setData(data)
    const props = {setID,data,setStatus}
    createAccount(props);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col py-4 h-fit w-80 md:w-96"
    >
      <Input
        label={"FullName"}
        name={"fullname"}
        register={register}
        errors={errors}
        autoComplete="on"
        className="input "
      />
      <Input
        label={"Phone"}
        name={"phone"}
        register={register}
        errors={errors}
        type="number"
        autoComplete="on"
        className="input"
      />
      <Input
        label={"Address"}
        name={"address"}
        register={register}
        errors={errors}
        autoComplete="on"
        className="input"
      />
      <Select
        label={"Area"}
        name={"area"}
        register={register}
        errors={errors}
        options={["Bhawarkua", "IT park", "Geeta bhawan"]}
        autoComplete="off"
        className="select"
      />
      <Select
        label={"Plan"}
        name={"plan"}
        register={register}
        errors={errors}
        selectedPlan={selectedPlan}
        options={[
          "₹79/- one Meal",
          "₹2899/- Lunch + Dinner",
          "₹1699/- only Lunch",
          "₹1699/- only Dinner",
        ]}
        autoComplete="off"
        className="select"
      />
      <button
        type="submit"
        className="bg-green-500 p-2 h-11 text-white rounded mt-10"
      >
        {
          btnClicked ? (<LoadingBar />) : ("Order Now")
        }
      </button>
    </form>
  );
}