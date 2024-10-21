import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Select } from "./Formelements";
import { useState } from "react";
import LoadingBar from "./LoadingBar";
import userData from "@/store/userdata";
import { createProfile } from "@/utility/database";
const CreateProfile = () => {
    const schema = yup
    .object({
      fullname: yup.string().required().min(3).max(30),
      address: yup.string().required().min(3).max(50),
      area: yup.string().required().min(3).max(30).not(["Select your area"],"Please select your area"),
    })

    const [loading, setLoading] = useState(false);
    const {setProfile} = userData(s=>s)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = async (data) => {
        setLoading(true);
        const profile = await createProfile(data);
        if(profile.status === 'success'){
            setLoading(false);
            setProfile(profile.data);
            console.log(profile);
        }else{
            setLoading(false);
        }
    };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col py-4 h-fit w-80 md:w-96"
    >
      <Input
        label={"Name"}
        name={"fullname"}
        register={register}
        errors={errors}
        type="text"
        autoComplete="on"
        className="input"
      />
      <Input
        label={"address"}
        name={"address"}
        register={register}
        errors={errors}
        type="text"
        autoComplete="on"
        className="input"
      />
      <Select
        label={"Area"}
        name={"area"}
        register={register}
        errors={errors}
        options={["Bhawarkua", "IT Park", "Bholaram", "Khandwa Naka"]}
        className="input"
      />
      <button
        type="submit"
        className="bg-green-500 p-2 h-11 text-white rounded mt-10"
      >
        {
          loading ? (<LoadingBar />) : ("Continue")
        }
      </button>
    </form>
  )
}

export default CreateProfile