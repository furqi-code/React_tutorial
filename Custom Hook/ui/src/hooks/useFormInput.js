import { useState } from "react";

export function useFormInput(initialValue, validatorFunction) {
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  
  function handleValueChange(event) {
    console.log(validatorFunction);
    if (validatorFunction) {
      setHasError(validatorFunction(event.target.value));
    }
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleValueChange,
    hasError,
  };
}
