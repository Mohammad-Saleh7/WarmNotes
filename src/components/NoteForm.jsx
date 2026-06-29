export default function NoteForm() {
  return (
    <div>
      <section className="mt-10  rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-semibold text-amber-900">
          Create a new Note
        </h2>
        <input
          type="text"
          placeholder="Note title..."
          className="mb-4 w-full rounded-xl border border-amber-200 px-4 py-3 outline-none transition focus:border-amber-500"
        />
        <textarea
          placeholder="Write your Thoughts"
          rows="6"
          className="w-full rounded-xl border border-amber-200 px-4 py-3 outline-none transition focus:border-amber-500 resize-none "
        ></textarea>
        <div className="flex items-center justify-between gap-4 ">
          <select className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600 cursor-pointer outline-none">
            <option>Personal</option>
            <option>Work</option>
            <option>Study</option>
            <option>Ideas</option>
          </select>
          <button className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600 cursor-pointer">
            Add Note
          </button>
        </div>
      </section>
    </div>
  );
}
