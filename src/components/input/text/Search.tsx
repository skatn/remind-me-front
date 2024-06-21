import Icon from '../../icon/Icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search = ({ placeholder = 'Search', className }: SearchProps) => {
  return (
    <div
      className={`flex items-center gap-[16px] rounded-[24px] bg-neutral-light-4 px-[16px] py-[12px] ${className}`}
    >
      <Icon icon={faSearch} className="text-neutral-dark-2" size={16} />
      <input
        placeholder={placeholder}
        className="bg-transparent text-body-md flex-grow"
      />
    </div>
  );
};

export default Search;
