import Image from 'next/image';
import React from 'react'

const Menu = () => {
  return (
    <div id="Menu" className=" w-full bg-white p-10 pb-20">
      <div className="my-8">
        <h1 className="text-4xl lg:text-6xl text-green-700 text-center font-bold">
          Menu
       </h1>
        <p className="text-center text-md text-gray-500 py-4">
        Tasty and delicious food customized for you
        </p>
      </div>

        <div className='flex flex-col lg:flex-row lg:text-xl text-gray-700 justify-center py-2 lg:p-8 lg:pt-0 gap-8'>
        <MenuCard img={"/1.png"}>
            <ul>
                <li>🍲 Dal</li>
                <li>🍛 Sabji</li>
                <li>🫓 Roti</li>
                <li>🍚 Rice</li>
                <li>🥗 Salad</li>
                <li>⚡ Extra</li>
              </ul>
          </MenuCard>
          <MenuCard img={"/2.png"}>
            <ul>
                <li>✌️ 2 time special</li>
                <li>🍛 Paneer Sabji</li>
                <li>🫓 Butter Roti</li>
                <li>🍚 Rice Biryani</li>
                <li>🥗 Salad</li>
                <li>⚡ Extra</li>
              </ul>
          </MenuCard>
          <MenuCard img={"/3.png"}>
            <ul>
                <li>🍲 Dal-Bhafla</li>
                <li>🍪 Chhola-Bhatura</li>
                <li>🍛 Idli-Sambhar</li>
                <li>🍚 Rice Biryani</li>
                <li>🥗 Salad</li>
                <li>🥪 BreadPakoda</li>
                <li>🍰 Sweets</li>
                <li>⚡ Extra</li>
                </ul>
          </MenuCard>
          
        </div>

        <div className=' text-center'>
          <h2 className='p-2 text-gray-400'>Aachar, Salt , Paper spoon , Tissue paper are added daily in a package. </h2>
        </div>



    </div>
  )
}


const MenuCard = ({img,children}) => { 
  return(
      <div className=' flex flex-row bg-green-50 lg:flex-col gap-8 items-start p-2 py-4 lg:pb-16 lg:items-center shadow rounded-md lg:rounded-full max-w-md lg:m-4'>
          <Image
          src={img}
          alt="food"
          width={400}
          height={400}
          className='rounded-full w-20 lg:w-56'
          />
          <div>
              {children}
          </div>
      </div>
  )
}




export default Menu;


