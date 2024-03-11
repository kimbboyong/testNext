import { connectDB } from "../../util/database";

export default async function handler(req, res) {
    console.log(req.body);
    const data = {
        title: req.body.title,
        content: req.body.content
    }

    if (req.method === 'POST') {
        try {
            const client = await connectDB;
            const db = client.db('notice');
            let result = await db.collection('post').insertOne(data);

            return res.status(200).redirect('http://localhost:3000/list');
        } catch (e) {
            console.log(e);
        }

    }

}