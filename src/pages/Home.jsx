import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-orange-100  via-amber-50 to-blue-100">
        <div className="mx-auto max-w-6xl p-8 ">
          <Navbar />

          <NoteForm />
        </div>
      </main>
    </div>
  );
}
