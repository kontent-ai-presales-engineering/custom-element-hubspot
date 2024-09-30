import { useEffect, useState } from 'react';
import { useIsDisabled, useValue } from './customElement/CustomElementContext';

export const IntegrationApp = () => {
  const [availableForms, setAvailableForms] = useState<ReadonlyArray<Form> | null>(null);
  const [elementValue, setElementValue] = useValue();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const selectedForm = availableForms?.find(form => form.id === elementValue?.formId);

  return (
    <div>
      <div
        className={`select ${isDisabled ? "disabled" : ""} ${isDropdownOpen ? "open" : ""}`}
        onClick={() => setIsDropdownOpen(prev => !prev)}
      >
        {selectedForm?.name || "Select a form"}
      </div>
      {isDropdownOpen && (
        <div className="options">
          {availableForms?.map(form => (
            <div
              key={form.id}
              className={`option ${form.id === selectedForm?.id ? "selected" : ""}`}
              onClick={() => {
                setIsDropdownOpen(false);
                setElementValue({ formId: form.id });
              }}
            >
              {form.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

IntegrationApp.displayName = 'IntegrationApp';

type Form = Readonly<{
  id: string;
  name: string;
}>;
