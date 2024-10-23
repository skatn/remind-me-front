import Icon from '../icon/Icon';
import {
  faBook,
  faHome,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const tabs = [
    {
      path: '/',
      icon: faHome,
      text: '홈',
    },
    {
      path: '/search',
      icon: faSearch,
      text: '검색',
    },
    {
      path: '/subjects',
      icon: faBook,
      text: '보관함',
    },
    {
      path: '/mypage',
      icon: faUser,
      text: '마이',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-light-5 shadow-[0_-1px_5px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-[60px] max-w-screen-md items-center justify-around">
        {tabs.map((tab) => (
          <Link
            to={tab.path}
            className={`inline-flex flex-col items-center gap-[2px] ${location.pathname === tab.path ? 'text-highlight-1' : 'text-neutral-dark-1'}`}
          >
            <Icon
              icon={tab.icon}
              className={
                location.pathname === tab.path
                  ? 'text-highlight-1'
                  : 'text-neutral-dark-1'
              }
              size={20}
            />
            <span className="text-body-xs">{tab.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
