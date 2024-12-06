import EmailListForm from "@/components/EmailListForm";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero py-10 px-6 xl:px-10 flex justify-center items-center">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-y-14">
        <header className="h-8 xs:h-10 lg:h-12 w-full relative">
          <Image
            src={"/aeroforge-logo-dark.svg"}
            alt="logo"
            fill
            priority={true}
          />
        </header>
        <main className="flex flex-col items-center gap-y-10 lg:gap-y-14">
          <Image
            src={"/hero-img.webp"}
            alt="hero-img"
            height={315}
            width={522}
            quality={100}
          />
          <article className="flex flex-col gap-y-4">
            <h1 className="capitalize text-white font-bold text-4xl lg:text-5xl text-center">
              crafting the future of aviation management
            </h1>
            <p className="text-white text-center text-xl lg:text-2xl">
              Creating tailored solutions for private and charter airlines,
              ensuring seamless operations and unmatched efficiency
            </p>
          </article>
          <EmailListForm />
          <div className="flex items-center justify-center gap-y-4 gap-x-8 flex-wrap ">
            <Link
              href="/terms-of-service"
              className={`${buttonVariants({
                variant: "outline-white",
              })} flex-auto`}
            >
              Terms of service
            </Link>
            <Link
              href="/privacy-policy"
              className={`${buttonVariants({
                variant: "outline-white",
              })} flex-auto`}
            >
              Privacy policy
            </Link>
          </div>
        </main>
        <footer className="text-white text-center text-base lg:text-lg">
          &copy; AEROFORGE LTD is a registered company 1234567890. All Rights
          Reserved.
        </footer>
      </div>
    </div>
  );
}
