import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Pets() {
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
                    <div className="w-full mt-12 grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                        <Card disponivel={true} />
                        <Card disponivel={true} />
                        <Card disponivel={false} />
                        <Card disponivel={true} />
                        <Card disponivel={false} />
                        <Card disponivel={true} />
                        <Card disponivel={false} />
                        <Card disponivel={true} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}