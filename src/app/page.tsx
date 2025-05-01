import Education from '@/components/Education';
import Experience from '@/components/experience';
import Header from '@/components/Header';
import ShortDescription from '@/components/ShortDescription';
import Skills from '@/components/Skills';
import Summary from '@/components/Summary';

export default function Home() {
  return (
    <main className="flex flex-col gap-12 mx-auto max-w-[900px] py-20 px-4">
      <Header />
      <ShortDescription />
      <Summary />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
