import Typography from "./common/Typography";
import FAQList from "./FAQList";

export default function FAQs() {
  return (
    <section>
      <Typography className="text-[2rem] md:text-[3rem] text-center md:text-start">
        FAQs...
      </Typography>
      <FAQList />
    </section>
  );
}
