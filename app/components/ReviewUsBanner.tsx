import Typography from "./common/Typography";
import Button from "./common/Button";

export default function ReviewUsBanner() {
  return (
    <section className="flex flex-col gap-2 px-10 pt-4 pb-8 my-12 bg-cover bg-center bg-[url('/assets/updated-assets/ReviewBanner@2x.png')]">
      <Typography className="text-grey3 text-[2.5rem]">
        We&apos;d love to hear from you!
      </Typography>
      <Button className="text-[2rem] w-fit">Review Us here!</Button>
    </section>
  );
}
