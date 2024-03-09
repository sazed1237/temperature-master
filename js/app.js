const API_KEY = 'd65535d1e0d20cdbc504d5a76bc3391f'

const loadTemparature = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    displayTemparature(data)
}

const displayTemparature = temparatures =>{
    // console.log(temparatures.weather[0].main)
    // const cityName = document.getElementById('city_name')
    // cityName.innerText = temparatures.name
    // const temp = document.getElementById('Temperature')
    // temp.innerText = temparatures.main.temp
    // const lead = document.getElementById('condition')
    // lead.innerText = temparatures.weather[0].main

    setInnerTextById('city_name', temparatures.name)
    setInnerTextById('Temperature', temparatures.main.temp)
    setInnerTextById('condition', temparatures.weather[0].main)

}

const setInnerTextById = (id, text) =>{
    const temp = document.getElementById(id);
    temp.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function(){
    // console.log('click search button')
    const searchElement = document.getElementById('search-field')
    const searchTextString = searchElement.value 

    loadTemparature(searchTextString)
    console.log(searchTextString)

    searchElement.value = '';
})

loadTemparature('dhaka')