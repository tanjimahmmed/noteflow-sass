import { useState } from "react";
import {testimonials as test} from '../../../utils/content';
import CaretUp from "../../icons/CaretUp";
import TestimonialsList from "./TestimonialsList";


const Testimonials = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className="bg-gradient-to-top">
        <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32">
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6">
            <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8">Testimonials</p>
            <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter">What our AI-powered <br /> notetakers have to say</h2>
            <p className="text-primary-100 px-28 text-center text-xl/loose font-light">NoteFlow has helped 1000’s supercharge their productivity with cutting edge AI note taking tools</p>
        </div>
        <div className="mb-20 grid grid-cols-3 gap-x-6">
            <TestimonialsList testimonials={test.slice(0, expanded ? 5 : 2)}/>
            <TestimonialsList testimonials={test.slice(5, expanded ? 10 : 7)}/>
            <TestimonialsList testimonials={test.slice(10, expanded ? 15 : 12)}/>
        </div>
        <button className="text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8"
        onClick={() => setExpanded((curr) => !curr)}>{expanded ? 'Show less' : 'Show more'}
        <CaretUp className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-all duration-300 ${expanded && 'rotate-360'}`} alt="Caret Icon" width={2}/>
        </button>
        </div>
    </section>
  )
}

export default Testimonials