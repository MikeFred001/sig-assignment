import Image from "next/image";
import Typography from "./common/Typography";

export default function UtahMedCardInfo() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-12">
      <Image
        src="/assets/Consultation@2x.png"
        alt="Patient or client consulting with a medical professional"
        width={300}
        height={300}
        className="object-cover w-full lg:w-auto hidden lg:block"
      />
      <article>
        <Typography className="text-[2rem] text-center lg:text-start lg:text-[3rem]">
          Utah Medical Cards
        </Typography>
        <Image
          src="/assets/Consultation@2x.png"
          alt="Patient or client consulting with a medical professional"
          width={300}
          height={300}
          className="object-cover w-full lg:w-auto lg:hidden block"
        />
        <Typography className="text-grey2 leading-normal px-1 mt-2 lg:mt-0 lg:px-0 lg:leading-[2.25rem]">
          A medical cannabis card, also known as a medical marijuana card, is a
          state-issued identification card that allows qualified patients to
          legally purchase and use medical cannabis for the treatment of
          specific medical conditions. In Utah, a card is required to access and
          purchase medical cannabis from state-licensed dispensaries. Having a
          medical card does not allow you to possess any cannabis product but
          only the products you purchased under your PAT (Medical Card ID
          number).
        </Typography>
      </article>
    </section>
  );
}
