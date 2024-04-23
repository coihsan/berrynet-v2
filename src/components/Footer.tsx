import { footer, advantage } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
export default function Footer() {
  return (
    <>
      <Section id={footer} className="" crosses crossesOffset="" customPaddings>
        <footer className="container relative">
          <div className="w-full pt-12">
            <div className="lg:flex items-center justify-between w-full max-sm:flex-col">
              <div className="flex flex-col max-sm:mb-6">
                <Image
                  src={"/berrynet-01.svg"}
                  width={180}
                  height={40}
                  alt="logo"
                />
                <span className="max-w-md text-n-3 mt-6">
                  Our company is committed to providing the best possible
                  internet service to our customers. We offer a variety of plans
                  to fit every budget and need, and we guarantee fast, reliable
                  connections.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {advantage.map((icons) => (
                  <div className="flex items-center gap-6" key={icons.id}>
                    <div className="text-xl p-3 flexJustifyCenter border rounded-lg">
                      {icons.icon}
                    </div>
                    <span>{icons.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mt-12 mx-auto">
              {footer.map((list) => (
                <div key={list.id} className="flex flex-col">
                  <span className="font-bold text-md mb-4">{list.title}</span>
                  <div className="flex flex-col gap-3">
                    {list.link.map((items) => (
                      <Link
                        className="text-n-3 hover:text-yellow-500 hover:font-bold hover:translate-x-2 transition-all ease-in-out duration-300"
                        key={items.id}
                        href={items.pathname}
                      >
                        {items.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </Section>
    </>
  );
}
