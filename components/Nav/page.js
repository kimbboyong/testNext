import Link from 'next/link'
import style from './style/page.module.css'

export default function Nav() {
    return (
        <div className={style.header}>
            <Link href="/">JJ</Link>
        </div>
    )
}
