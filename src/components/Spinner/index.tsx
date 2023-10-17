export function Spinner() {
  return (
    <div className="bg-white min-h-screen w-full fixed top-0 left-0 flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-primary-color border-t-zinc-200 animate-spin rounded-full " />
    </div>
  );
}
