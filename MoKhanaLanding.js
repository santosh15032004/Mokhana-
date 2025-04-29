import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/mokhana-logo.png";

export default function MoKhanaLanding() {
  return (
    <div className="min-h-screen bg-yellow-50 text-brown-800 font-sans">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="MoKhana Logo" width={50} height={50} />
          <h1 className="text-3xl font-bold text-green-700">MoKhana</h1>
        </div>
        <span className="italic text-sm text-gray-600">Ghara Swad, Tuma Haath Re!</span>
      </header>

      <main className="p-6">
        <section className="text-center py-10">
          <h2 className="text-4xl font-semibold mb-4">Ready-to-Cook Odia Meals</h2>
          <p className="text-lg mb-6">Traditional taste, now in your hands. Just heat and eat!</p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">Try Your First Pack</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          <ProductCard name="Aloo Bhaja" desc="Crispy and spiced, just like home." />
          <ProductCard name="Masala Dal" desc="Comforting, hearty and full of flavor." />
          <ProductCard name="Bhata" desc="Semi-cooked rice – quick & easy." />
          <ProductCard name="Chuda Ghanta Mix" desc="Classic mix, just add heat." />
        </section>

        <section className="bg-white rounded-xl p-6 shadow-md text-center my-10">
          <h3 className="text-2xl font-semibold mb-2">How It Works</h3>
          <ol className="list-decimal list-inside text-left max-w-xl mx-auto">
            <li>Choose your meal pack</li>
            <li>Heat on stove or microwave</li>
            <li>Serve and enjoy the home-style taste</li>
          </ol>
        </section>

        <section className="text-center">
          <h4 className="text-xl font-bold mb-2">Want to Order?</h4>
          <p className="mb-4">Contact us directly via WhatsApp</p>
          <a href="https://wa.me/91XXXXXXXXXX" className="text-green-600 underline">Message Us</a>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center py-4 mt-10">
        <p>&copy; 2025 MoKhana. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ProductCard({ name, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h4 className="text-xl font-bold text-green-700 mb-2">{name}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}