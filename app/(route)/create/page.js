export default function Create() {
    return (
        <>
            <form action="/api/post/create" method="POST" className="px-15">
                <div className="input-box">
                    <input type="text" placeholder="제목입력하셈" name="title" />
                </div>

                <div className="input-box">
                    <textarea placeholder="내용입력 ㄱ" name="content" />
                </div>

                <button className="submit-btn" type="submit">등록</button>
            </form>
        </>
    )
}