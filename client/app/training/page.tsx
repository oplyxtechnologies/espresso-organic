import BaristaTraining from "@/components/Training/BaristaTraining";
import SuccessGallery from "@/components/Training/SuccessGallery";
import TestimonialsTraining from "@/components/Training/TestimonialsTraining";
import TrainingCTA from "@/components/Training/TrainingCTA";
import BaristaHero from "@/components/Training/TrainingHero";
import TrainingJourney from "@/components/Training/TrainingJourney";
import WhyTrainSection from "@/components/Training/WhytrainingwithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barista Training in Nepal || Espresso Organid House ",
  description:
    "AI Overview Barista training is a structured program that teaches the skills and knowledge needed to prepare and serve coffee and other beverages, particularly espresso-based drinks, in a professional setting.",
};

export default function BaristaTrainingPage() {
  return (
    <>
      <BaristaHero />
      <BaristaTraining />
      <WhyTrainSection />
      <SuccessGallery />
      <TestimonialsTraining />
      <TrainingJourney />
      <TrainingCTA />
    </>
  );
}
