import events from "../data/Timeline.json";

export default function Timeline() {
  return (
    <section className="py-16 px-2.5" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Parcours</h2>
        <div className="relative border-l border-gray-300 dark:border-gray-600">
          {events.map((e, i) => (
            <div key={i} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 top-1.5"></div>
              <h3 className="text-xl font-semibold">
                {e.year} – {e.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
        {/* contenu */}
      </div>
    </section>
  );
}
