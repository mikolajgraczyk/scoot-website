import { StyledFaq, Title } from "./styled";
import FaqSection from "./FaqSection";
import QuestionTile from "./QuestionTile";

const Faq = () => {
  return (
    <StyledFaq>
      <Title>FAQs</Title>
      <FaqSection title={"How it works"}>
        <QuestionTile
          question={"How do I download the app?"}
          answer={
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
          }
        />
        <QuestionTile question={"Can I find a nearby Scoots?"} answer={""} />
        <QuestionTile question={"Do I need a license to ride?"} answer={""} />
      </FaqSection>
      <FaqSection title={"Safe driving"}>
        <QuestionTile
          question={"Should I wear a helmet?"}
          answer={
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
          }
        />
        <QuestionTile question={"How about the rules & regulations?"} answer={""} />
        <QuestionTile question={"What if I damage my Scoot?"} answer={""} />
      </FaqSection>
    </StyledFaq>
  );
};

export default Faq;
