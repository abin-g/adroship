import Hero from '@/components/Landing/Hero'
import TrustedCompanies from '@/components/Landing/TrustedCompanies';
import LogisticsSolutions from '@/components/Landing/LogisticsSolutions';
import InnovationExcellence from '@/components/Landing/InnovationExcellence';
import ExcellenceSection from '@/components/Landing/ExcellenceSection';
import Testimonials from '@/components/Landing/Testimonials';
import JoinAdroship from '@/components/Landing/JoinAdroship';

export default function Home() {
  return (
    <section className="bg-white">
      <Hero />
      <TrustedCompanies />
      <LogisticsSolutions />
      <InnovationExcellence />
      <ExcellenceSection />
      <Testimonials />
      <JoinAdroship />
    </section>
  );
}
