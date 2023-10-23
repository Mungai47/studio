

function Hero() {
  return (
    <div className="flex justify-center bg-[#eee5dc] relative">
        <div className="font-bold text-5xl md:text-8xl lg:text-9xl text-center py-40 z-1">
            <h1>FULLSTACK</h1>
            <h1 className="hollow">WEB & MOBILE</h1>
            <h1>DEVELOPER</h1>
        </div>
        <div className="absolute z-2">
            <img  />
        </div>
        <div className="absolute z-3 ">
            <button className="bg-transparent hover:bg-black hover:text-white font-extralight rounded-full p-3  outline outline-black">
                VIEW MY WORK
            </button>
        </div>
    </div>
  )
}

export default Hero