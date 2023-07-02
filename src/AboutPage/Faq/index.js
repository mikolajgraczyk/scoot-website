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
        <QuestionTile
          question={"Can I find a nearby Scoots?"}
          answer={
            "Yes, you can find nearby Scoots by using the Scoot app. Once you have downloaded the app, it will show you the available Scoots in your area along with their locations on a map."
          }
        />
        <QuestionTile
          question={"Do I need a license to ride?"}
          answer={
            "The requirement for a license to ride a Scoot may vary depending on the local regulations of your city. In some cities, a valid driver's license or a special license for scooters may be required. We recommend checking the specific requirements of your city or contacting local authorities for accurate information."
          }
        />
      </FaqSection>
      <FaqSection title={"Safe driving"}>
        <QuestionTile
          question={"Should I wear a helmet?"}
          answer={
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
          }
        />
        <QuestionTile
          question={"How about the rules & regulations?"}
          answer={
            "When riding a Scoot, it is important to abide by the rules and regulations set by your city. These rules may include obeying traffic laws, riding in designated areas, and respecting pedestrians and other vehicles on the road. We encourage you to familiarize yourself with the local laws and regulations pertaining to scooter riding to ensure a safe and enjoyable experience."
          }
        />
        <QuestionTile
          question={"What if I damage my Scoot?"}
          answer={
            "If you accidentally damage your Scoot, please report it to us as soon as possible. You can contact our customer support team and provide them with the details of the damage. Depending on the nature and extent of the damage, you may be responsible for covering the repair or replacement costs. Our team will guide you through the process and assist you in resolving the issue."
          }
        />
      </FaqSection>
    </StyledFaq>
  );
};

export default Faq;
