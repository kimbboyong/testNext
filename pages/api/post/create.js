import { connectDB } from "../../../util/database";



export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const client = await connectDB;
            const db = await client.db('notice');
            const data = {
                title: req.body.title,
                content: req.body.content
            }

            let result = await db.collection('post').insertOne(data);

            return res.status(200).redirect('/');
        } catch (e) {
            return res.status(500).json('ㅈㅅ ㅋ');
        }
    }
}
