export default function ReviewSection({ reviews = [] }) {
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Reviews</p>
          <h2 className="text-xl font-bold text-stone-900">What teens are saying</h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase text-amber-700">Real feedback</span>
      </div>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <article key={index} className="rounded-3xl border border-stone-100 bg-stone-50 p-4">
            <div className="flex items-center justify-between gap-3 text-sm text-stone-500">
              <span className="font-semibold text-stone-800">{review.user}</span>
              <span>{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
