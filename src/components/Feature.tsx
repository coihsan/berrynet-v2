import { feature } from "@/constants";
import { archivo } from "./ui/fonts";
import Link from "next/link";
import Section from "./Section";
import { ChevronRight } from "lucide-react";
export default function Feature() {
  return (
    <Section
      id={feature}
      className="mt-[1.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings="py-[5.25rem]"
    >
      <div className="container">
        <h1 className={`${archivo.className} text-center h2 font-bold`}>
          Empower Your Internet Experience with AI
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
          {feature.map((item) => (
            <div
              className="p-9 bg-n-12 rounded-2xl border-2 border-n-9 hover:border-n-5 transitionAll"
              key={item.id}
            >
              <div className="flex flex-col min-h-[14rem]">
                <h3
                  className={`${archivo.className} font-bold text-2xl mb-5`}
                >
                  {item.title}
                </h3>
                <span className="text-n-3 mb-4 tracking-wide">
                  {item.description}
                </span>
              </div>
              <div className="flex items-center justify-between gap-5 border-t-[1px] border-n-9 pt-5">
                <div className={`mt-auto p-2 rounded-md w-max ${item.color}`}>
                  {item.icon}
                </div>
                <Link
                  href={"#"}
                  className="flex items-center gap-4 hover:text-yellow-500 transition-all ease-in-out duration-300"
                >
                  <span className="tracking-wide uppercase font-code text-xs font-bold ">
                    Explore More
                  </span>
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
