import { motion } from 'framer-motion'
import profileImage from '../assets/OfficialPic.jpeg'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight mb-10"
          style={{
                background: 'linear-gradient(to right, #337ae5 0%, #408fe5 3%, #d4734a 10%, #ea6b2e 18%, #ea6b2e 100%)',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}
        >
          About
        </motion.h2>

        {/* Philosophy line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-lg mb-20 max-w-2xl"
        >
          I build with clarity, and create with emotion.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[440px] rounded-2xl overflow-hidden bg-gray-100"
          >
            <motion.img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              whileHover={{ scale: 1.035 }}
            />

            {/* subtle frame */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />

            {/* cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Split Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-10"
          >
            {/* Business Mind */}
            <motion.div
              whileHover={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="
                rounded-xl
                p-6
                transition-colors
                duration-300
                hover:bg-gray-50
              "
            >
              <p className="text-sm uppercase tracking-wider text-[#2F6FDB] font-semibold mb-3">
                Business Mind
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                A BBA (Honours) student at TAPMI Bengaluru (MAHE), I’m deeply
                interested in digital business, entrepreneurship, and strategic
                thinking shaped through case-based learning, leadership
                experiences, and real-world problem solving.
              </p>
            </motion.div>

            {/* Creative Soul */}
            <motion.div
              whileHover={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="
                rounded-xl
                p-6
                transition-colors
                duration-300
                hover:bg-gray-50
              "
            >
              <p className="text-sm uppercase tracking-wider text-[#2F6FDB] font-semibold mb-3">
                Creative Soul
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Music is my creative language. I’ve won multiple singing
                competitions, met to creators in film city, and love performing, using emotion, discipline,
                and presence to connect with people beyond words.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
