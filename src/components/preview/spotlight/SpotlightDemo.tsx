import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightDemo() {
  return (
    <div className="h-full w-full flex md:items-center md:justify-center  relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" max-w-7xl  mx-auto relative z-10  w-full md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Мама <br /> я устроился!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Этот сервис реально помогает людям найти работу мечты
        </p>
      </div>
    </div>
  );
}
