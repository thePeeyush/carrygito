import Image from "next/image"

export const Show = () => {
    return(
        <div className=" bg-green-50 p-8">
            <div className="my-8">
        <h1 className="text-4xl lg:text-6xl text-gray-700 text-center font-bold">
          First Glance
        </h1>
        <p className="text-center text-md text-gray-500 py-4">
            Our expert chefs prepare fresh and flavorful dishes every day.
        </p>
      </div>
            <div className=" flex flex-wrap gap-20 justify-center items-center" >
            <div>
            <Image
            src="/bag.png"
            alt="show image"
            width={500}
            height={500}
            className=" max-w-[200px] md:max-w-xs"
            />
            </div>
            <div className=" rounded shadow-lg overflow-hidden">
            <Image
            src="/foods.png"
            alt="show image"
            width={800}
            height={500}
            className=" max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-4xl "
            />
            </div>
        </div>
        </div>
    )
}