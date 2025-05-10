import FAQQuestion from "./FAQQuestion";

export default function FAQList() {
  const questions = [
    "If I don't qualify, do I still have to pay the QMP?",
    "What are Utah's qualifying medical conditions?",
    "Is documentation required to prove you have a medical condition?",
    "If I have a medical cannabis card, can I consume in public?",
    "What are the eligibility requirements for a medical cannabis card?",
    "What is the complete cost to get a medical cannabis card?",
    "How long does it take to get a medical cannabis card?",
    "How long does it take to receive your card?",
    "Where can I purchase medical cannabis in Utah?",
    "Can I grow my own cannabis plants with a medical cannabis card?",
    "How long is a medical cannabis card valid?",
    "Is my personal information confidential when applying for a medical cannabis card?",
  ];

  return (
    <div>
      {questions.map((question, index) => (
        <FAQQuestion key={index} question={question} />
      ))}
    </div>
  );
}
