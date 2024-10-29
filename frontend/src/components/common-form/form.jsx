import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

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

      case "select":
        element = (
          <Select
            value={value}
            onValueChange={(selectedValue) =>
              setFormData({ ...formData, [getControlItem.name]: selectedValue })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>

            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
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
