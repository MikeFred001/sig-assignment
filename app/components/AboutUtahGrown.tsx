import Image from "next/image";
import Typography from "./common/Typography";

export default function AboutUtahGrown() {
  return (
    <section className="flex justify-between gap-12 mt-12">
      <div className="flex flex-col gap-15">
        <article className="mt-4">
          <Typography className="text-[3rem]">About Utah Grown</Typography>
          <Typography className="text-grey2 leading-[2.25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quasi placeat! Commodi eos aliquam doloribus pariatur ipsa, ducimus
            tenetur iste temporibus omnis fugiat nobis optio natus in reiciendis
            neque laboriosam nihil placeat quibusdam unde quaerat dignissimos a!
            Rem assumenda ut, vitae laboriosam perferendis inventore consectetur
            accusamus ullam!
          </Typography>
        </article>

        <div>
          <Typography className="text-[3rem]">Utah Grown Office</Typography>
          <Typography className="text-grey2 text-[2rem]">
            730 State Street
          </Typography>
          <Typography className="text-grey2 text-[2rem]">
            Salt Lake City, UT 84111
          </Typography>
        </div>
      </div>
      <Image
        src="/assets/NormalizeItUtah@2x.png"
        alt="green vines framing the hashtag 'Normalize It'"
        width={550}
        height={550}
        className="object-cover"
      />
    </section>
  );
}
