import Typography from "./common/Typography";

export default function FAQQuestion({ question }: { question: string }) {
  return (
    <>
      <Typography className="text-green2 leading-[2.25rem] text-[1.25rem]">
        {question}
      </Typography>
    </>
  );
}
