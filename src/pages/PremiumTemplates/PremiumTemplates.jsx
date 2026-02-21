import PremiumTemplatesHero from "../../components/premium-templates/PremiumTemplatesHero";

export default function PremiumTemplates() {
  return (
    <main className="w-full bg-black text-white">
      <PremiumTemplatesHero />

      {/* next sections yahan ayengi */}
      <div id="templates-grid" className="h-1" />
    </main>
  );
}