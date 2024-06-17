import ContactMe from "@/components/ContactMe"
import Navbar from "@/components/Navbar"

const ContactPage = () => {
  return (
    <div className="bg-main h-screen w-full">
      <Navbar />
      <div className=" pt-36">
        <ContactMe/>
      </div>
    </div>
  )
}

export default ContactPage