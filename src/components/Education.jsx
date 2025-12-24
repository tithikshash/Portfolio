export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl font-semibold tracking-tight mb-16"
          style={{
            background:
              'linear-gradient(to right, #337ae5 0%, #408fe5 3%, #d4734a 10%, #ea6b2e 18%, #ea6b2e 100%)',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Education
        </h2>

        <div className="space-y-10">
          {/* Card 1 */}
          <div className="group relative bg-white border border-gray-100 p-10 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Gradient strip */}
            <div
              className="
                absolute left-0 top-0 h-full w-1
                scale-y-0 origin-top
                transition-transform duration-300
                group-hover:scale-y-100
              "
              style={{
                background:
                  'linear-gradient(to bottom, #337ae5 0%, #408fe5 60%, #e2b6a0 100%)',
              }}
            />

            <h3 className="text-2xl font-semibold text-gray-900">
              BBA (Honours)
            </h3>

            <p className="mt-1 text-sm font-medium text-[#2F6FDB]">
              TAPMI Bengaluru · Manipal Academy of Higher Education (MAHE)
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Currently pursuing a rigorous undergraduate program with emphasis
              on multi-dimensional business leadership, entrepreneurship, and
              cross-disciplinary thinking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border border-gray-100 p-10 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Gradient strip */}
            <div
              className="
                absolute left-0 top-0 h-full w-1
                scale-y-0 origin-top
                transition-transform duration-300
                group-hover:scale-y-100
              "
              style={{
                background:
                  'linear-gradient(to bottom, #337ae5 0%, #408fe5 60%, #e2b6a0 100%)',
              }}
            />

        <h3 className="text-2xl font-semibold text-gray-900">
            BBA in Digital Business & Entrepreneurship
        </h3>
        <p className="mt-1 text-sm font-medium text-[#2F6FDB]">
            Undergraduate Degree from IIM Bangalore
        </p>
        <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
            Pursuing a flexible undergraduate BBA program that integrates digital technology,
            business management, and entrepreneurship within the prestigious IIM Bangalore ecosystem.
        </p>
        </div>
        </div>
      </div>
    </section>
  )
}
