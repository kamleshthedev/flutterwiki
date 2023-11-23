import Image from 'next/image';
import logo from '../assets/images/logo.png';

export default function Header({ name }) {
  const imageSize = 320;
  return (
    <header className="pt-20 pb-12">
      <Image src={logo} width={imageSize} height={imageSize} />
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      {/* <p className="text-2xl dark:text-white text-center">
        <Link legacyBehavior href="/">
          <a>{name}</a>
        </Link>
      </p> */}
    </header>
  );
}
