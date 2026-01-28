import ArrowRight from "../icons/ArrowRight"
import ArrowRightLine from "../icons/ArrowRightLine"
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp"

const Hero = () => {
  return (
    <div className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42">
        <div className="">
            <h1 className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter">AI-Powered Notes. Organize and Summarize in Seconds</h1>
            <p className="text-primary-100 mb-10 text-xl/loose font-light">Let AI organize & summarize your notes, <br /> saving you time and boosting productivity</p>
            <button className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 rounded-full px-8 py-3.5 border-2">
                <p className="text-lg/8">Get Started</p>
                <div className="w-5">
                    <ArrowRightLine alt="Arrow right line" width={2.5} className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"/>
                    <ArrowRight alt="Arrow right icon" className="stroke-primary-1300 inline w-5" width={2}/>
                </div>
            </button>
        </div>
        <div className="relative">
            <div className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl"/>
            <img src={HeroGraphic} alt="Hero graphic showing note summarizer functionality" 
            className="relative max-h-[30rem] justify-self-end" />
        </div>
    </div>
  )
}

export default Hero