import Link from 'next/link';
import Image from "next/image";
import { LogoImage } from './style';

export default function LogoContainer() {
    return (
        <Link
            href="/" passHref
        >
            <a>
                <Image
                    loading="eager"
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={185}
                    height={40}

                />
            </a>
        </Link>
    );
}
