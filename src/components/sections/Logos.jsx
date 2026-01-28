import { logos } from "../../utils/content"

const Logos = () => {
  return (
    <section className="bg-gradient-to-top">
        <div className="m-auto max-w-[90rem] px-24 py-28">
            <p className="text-primary-50 m-auto mb-20 text-center text-xl/loose">Organizations powered by <span className="font-bold tracking-tight">NoteFlow</span>{" "}</p>
            <div className="flex flex-col gap-y-16">
                <ul className="flex flex-wrap justify-between">
                    {logos.slice(0, 4).map((logo) => (
                        <li key={logo.id}>
                            <img src={logo.src} alt={logo.alt} className="h-10" />
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-wrap justify-between">
                    {logos.slice(4).map((logo) => (
                        <li key={logo.id}>
                            <img src={logo.src} alt={logo.alt} className="h-10" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Logos