import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function ListDetail(props) {
    const params = props.params.id.toString();

    const client = await connectDB;
    const db = await client.db('notice');
    let result = await db.collection('post').findOne({ _id: new ObjectId(params) })
    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.content}</p>
        </div>
    )
}