import CommonForm from "@/components/common-form/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import React, { useState } from "react";

const initialFormState = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

const CourseLanding = () => {
  const [formData, setFormData] = useState(initialFormState);

  return (
    <Card>
      <CardHeader>Course Landing Page</CardHeader>
      <CardContent>
        <CommonForm
          formControls={courseLandingPageFormControls}
          formData={formData}
          setFormData={setFormData}
        />
      </CardContent>
    </Card>
  );
};

export default CourseLanding;
