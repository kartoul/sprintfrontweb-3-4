import { LucideInspectionPanel, LucidePlay } from "lucide-react"

const Footer = () => {
  return (
    <>
      <footer className="mt-auto w-full bg-site-inkblack px-32 py-6">

        <div className="mx-auto w-full flex flex-col flex-row items-center justify-between text-site-eggshell p-4">

          <ul>
            <li className="font-bold text-[18px]">PLACEHOLDER TITLE</li>
            <li>Placeholder</li>
          </ul>

        </div>

        <hr className="border-t-site-eggshell p-4"></hr>

        <h1 className="p-4"><LucidePlay color="#f0ebd8"/></h1>
      </footer>
    </>
  )
}

export default Footer
