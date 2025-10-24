import React from 'react'

type Props = {
    bentoText1 : string
    bentoDesc1 : string
    
    bentoText2 : string
    bentoDesc2 : string

    bentoText3 : string
    bentoDesc3 : string
}


const BentoGrid = ({ bentoText1, bentoDesc1, bentoText2, bentoDesc2, bentoText3, bentoDesc3 } : Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 mt-20">
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br bg-blue-700 rounded-2xl p-6 flex flex-col justify-between bento-animation gap-4">
            <h2 className="text-2xl font-bold text-white">{bentoText1}</h2>
            <p className="text-sm opacity-80 text-gray-100 font-semibold">{bentoDesc1}</p>
        </div>

        <div className="bg-transparent text-white rounded-2xl p-6 flex flex-col gap-4 justify-between bento-animation border-2 border-gray-100">
            <h3 className="lg:text-2xl font-semibold text-black">{bentoText2}</h3>
            <p className="text-sm opacity-70 text-gray-700">{bentoDesc2}</p>
        </div>

        <div className="bg-blue-700 text-white rounded-2xl p-6 flex flex-col gap-4 justify-between bento-animation">
            <h3 className="text-2xl font-semibold">{bentoText3}</h3>
            <p className="text-sm opacity-70">{bentoDesc3}</p>
        </div>

        <div className="md:col-span-2 bg-transparent rounded-2xl p-6 gap-4 text-white flex flex-col justify-between bento-animation">
            <h3 className="text-2xl font-semibold text-black">{bentoText1}</h3>
            <p className="text-sm opacity-80 text-gray-700">{bentoDesc1}</p>
        </div>
    </section>
  )
}

export default BentoGrid