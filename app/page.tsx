import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div style={{ width: 100 + '%' ,display: 'flex', justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
      <Hero/>
    </div>
  );
}
