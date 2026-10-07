import { LucideCamera } from "lucide-react"

const Header = () => {
  return (
    <>
      <ul className="flex justify-between px-12 py-6 bg-site-inkblack text-site-eggshell font-medium text-14">
        <span className="flex"><LucideCamera/></span>
        <li>Solução</li>
        <li>Publico-Alvo</li>
        <li>Galeria</li>
        <li>Nosso Time</li>
      </ul>
    </>
  )
}

export default Header
