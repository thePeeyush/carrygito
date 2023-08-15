import data from '@/data/faq.json';

function Faq() {
  return (
    <div className="max-w-5xl mx-auto container my-20 px-4">
      <div>
        <h1 className=" font-bold text-gray-900 text-3xl mx-2 mb-10">FAQs</h1>
      </div>
      <div className="flex flex-col gap-8">
      {
        data.QAs.map((element,index)=>{
            return(
                <QA que={element.Q} ans={element.A} key={index} open={index === 0 ? true : false} />
            )
        })
      }
      </div>
    </div>
  );
}

function QA({ que, ans ,open  }) {
  return(
    <details className="group [&_summary::-webkit-details-marker]:hidden"  open={open} >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
      <h2 className="font-medium">{que}</h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className=" p-4 rounded-b -translate-y-2 leading-relaxed text-green-700 bg-green-100">{ans}</p>
  </details>
  )
}

export default Faq;
