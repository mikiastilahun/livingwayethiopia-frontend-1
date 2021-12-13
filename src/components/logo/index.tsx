import Link from 'next/link';
import { LogoImage } from './style';

export default function LogoContainer() {
    let home = "/";
    return (
        <Link passHref={true} href={'/'}>
            <LogoImage
                loading="eager"
                src="/icons/logo.svg"
                alt="Logo"
                width={185}
                height={40} />
        </Link>
    );
}
