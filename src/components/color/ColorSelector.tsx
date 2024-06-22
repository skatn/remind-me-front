import Icon from '../icon/Icon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ColorSelectorProps {
  colors?: string[];
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const defaultColors = [
  'ABDEE6',
  '81D3EB',
  'CBAACB',
  'BBB8DC',
  'CCE2CB',
  'D5E05B',
  'FEE1E8',
  'FF968A',
  'FFCC4E',
  'FFCCB6',
];

const ColorSelector = ({
  colors = defaultColors,
  name = 'color',
  value,
  onChange = () => {},
}: ColorSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-[15px]">
      {colors.map((color, index) => (
        <label
          key={index}
          htmlFor={color}
          className="relative aspect-square w-[36px] rounded-full"
          style={{ backgroundColor: `#${color}` }}
        >
          <input
            type="radio"
            id={color}
            name={name}
            value={color}
            onChange={(e) => onChange(e.currentTarget.value)}
            checked={value === color}
            className="hidden"
          />
          <Icon
            icon={faCheck}
            size={16}
            className="check absolute right-[-2px] top-[-2px] rounded-full bg-highlight-1 p-[4px] text-neutral-light-5 outline outline-[2px]"
          />
        </label>
      ))}
    </div>
  );
};

export default ColorSelector;
