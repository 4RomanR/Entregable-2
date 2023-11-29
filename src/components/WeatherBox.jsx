import { useState } from "react";

const WeatherBox = ({ wProp }) => {
    const [chTemp, setChTemp] = useState(wProp.main.temp)
    console.log(wProp.main.temp)
    const kelvin = (tempCelsius) => {
        const tempF = (tempCelsius * (9/5) + 32).toFixed(1)
        console.log(tempF)
        return tempF
    }
    const faren = (tempCelsius) => {
        const tempK = (tempCelsius - 273.15 * 1.8 +32).toFixed(1)
        console.log(tempK)
        return tempK
    }
 

    

    return (
        <article>
            <div className="flex justify-center gap-4">
                <h3 className="  text-3xl bg-white/30 rounded-xl w-72">
                    {wProp.name.toUpperCase()}, {wProp.sys.country}
                </h3>
            </div>

            <section className="flex flex-col gap-4 justify-center items-center w-96 ">
                <div className="flex flex-col justify-center items-center bg-white/30 rounded-xl p-2 w-72 h-60 mt-4">
                    {/* TÍTULO */}
                    <p className="col-span-2">{wProp.weather[0].description.toUpperCase()}</p>
                    {/* BIG BOX 1 */}
                    <div className="flex justify-around items-center w-full">
                        <p className="text-3xl">{chTemp}</p>
                        <img src={` https://openweathermap.org/img/wn/${wProp.weather[0].icon}@2x.png`} alt={`wProp.weather[0].main`} />
                    </div>
                </div>
                {/* BOXES  */}

                <div className="w-72 p-2 flex  justify-center bg-white/30 rounded-xl">
                    {/* BOX 1 */}
                    <div className="flex gap-5">
                        <img src="/img/windy.svg" alt="speed" />
                        <p>{wProp.wind.speed}m/s</p>
                    </div>
                    {/* BOX 2 */}
                    <div className="flex gap-5">
                        <img src="/img/raindrops.svg" alt="raindrops" />
                        <p>{wProp.main.humidity}%</p>
                    </div>
                    {/* BOX 3 */}
                    <div className="flex gap-5">
                        <img src="/img/arrow-wave.svg" alt="arrow-wave" />
                        <p>{wProp.main.pressure}hPa</p>
                    </div>

                </div>
            </section>
            <div>
                <button onClick={()=>setChTemp(kelvin)} className=" m-5 bg-white/60 rounded-xl p-3">CHANGE TEMP</button>
                <button onClick={()=>setChTemp(faren)} className=" m-5 bg-white/60 rounded-xl p-3">CHANGE TEMP</button>
            </div>
        </article>
    )
}
export default WeatherBox