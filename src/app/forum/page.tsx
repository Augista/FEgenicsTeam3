import ForumHome from "../container/forum/forum-home";
import ForumChoice from "../container/forum/forum-choice";

export default function Forum(){
    return (
        <>
            <ForumHome/>
            <ForumChoice title="Judul" choices={["Button", "Check", "Dor"]}/>
        </>
    )
}