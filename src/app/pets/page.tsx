import { api } from "@/services/api";
import { PetCardProps } from "@/models/Pet";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Spinner } from "@/components/Spinner";

export default async function Pets() {

    const pets: PetCardProps[] = await api.getAllPets();

    return (
        <>
            <Header />
            <main className="container mx-auto my-12 p-4">
                <section className="w-full px-4 py-8 bg-secondary-color rounded flex items-center justify-center flex-col gap-2 text-white">
                    <h3 className="text-3xl font-semibold max-sm:text-xl">Encontre seu <span className="text-primary-color">melhor amigo</span></h3>
                    <p className="text-xl max-sm:text-base">Conheça nossos <span className="text-primary-color">animaizinhos</span></p>
                </section>
                <section className="w-full mt-16">
                    <h3 className="text-center font-bold text-primary-color text-3xl">Nossos Pets</h3>
                    <div className="w-full mt-12 min-h-[60vh] grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                        {pets && pets.map((pet) => (
                            <Card key={pet.id} data={pet} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}