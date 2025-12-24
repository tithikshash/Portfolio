import { motion } from 'framer-motion'

const philosophy =
  'Exploring the intersection of strategic thinking, leadership, and creative expression.'

const BASE_DELAY = 0.9
const WORD_STAGGER = 0.1
const WORD_DURATION = 0.5

const WORD_COUNT = philosophy.split(' ').length
const TOTAL_TEXT_DURATION =
  WORD_DURATION + WORD_STAGGER * WORD_COUNT

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 px-6"
    >
      <div className="max-w-6xl mx-auto w-full min-h-screen flex">
        {/* Optical centering wrapper */}
        <div className="max-w-4xl w-full pt-[22vh] sm:pt-[24vh] md:pt-[30vh]">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
              tracking-tight
              text-primary
            "
          >
            Tithiksha Shripad
          </motion.h1>

          {/* Role / Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="
              mt-6
              grid
              grid-cols-1
              sm:flex
              sm:items-center
              sm:gap-3
              text-xl
              sm:text-2xl
              md:text-3xl
              font-medium
              text-gray-600
            "
          >
            <span>Business Undergraduate</span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span>Creative Performer</span>
          </motion.div>

          {/* Philosophy (word-based animation, no word break) */}
          <motion.p
            className="
              mt-10 sm:mt-12
              text-base sm:text-lg md:text-xl
              font-medium
              text-gray-600
              max-w-full md:max-w-3xl
              leading-relaxed
              whitespace-normal
              break-normal
            "
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: BASE_DELAY,
                  staggerChildren: WORD_STAGGER,
                },
              },
            }}
          >
            {philosophy.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: WORD_DURATION,
                      ease: 'linear',
                    },
                  },
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Underline (appears after text finishes) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: BASE_DELAY + TOTAL_TEXT_DURATION,
              duration: 0.4,
              ease: 'easeOut',
            }}
            className="
              mt-14
              sm:mt-20
              h-[2px]
              w-24
              sm:w-28
              bg-[#2F6FDB]
              shadow-[0_0_18px_rgba(0,0,0,0.18)]
            "
          />
        </div>
      </div>
    </section>
  )
}
