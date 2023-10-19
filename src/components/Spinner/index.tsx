export function Spinner() {
  return (
    <div className="z-50 bg-white/80 min-h-screen w-full fixed top-0 left-0 flex flex-col gap-4 items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-color border-t-zinc-200 animate-spin rounded-full " />
        <span className="font-semibold text-primary-color">Carregando...</span>
    </div>
  );
}
