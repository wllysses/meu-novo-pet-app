export function Footer() {
  return (
    <footer className="p-4 bg-secondary-color text-white flex items-center justify-center flex-col">
      <h4 className="font-bold text-lg">
        MEU NOVO PET - {new Date().getFullYear()}
      </h4>
      <span className="text-sm">
        Desenvolvido por <a href="#">Wllysses Tavares</a>
      </span>
    </footer>
  );
}
