import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CommonForm = ({
  formControls,
  buttonText,
  isBtnDisabled,
  formData,
  setFormData,
  onSubmit,
}) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;
    let value = formData[getControlItem.name] || "";
    
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;

      default:
        <Input
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          type={getControlItem.type}
        />;
        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {/* FORM CONTROLS */}
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {/* FUNCTION TO RENDER INPUT BY COMPONENT TYPE */}
            {renderInputsByComponentType(controlItem)}
            {}
          </div>
        ))}
        <Button className="mt-4 w-full" type="submit" disabled={isBtnDisabled}>
          {buttonText || "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default CommonForm;
