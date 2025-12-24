export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight mb-16"
        style={{
                background: 'linear-gradient(to right, #337ae5 0%, #408fe5 10%, #d4734a 30%, #ea6b2e 60%, #ea6b2e 100%)',    WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
          Achievements & Strengths
        </h2>

        <div className="space-y-12">
          {/* Leadership */}
          <div className="group bg-white border border-gray-100 rounded-xl p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm uppercase tracking-wider text-[#408fe5] font-bold mb-2">
              Leadership
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Campus & Initiative Leadership
            </h3>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Actively involved in leadership roles through E-Cell activities,
              student-led initiatives, and collaborative projects that focus on
              execution, coordination, and impact-driven outcomes.
            </p>
          </div>

          {/* Academics */}
          <div className="group bg-white border border-gray-100 rounded-xl p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm uppercase tracking-wider text-[#408fe5] font-bold mb-2">
              Academics
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Academic Excellence & Case-Based Learning
            </h3>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Recognized for strong analytical thinking and performance in
              business case studies, presentations, and project-based coursework
              emphasizing real-world problem solving.
            </p>
          </div>

          {/* Skills */}
          <div className="group bg-white border border-gray-100 rounded-xl p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm uppercase tracking-wider text-[#2F6FDB] font-bold mb-4">
              Core Skills
            </p>

            <div className="flex flex-wrap gap-3 max-w-3xl">
              {[
                "Business Analytics",
                "Marketing Strategy",
                "Public Speaking",
                "Entrepreneurial Thinking",
                "Digital Tools",
                "Leadership Communication",
              ].map((skill) => (
                <span
  key={skill}
  className="
    px-4 py-2
    rounded-full
    text-sm
    font-medium
    bg-[#e8f0ff]
    text-[#245fc7]
    transition-all
    duration-300
    shadow-sm
    hover:bg-[#dbe7ff]
    hover:shadow-md
    hover:-translate-y-[1px]
  "
>
  {skill}
</span>


              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
