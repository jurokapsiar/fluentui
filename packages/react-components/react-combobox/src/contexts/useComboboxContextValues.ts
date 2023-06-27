import { ComboboxBaseContextValues, ComboboxBaseState } from '../utils/ComboboxBase.types';

export function useComboboxContextValues(state: ComboboxBaseState): ComboboxBaseContextValues {
  const {
    activeOption,
    appearance,
    focusVisible,
    open,
    registerOption,
    selectedOptions,
    selectOption,
    setActiveOption,
    setOpen,
    size,
    filter,
  } = state;

  const combobox = {
    activeOption,
    appearance,
    focusVisible,
    open,
    registerOption,
    selectedOptions,
    selectOption,
    setActiveOption,
    setOpen,
    size,
    filter,
  };

  return { combobox };
}
