import ForumHome from "../container/forum/forum-home";
import ForumChoice from "../container/forum/forum-choice";

export default function Forum(){
    return (
        <>
            <ForumHome/>
            <ForumChoice title="Kategori" choices={["Semua", "Kesehatan Fisik", "Kesehatan Mental", "Penyakit & Pengobatan", "Gaya Hidup Sehat", "Olahraga & Kebugaran", "Nutrisi & Diet"]}/>
        </>
    )
}