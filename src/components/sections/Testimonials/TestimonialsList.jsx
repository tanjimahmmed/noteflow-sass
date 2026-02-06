import Testimonial from "./Testimonial";

const TestimonialsList = ({testimonials}) => {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden">
      {testimonials.map((test) => (
        <Testimonial test={test} key={test.name} />
      ))}
    </ul>
  )
}

export default TestimonialsList