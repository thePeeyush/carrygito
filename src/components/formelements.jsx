
export function Select({ label, register, options, name, errors, className, selectedPlan }) {

    const DefaultPlan = () =>{
      if(selectedPlan == 79){
        return "₹79/- one Meal"
      }
      if(selectedPlan == 2899){
        return "₹2899/- Lunch + Dinner"
      }
      if(selectedPlan == 1699){
        return "₹1699/- only Lunch"
      }
      
    }

    return (
      <>
        <label htmlFor={name} className=" text-sm text-gray-500 translate-x-4 translate-y-2 bg-white w-fit px-1 rounded-md mt-4 font-medium" >{label}</label>
        <select id={name} {...register(name)} defaultValue={DefaultPlan()} className= {`border rounded p-3 text-sm text-gray-500 ${className}`}>
        <option selected hidden disabled>Select your {name}</option>
        {options.map((value,index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      {errors[name] && <p className="text-red-700 text-sm bg-yellow-100 rounded-b">{"☝️ ! " + errors[name].message}</p>}
      </>
      
    )
  }

  export function Input({label, name , register, errors, type, className ,...rest}) {
    return(
      <>
        <label htmlFor={name} className=" text-sm text-gray-500 translate-x-4 translate-y-2 bg-white w-fit px-1 rounded-md mt-4 font-medium">{label}</label>
        <input id={name} {...rest} {...register(name)} type={type} className= {`border rounded p-3 text-sm font-medium text-gray-500 ${className}`}/>
        {errors[name] && <p className="text-red-700 text-sm bg-yellow-100 rounded-b">{"☝️ ! " + errors[name].message}</p>}
      </>
    ) 
  }