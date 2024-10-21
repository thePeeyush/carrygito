import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./Formelements";
import { createSession } from "@/utility/authentication";
import { useState } from "react";
import LoadingBar from "./LoadingBar";
import userData from "../store/userdata";
import OtpVerification from "./OtpVerification";

const schema = yup
  .object({
    phone: yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits"),
  })

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [sessionCreated, setSessionCreated] = useState(false);
  const {setuserId} = userData(s=>s)
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await createSession({data});
    if(res.status === 'success'){
      setLoading(false);
      setSessionCreated(true);
      console.log(res);
      setuserId(res.data.userId);
    }else{
      setLoading(false);
    }
  };

    if(sessionCreated) return <OtpVerification/>;

    return (
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col py-4 h-fit w-80 md:w-96"
    >
      <Input
        label={"Phone"}
        name={"phone"}
        register={register}
        errors={errors}
        type="number"
        autoComplete="on"
        className="input"
      />
      <button
        type="submit"
        className="bg-green-500 p-2 h-11 text-white rounded mt-10"
      >
        {
          loading ? (<LoadingBar />) : ("Login")
        }
      </button>
    </form>
    )
}

  