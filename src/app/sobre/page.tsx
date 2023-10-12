import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-16 px-6 min-h-[75vh]">
        <h3 className="font-bold text-2xl text-center text-primary-color">
          Quem somos
        </h3>
        <div className="mt-12 flex flex-col gap-4 font-semibold text-justify text-lg">
          <p>Bem-vindo ao MEU NOVO PET! </p>
          <p>
            Criado pelo servidor público e estudante de sistemas para internet
            Wllysses Tavares, viu a necessidade e a possibilidade de fazer a
            fazer a diferença nas vidas dos nossos amigos de quatro patas.
            Acredito que cada animal merece um lar amoroso e uma família para
            chamar de sua, e é por isso que criei o MEU NOVO PET.
          </p>
          <p>
            Nossa missão é conectar pessoas a animais de estimação que precisam
            de um lar e vice-versa. Combinamos a tecnologia com o carinho pelos
            animais para tornar o processo de adoção mais fácil, mais
            informativo e mais gratificante.
          </p>
          <p>
            No MEU NOVO PET, estamos comprometidos em:
            <ul className="list-disc list-inside">
              <li>
                Ajudar Animais Necessitados: Trabalhamos em estreita colaboração
                com abrigos e resgates de animais para dar a cada gato e
                cachorro uma segunda chance na vida.
              </li>
              <li>
                Facilitar a Adoção: Criamos uma plataforma simples e intuitiva
                que torna a busca e adoção de um animal de estimação uma
                experiência emocionante e sem complicações.
              </li>
              <li>
                Educar e Conectar: Fornecemos recursos, dicas e suporte para os
                novos tutores de animais, ajudando-os a construir laços fortes e
                saudáveis com seus novos membros da família.
              </li>
            </ul>
          </p>
          <p>
            Estamos comprometidos em tornar o mundo um lugar melhor para os
            animais e aqueles que os amam. Junte-se a nós nessa jornada e faça a
            diferença na vida de um animal hoje. Obrigado por escolher o MEU
            NOVO PET como seu parceiro de adoção de animais. Juntos, estamos
            criando lares felizes e cheios de amor para gatos e cachorros em
            todo o mundo.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
