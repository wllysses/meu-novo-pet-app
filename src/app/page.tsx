import Image from "next/image";
import { Header } from "@/components/Header";
import dogAndCat from "@/assets/images/hero-image.png";
import { AccordionItem } from "@/components/AccordionItem";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-14">
        <section id="hero" className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 px-4">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-5xl leading-[60px] text-secondary-color max-[575px]:text-4xl">
              Encontre seu <span className="text-primary-color">melhor</span>{" "}
              <span className="text-primary-color">amigo:</span> Adote um{" "}
              <span className="text-primary-color">gato</span> ou{" "}
              <span className="text-primary-color">cachorro</span> hoje!
            </h2>
            <p className="text-primary-color text-xl max-[575px]:text-lg">
              Descubra a alegria da adoção de animais e mude duas vidas para
              sempre.
            </p>
            <Link href="/pets">
              <button className="bg-primary-color w-40 h-10 text-white rounded hover:bg-[#6e29bcd2]">
                Quero adotar
              </button>
            </Link>
          </div>
          <Image src={dogAndCat} alt="Cat&Dog Image" width={550} />
        </section>

        <section id="faq" className="mt-20 w-full p-2 flex flex-col items-center gap-8">
          <h2 className="font-bold text-primary-color text-3xl">Dúvidas frequentes</h2>
          <ul className="w-full flex flex-col gap-2">
            <AccordionItem 
              title="Como adotar um pet?" 
              text="Nossa plataforma foi pensada justamente para facilitar este processo. Nela você poderá visualizar todos os pets que estão disponpiveis e entrar em contato diretamente com a pessoa que divulgou."
            />
            <AccordionItem 
              title="Como colocar um pet para adoção?" 
              text="Basta realizar o cadastro na plataforma com algumas informações básicas e após isso você já poderá cadastrar os pets e disponibiliza-los para a adoção responsável."
            />
            <AccordionItem 
              title="Adoção responsável" 
              text="Adoção responsável é o compromisso de oferecer um lar amoroso, seguro e permanente a um animal de estimação adotado. Isso envolve cuidar de todas as necessidades físicas, emocionais e de saúde do animal durante toda a sua vida. Uma adoção responsável inclui a escolha cuidadosa do animal, a preparação adequada para sua chegada, a oferta de alimentação adequada, cuidados veterinários regulares, treinamento, exercício e, acima de tudo, amor e atenção constante."
            />
            <AccordionItem 
              title="Cuidados" 
              text="Seu pet adotado precisa de alimentação adequada, água fresca, abrigo seguro, cuidados veterinários regulares, exercício diário, treinamento, amor e atenção. Certifique-se de fornecer essas necessidades essenciais."
            />
            <AccordionItem 
              title="Como lidar com problemas de comportamento no meu pet adotado?" 
              text="Com paciência e consistência. Consulte um treinador de animais, se necessário, para lidar com problemas específicos de comportamento. O reforço positivo é muitas vezes a chave para moldar um comportamento desejado."
            />
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
