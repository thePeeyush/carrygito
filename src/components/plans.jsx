export default function Plans() {
  return (
    <div id="Plans" className=" bg-green-50 w-full p-10 pb-20">
      <div className="my-8">
        <h1 className="text-6xl text-gray-800 text-center font-bold">Our Plans</h1>
        <p className="text-center text-md text-gray-500 py-4">choose the best suitable plan according to your prefrences.</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-6 justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className=" bg-white m-2 p-10 shadow-xl flex flex-col gap-4 w-full max-w-sm rounded-xl">
      <div>
        <h2 className="text-lg font-semibold text-green-600">Healthy</h2>
      </div>
      <div className="">
        <h1 className="font-bold text-4xl mb-2">
          &#8377;220<span className="text-sm font-semibold">/month</span>
        </h1>
        <p className="text-gray-600">sabse sasta sabse accha</p>
      </div>

      <div>
        <a href="#">
        <div className=" my-2 border font-semibold border-green-500 py-2 text-center rounded hover:shadow-md bg-green-500 text-white hover:bg-green-100 hover:text-green-900 transition ease-in-out duration-300">
      Buy Plan
      </div>
        </a>
      </div>
      <div>
        <ul>
          <li className=" flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                fill="green"
                fillOpacity={.5}
                height="24"
                className="mt-1 text-blue-500"
              >
                <path d="M9 16.17l-3.59-3.59a1.5 1.5 0 0 1 0-2.12l.07-.07a1.5 1.5 0 0 1 2.12 0L10 12.83l6.47-6.47a1.5 1.5 0 0 1 2.12 0l.07.07a1.5 1.5 0 0 1 0 2.12L11.41 16.17a1.498 1.498 0 0 1-2.12 0z" />
              </svg>
            </span>
            paneer sabji
          </li>
          <li className=" flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                fill="green"
                fillOpacity={.5}
                height="24"
                className="mt-1 text-blue-500"
              >
                <path d="M9 16.17l-3.59-3.59a1.5 1.5 0 0 1 0-2.12l.07-.07a1.5 1.5 0 0 1 2.12 0L10 12.83l6.47-6.47a1.5 1.5 0 0 1 2.12 0l.07.07a1.5 1.5 0 0 1 0 2.12L11.41 16.17a1.498 1.498 0 0 1-2.12 0z" />
              </svg>
            </span>
            paneer sabji
          </li>
          <li className=" flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                fill="green"
                fillOpacity={.5}
                height="24"
                className="mt-1 text-blue-500"
              >
                <path d="M9 16.17l-3.59-3.59a1.5 1.5 0 0 1 0-2.12l.07-.07a1.5 1.5 0 0 1 2.12 0L10 12.83l6.47-6.47a1.5 1.5 0 0 1 2.12 0l.07.07a1.5 1.5 0 0 1 0 2.12L11.41 16.17a1.498 1.498 0 0 1-2.12 0z" />
              </svg>
            </span>
            paneer sabji
          </li>
          <li className=" flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                fill="green"
                fillOpacity={.5}
                height="24"
                className="mt-1 text-blue-500"
              >
                <path d="M9 16.17l-3.59-3.59a1.5 1.5 0 0 1 0-2.12l.07-.07a1.5 1.5 0 0 1 2.12 0L10 12.83l6.47-6.47a1.5 1.5 0 0 1 2.12 0l.07.07a1.5 1.5 0 0 1 0 2.12L11.41 16.17a1.498 1.498 0 0 1-2.12 0z" />
              </svg>
            </span>
            paneer sabji
          </li>
        </ul>
      </div>
    </div>
  );
}
