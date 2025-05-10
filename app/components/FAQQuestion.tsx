import Typography from "./common/Typography";

export default function FAQQuestion({ question }: { question: string }) {
  return (
    <>
      <Typography className="text-green2 text-center md:text-start leading-none py-3 text-[1rem] md:text-[1.25rem]">
        {question}
      </Typography>
    </>
  );
}
