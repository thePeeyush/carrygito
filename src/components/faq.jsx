const QAs = [
  {
    Q: "In which tiffin do you pack our food?",
    A: "We pack your food in a combination of paper bags and plastic containers. Our priority is to ensure that your food remains fresh,safe, and environmentally friendly. The paper bag serves as the primary tiffin carrier, while the plastic containers offer secure and hygienic storage for your meals.",
  },

  {
    Q: "What items are included in the tiffin?",
    A: "The tiffin consists of a variety of items to provide a well-rounded meal. It includes cooked rice as the main carbohydrate, a selection of vegetables, seasoned gram in a plastic container for protein, a fresh salad for added nutrition, an aachar packet for flavor, a salt packet for seasoning, tissue paper for convenience, and an environmentally friendly paper spoon for eating.",
  },

  {
    Q: "What items are included in the tiffin?",
    A: "The tiffin consists of a variety of items to provide a well-rounded meal. It includes cooked rice as the main carbohydrate, a selection of vegetables, seasoned gram in a plastic container for protein, a fresh salad for added nutrition, an aachar packet for flavor, a salt packet for seasoning, tissue paper for convenience, and an environmentally friendly paper spoon for eating.",
  },

  {
    Q: "What items are included in the tiffin?",
    A: "The tiffin consists of a variety of items to provide a well-rounded meal. It includes cooked rice as the main carbohydrate, a selection of vegetables, seasoned gram in a plastic container for protein, a fresh salad for added nutrition, an aachar packet for flavor, a salt packet for seasoning, tissue paper for convenience, and an environmentally friendly paper spoon for eating.",
  },

  {
    Q: "What items are included in the tiffin?",
    A: "The tiffin consists of a variety of items to provide a well-rounded meal. It includes cooked rice as the main carbohydrate, a selection of vegetables, seasoned gram in a plastic container for protein, a fresh salad for added nutrition, an aachar packet for flavor, a salt packet for seasoning, tissue paper for convenience, and an environmentally friendly paper spoon for eating.",
  },

  {
    Q: "What items are included in the tiffin?",
    A: "The tiffin consists of a variety of items to provide a well-rounded meal. It includes cooked rice as the main carbohydrate, a selection of vegetables, seasoned gram in a plastic container for protein, a fresh salad for added nutrition, an aachar packet for flavor, a salt packet for seasoning, tissue paper for convenience, and an environmentally friendly paper spoon for eating.",
  },
];

function Faq() {
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <h1 className=" font-bold text-3xl mx-2 mb-10">FAQs</h1>
      </div>
      <div className="flex flex-col gap-8">
      {
        QAs.map((element,index)=>{
            return(
                <QA que={element.Q} ans={element.A} key={index}/>
            )
        })
      }
      </div>
    </div>
  );
}

function QA({ que, ans }) {
  return(
    <details className="group [&_summary::-webkit-details-marker]:hidden">
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

    <p className="mt-4 p-4 rounded-md leading-relaxed text-green-800 bg-green-200">{ans}</p>
  </details>
  )
}

export default Faq;
