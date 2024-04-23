import Hero from "@/components/Hero";
import Package from "@/components/Package";
import Feature from "@/components/Feature";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Feature />
      <Package />
    </main>
  );
}