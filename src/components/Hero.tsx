import ButtonLink from "./ui/Button";
import Section from "@/components/Section";
import { useRef } from "react";
import { archivo, sora } from "@/components/ui/fonts";
import { LocateFixed, Sparkles } from "lucide-react";
import { AI } from "./design/AI";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <Section
        className="mt-[1.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container relative lg:pt-[12rem] pt-[7rem] z-10">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className={`${archivo.className} h1 mb-6`}>
              AI-powered Internet for Unprecedented Speed and Stability
            </h1>
            <p
              className={`${sora.className} body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8`}
            >
              Experience the difference with AI-powered internet optimization.
              Take control and enjoy a faster, smoother, and more reliable
              online experience today!
            </p>
            <div className="flex items-center gap-2 w-max mx-auto">
              <ButtonLink
                className={"gradient text-white w-max mx-auto mt-6"}
                href={"/"}
                icon={<Sparkles />}
                text="Our Promo"
              />
              <ButtonLink
                className={"bg-n-2 text-n-9 w-max mx-auto mt-6 hover:text-n-6"}
                href={"/"}
                icon={<LocateFixed />}
                text="Check Area"
              />
            </div>
          </div>
          <div className="relative mx-auto lg:w-6/12 md:w-8/12 xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-full bg-conic-gradient">
              <div className="relative overlays rounded-full">
                <div className="relative rounded-full overflow-hidden flexJustifyCenter ">
                  <Image
                    className=" aspect-square w-full object-cover -z-1 object-center lg:translate-y-20 max-sm:translate-y-12 "
                    src={"/robotai.png"}
                    width={700}
                    height={535}
                    alt="robot"
                  />
                </div>
              </div>
            </div>
            <AI />
          </div>
        </div>
      </Section>
    </>
  );
}
