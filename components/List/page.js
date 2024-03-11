import style from './style/page.module.css';
import { connectDB } from "../../util/database";
import Link from 'next/link';
import CurrentTime from '../CurrentTime/page';

export async function getListItem() {
    const client = await connectDB;
    const db = await client.db('notice');
    let result = await db.collection('post').find().toArray();
    return result;
}


export default async function List() {
    const data = await getListItem();
    return (
        <div className={style.ListPage}>

            <h1>토픽베스트</h1>

            <ul>
                {data.map((item, idx) => {
                    return (
                        <Link href={`/list/${data[idx]._id}`}>
                            <li className={style.CardItem} key={idx}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                                <CurrentTime />
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div >
    )
}