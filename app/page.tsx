import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants/indes";


export default function Home() {
  return (
    <main className=" min-h-screen w-full ">
      <h1 className="text-2xl font-bold mb-11 underline text-center">Welcome to my Saas App</h1>
      <section className="grid md:grid-cols-3 mx-auto container gap-x-4 sm:grid-cols-2">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject='english'
          duration={30}
          color='#BDE7FF'
        />
        <CompanionCard
          id="456"
          name="Country the Number Wizard"
          topic="Derivatives & Integrals"
          subject='science'
          duration={30}
          color='#e5d0ff'
        />
      </section>


      <section className="w-full flex flex-col gap-5 items-center justify-center">

        <CTA />
        <CompanionList
          title="Recently completed session"
          companions={recentSessions}
          className="w-2/3 max-lg:w-ful"
        />

      </section>

    </main>

  );
}
