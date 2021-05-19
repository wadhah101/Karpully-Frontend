import * as React from 'react';

import { useFormikContext } from 'formik';

interface IOnChangeBindProps<T> {
  onChange: (object: T) => void;
  cls?: T;
}

const OnChangeBind = <T extends any>({ onChange }: IOnChangeBindProps<T>): JSX.Element => {
  const { values } = useFormikContext<T>();
  React.useEffect(() => {
    if (onChange) onChange(values);
    return () => null;
  }, [values]);

  return null;
};

export default OnChangeBind;
