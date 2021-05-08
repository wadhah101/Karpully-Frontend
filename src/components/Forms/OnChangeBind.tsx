import { useFormikContext } from 'formik'
import * as React from 'react'

interface IOnChangeBindProps<T> {
  onChange: (object: T) => void
  cls?: T
}

const OnChangeBind = <T extends any>({
  onChange,
}: IOnChangeBindProps<T>): JSX.Element => {
  const { values } = useFormikContext<T>()
  React.useEffect(() => {
    onChange && onChange(values)
    return () => null
  }, [values])

  return null
}

export default OnChangeBind
