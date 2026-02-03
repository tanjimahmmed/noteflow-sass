import Testimonial from "./Testimonial";

const TestimonialsList = ({testimonials}) => {
  return (
    <ul className="flex flex-col gap-y-6">
        {testimonials.map((test) => (<Testimonial test={test} key={test.name}/>))}
    </ul>
  )
}

export default TestimonialsList