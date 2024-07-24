import { useEffect, useState } from 'react';
import { useIsDisabled, useValue } from './customElement/CustomElementContext';

export const IntegrationApp = () => {
  const [availableForms, setAvailableForms] = useState<ReadonlyArray<Form> | null>(null);
  const [elementValue, setElementValue] = useValue();

  useEffect(() => {
    if (availableForms) {
      return;
    }
    // fetch the forms from your service
    fetch("/.netlify/functions/load-available-forms")
      .then(response => response.json())
      .then(forms => setAvailableForms(forms));
  }, [availableForms]);

  const isDisabled = useIsDisabled();

  return (
    <div>
      <select
        disabled={isDisabled}
        value={elementValue?.formId || ''}
        onChange={e => {
          const formId = e.target.value;
          setElementValue({ formId });
        }}
      >
        <option value="">Select a form</option>
        {availableForms?.map(form => (
          <option key={form.id} value={form.id}>
            {form.name}
          </option>
        ))}
      </select>
    </div>
  );
};

IntegrationApp.displayName = 'IntegrationApp';

type Form = Readonly<{
  id: string;
  name: string;
}>;
