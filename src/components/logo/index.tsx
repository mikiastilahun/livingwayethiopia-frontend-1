import Link from 'next/link';
import { LogoImage } from './style';

export default function LogoContainer() {
    return (
        <Link href="/">
            <LogoImage src="/icons/logo.svg" alt="Logo" />
        </Link>
    );
}
