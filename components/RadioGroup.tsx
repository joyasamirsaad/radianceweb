interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  legend: string;
  options: RadioOption[];
}

export default function RadioGroup({ name, legend, options }: RadioGroupProps) {
  return (
    <fieldset className="deliverysections">
      <legend>{legend}</legend>
      <div>
        {options.map((option, index) => (
          <label key={index} className="radio-label">
            <input type="radio" name={name} value={option.value} required />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
