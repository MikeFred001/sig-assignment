import Image from "next/image";
import Typography from "./common/Typography";
import UtahGrownAddress from "./UtahGrownAddress";

export default function AboutUtahGrown() {
  return (
    <section className="flex justify-between gap-8 mt-12 lg:min-w-[1000px]">
      <div className="flex flex-col gap-10">
        <article className="mt-4">
          <Typography className="text-[2rem] text-center lg:text-start lg:text-[3rem]">
            About Utah Grown
          </Typography>
          {/* Mobile */}
          <Image
            src="/assets/NormalizeItUtah.png"
            alt="green vines framing the hashtag 'Normalize It'"
            className="object-cover lg:hidden w-auto h-[400px] mx-auto lg:mx-0"
            width={550}
            height={550}
          />
          <Typography className="text-grey2 leading-normal px-1 mt-2 lg:mt-0 lg:px-0 lg:leading-[2.25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quasi placeat! Commodi eos aliquam doloribus pariatur ipsa, ducimus
            tenetur iste temporibus omnis fugiat nobis optio natus in reiciendis
            neque laboriosam nihil placeat quibusdam unde quaerat dignissimos a!
            Rem assumenda ut, vitae laboriosam perferendis inventore consectetur
            accusamus ullam!
          </Typography>
        </article>
        <UtahGrownAddress />
      </div>
      {/* Desktop */}
      <Image
        src="/assets/NormalizeItUtah@2x.png"
        alt="green vines framing the hashtag 'Normalize It'"
        className="object-cover hidden lg:block h-[550px]"
        width={550}
        height={550}
      />
    </section>
  );
}
