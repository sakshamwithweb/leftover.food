import Canvas1 from "@/components/Canvas1";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <Canvas1 />
      <main className="absolute w-screen h-[150vw] flex flex-col z-99 pointer-events-none">
        <section className="h-screen w-screen flex justify-center items-center">
          <h2 className="text-5xl font-bold">Got leftover ingredients lying around?</h2>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold">Turn them into something delicious</h2>
          <p className="text-xl text-gray-300 max-w-xl">
            Discover creative recipes made by people just like you.
          </p>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center items-center">
          <p className="text-4xl font-semibold text-gray-300">
            Join our community and start transforming your leftovers today.
          </p>
          <Button className="text-black" variant="outline">Get Started</Button>
        </section>
      </main>
    </div>
  );
}
