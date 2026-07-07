import { Link } from 'react-router-dom';
import Button from '../Shared/Button';
import CroppedImage from '../Shared/CroppedImage';
import logo from '../../assets/figma/logo.png';
import styles from './Header.module.scss';

interface NavItem {
  label: string;
  to?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'APPS', to: '/' },
  { label: 'UPDATES', to: '/updates' },
  { label: 'BLOG' },
  { label: 'COMMUNITY' },
  { label: 'ADVERTISE' },
  { label: 'ABOUT' },
];

interface HeaderProps {
  active?: string;
}

export default function Header({ active = 'APPS' }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Visnalize home">
          <CroppedImage
            src={logo}
            alt="Visnalize logo"
            width={60.121}
            height={64}
            loading="eager"
            inner={{ top: '-25.76%', left: '-30.65%', width: '161.29%', height: '151.52%' }}
          />
        </Link>

        <div className={styles.right}>
          <nav className={styles.nav} aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === active;
              const className = `${styles.link} ${isActive ? styles.active : ''}`;
              return item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={className}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href="#" className={className}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Button variant="light" size="md">
            WORK WITH US
          </Button>
        </div>
      </div>
      <div className={styles.divider} aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
