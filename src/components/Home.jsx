import { useEffect, useState } from "react"
import { getAllPlates } from "../functions/ApiOperations"

export const Home = () => {
    const [ plates, setPlates ] = useState(null)

    useEffect(() =>{
        getAllPlates(setPlates)
    }, [])
        return (
            <>
            {
                plates !== null ? 
                <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">plates</h2>
                <h1 className="text-center mb-10 text-2xl">List of Dinner plates</h1>
    
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {plates.map((plate) => (
                        <div key={plate.idMeal} href="#" className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={plate.strMealThumb}
                                    alt={plate.strMealThumb}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-lg text-gray-700 text-center">{plate.strMeal}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">{plate.strCategory}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">{plate.strArea}</h3>
                            <a className="mt-4 text-sm text-sky-400" href={plate.strYoutube} target="_blank" rel="noopener noreferrer">Video Youtube</a>
                        </div>
                    ))}
                </div>
                </div>
            </div>
                : <div className='flex plates-center justify-center min-h-screen'>
                <div  className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p className="ml-2">cargando...</p>
            </div>

            }

        </>
        )

}
