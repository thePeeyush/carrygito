export function Select({ label, register, options, name, errors, className }) {
    return (
      <>
        <label htmlFor={name} className=" text-sm text-gray-500 translate-x-4 translate-y-2 bg-white w-fit px-1 rounded-md mt-4 font-medium" >{label}</label>
        <select id={name} {...register(name)} className= {`border rounded p-3 text-sm text-gray-500 ${className}`}>
        {options.map((value) => (
          <option key={value} value={value}>
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