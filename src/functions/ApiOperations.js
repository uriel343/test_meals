import axios from "axios"

const getAllPlates = async (state)=> {
    let limiterCount = 0
    let arr = []

    while (limiterCount < 30) {
        const query = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        if(arr.includes(query.data.meals[0].idMeal)){
            arr.pull(query.data.meals[0])
        }
        arr.push(query.data.meals[0])
        
        limiterCount++
    }
    
    state(arr)

}

export {    
    getAllPlates
}