import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8"
        style={{
                background: 'linear-gradient(to right, #337ae5 0%, #408fe5 10%, #d4734a 30%, #ea6b2e 60%, #ea6b2e 100%)',    WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
          Let’s Connect
        </h2>

        <p className="text-gray-600 text-lg max-w-xl mb-20">
          For collaborations, conversations, or creative exchanges — you can
          find me here.
        </p>

        {/* Social links */}
        <div className="space-y-8">
          <a
            href="https://www.linkedin.com/in/tithiksha-shripad-25748b388/"
            className="
              flex items-center gap-4
              text-xl
              font-medium
              text-gray-800
              transition
              hover:text-[#2F6FDB]
            "
          >
            <FaLinkedinIn className="text-lg opacity-70" />
            LinkedIn
          </a>

          <a
            href="#"
            className="
              flex items-center gap-4
              text-xl
              font-medium
              text-gray-800
              transition
              hover:text-[#2F6FDB]
            "
          >
            <FaInstagram className="text-lg opacity-70" />
            Instagram
          </a>

          <a
            href="#"
            className="
              flex items-center gap-4
              text-xl
              font-medium
              text-gray-800
              transition
              hover:text-[#2F6FDB]
            "
          >
            <FaYoutube className="text-lg opacity-70" />
            YouTube
          </a>

          <a
            href="mailto:hello@example.com"
            className="
              flex items-center gap-4
              text-xl
              font-medium
              text-gray-800
              transition
              hover:text-[#2F6FDB]
            "
          >
            <FaEnvelope className="text-lg opacity-70" />
            Email
          </a>
        </div>

        {/* Subtle divider */}
        <div className="mt-24 h-px w-24 bg-gray-300" />
      </div>
    </section>
  )
}
