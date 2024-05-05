import { useCallback, useState } from "react";

type FormValue<K> = Record<string, number | Array<K> | string | object>;

export const useForm = <T,>({
  // TODO: fix to use formik
  initValue: initValue,
  validate: validate,
  validateInputOnChange: validateInputOnChange = false,
}: {
  initValue: T;
  validate?: Record<keyof T, (value: T[keyof T], values?: T) => string>;
  validateInputOnChange?: boolean;
}) => {
  const [formValues, setFormValues] = useState<T>(initValue);
  const [error, setError] = useState<Record<keyof T, string>>(() =>
    Object.keys(initValue || {}).reduce(
      (acc, key) => ({ ...acc, [key]: "" } as Record<keyof T, string>),
      {} as Record<keyof T, string>
    )
  );

  const setFormValue = useCallback(
    (key: keyof T, value: T[keyof T]) => {
      setFormValues((prev) => ({ ...prev, [key]: value }));
      if (!validateInputOnChange || !validate || !validate[key]) {
        return;
      }

      const errMsg = validate[key](value, formValues) || "";
      if (errMsg || (error[key] && !errMsg)) {
        setError((prev) => ({ ...prev, [key]: errMsg }));
      }
    },
    [validateInputOnChange, validate, formValues, error]
  );

  const onError = useCallback(
    (key: keyof T, value?: T[keyof T]) => {
      const val = value ?? formValues[key];
      if (!validate || !validate[key]) {
        return;
      }

      const errMsg = validate[key](val, formValues);
      if (errMsg || (error[key] && !errMsg)) {
        setError((prev) => ({ ...prev, [key]: errMsg }));
      }
    },
    [validate, formValues, error]
  );

  return {
    values: formValues,
    setFormValue: setFormValue,
    formError: error,
    formOnError: onError,
  };
};
