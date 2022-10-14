import React from "react";

interface Props {
  validationFn: (value: string) => boolean;
  id: string;
  type: string;
  placeholder: string;
  errorClass: string;
}

export function ControledInput({
  validationFn,
  id,
  type,
  placeholder,
  errorClass,
}: Props) {
  const [inputValue, setInputValue] = React.useState("");
  const [wasTouched, setWasTouched] = React.useState(false);

  let isValid = wasTouched ? validationFn(inputValue) : true;

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setInputValue(value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setWasTouched(true);
  };

  console.log(isValid);

  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onInput={handleInput}
        onBlur={handleBlur}
        className={isValid ? "" : errorClass}
      />
      {!isValid && <p>Campo Inválido</p>}
    </>
  );
}
