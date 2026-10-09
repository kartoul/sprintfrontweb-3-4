import { LucideCamera } from "lucide-react"

const Header = () => {
  return (
    <>
      <ul className="flex justify-between px-12 py-6 bg-site-inkblack text-site-eggshell font-medium text-18 items-center shadow-2xl mt-auto mb-auto">
        <span className="flex font-bold text-2xl"><LucideCamera className="size-8"/>Gumbys Solutions</span>
        <button className="hover:text-site-dustydenim hover:cursor-pointer hover:font-bold">Solução</button>
        <button className="hover:text-site-dustydenim hover:cursor-pointer hover:font-bold">Publico-Alvo</button>
        <button className="hover:text-site-dustydenim hover:cursor-pointer hover:font-bold">Galeria</button>
        <button className="hover:text-site-dustydenim hover:cursor-pointer hover:font-bold">Nosso Time</button>
      </ul>
    </>
  )
}

export default Header
