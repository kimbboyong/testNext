import Link from 'next/link';
import style from './style/page.module.css';

export default function CreateBtn() {
    return (
        <Link href="/create" className={style.create}>
            글쓰기
        </Link>
    )
}