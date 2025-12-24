import performance1 from '../assets/Screenshot 2024-07-23 154327.png'
import performance2 from '../assets/Screenshot 2024-07-23 154327.png'
import performance3 from '../assets/Screenshot 2024-07-23 154327.png'

export default function Music() {
  return (
    <section id="music" className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
            style={{
                background: 'linear-gradient(to right, #337ae5 0%, #408fe5 10%, #d4734a 30%, #ea6b2e 60%, #ea6b2e 100%)',    WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}
            >
            Music Journey
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mb-24">
          Music has evolved alongside my academic journey — shaped by discipline,
          stage experience, and a continuous search for expression across
          classical and contemporary styles.
        </p>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-32">
            {/* Phase 1 */}
            <div className="relative grid md:grid-cols-2 gap-16 items-center">
              {/* Dot */}
              <div className="absolute left-1/2 top-2 w-3 h-3 bg-[#337ae5] rounded-full -translate-x-1/2" />

              {/* Text */}
              <div className="md:pr-16">
                <p className="text-sm text-gray-500 mb-2">Early Years</p>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Foundation & Training
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  Built a strong vocal foundation through disciplined practice
                  and early musical exposure, focusing on control, pitch, and
                  emotional delivery.
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden">
                <img
                  src={performance1}
                  alt="Early music training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative grid md:grid-cols-2 gap-16 items-center">
              {/* Dot */}
              <div className="absolute left-1/2 top-2 w-3 h-3 bg-[#337ae5] rounded-full -translate-x-1/2" />

              {/* Image */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden md:order-1">
                <img
                  src={performance2}
                  alt="Competition performance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:pl-16 md:order-2">
                <p className="text-sm text-gray-500 mb-2">Competitive Stage</p>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Competitions & Recognition
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  Participated in and won multiple singing competitions, gaining
                  exposure to diverse audiences, constructive critique, and
                  performance confidence.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative grid md:grid-cols-2 gap-16 items-center">
              {/* Dot */}
              <div className="absolute left-1/2 top-2 w-3 h-3 bg-[#337ae5] rounded-full -translate-x-1/2" />

              {/* Text */}
              <div className="md:pr-16">
                <p className="text-sm text-gray-500 mb-2">Present</p>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Live Performances & Personal Style
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  Performing at college and cultural platforms while refining a
                  personal musical identity that blends classical grounding with
                  contemporary sensibilities.
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden">
                <img
                  src={performance3}
                  alt="Live performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Closing note */}
        <p className="mt-28 text-gray-500 text-sm max-w-xl">
          Selected performances and recordings are shared selectively as part of
          an evolving artistic journey.
        </p>
      </div>
    </section>
  )
}
