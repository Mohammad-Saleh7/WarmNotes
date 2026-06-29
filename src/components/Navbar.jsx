export default function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between py-1 ">
        <div>
          <h1 className="text-4xl font-bold text-amber-900">WarmNotes</h1>
          <p className="mt-3  text-amber-700">
            Capture your thoughts beautifully.
          </p>
        </div>
        <span className="rounded-full bg-amber-200 px-4 py-2 text-sm font-medium text-amber-900">
          Your Creative Space ✨
        </span>
      </header>
    </div>
  );
}
