import DietForm from "../components/diet/DietForm";
import DietRecommendation from "../components/diet/DietRecommendation";

import { useState } from "react";

function Diet() {
  const [step, setStep] = useState("form"); // "form" | "result"
  const [dietData, setDietData] = useState(null);
  const handleFormSubmit = (data) => {
    setDietData(data); // store user input
    setStep("result"); // move to recommendation
  };
  return (
    <div>
      {step === "form" && <DietForm onSubmit={handleFormSubmit} />}

      {step === "result" && <DietRecommendation data={dietData} />}
    </div>
  );
}

export default Diet;