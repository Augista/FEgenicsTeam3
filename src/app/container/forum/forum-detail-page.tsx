"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsxm from "@/lib/clsxm";
import Typography from "@/components/Typography";
import ButtonNoLink from "@/components/button/buttonnolink";
import ForumReply from "./forum-reply";

interface ReplyProps {
    user: string;
    createdAt: Date;
    reply: string;
}

interface QuestionBoxProps {
    id: number;
    title: string;
    reply: ReplyProps[];
    category: string;
}


const questionList = [
    {
        id: 1,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 2,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [
            {
                user: "User1",
                createdAt: "17/08/2023",
                reply: "Mulai olahraga tanpa harus pergi ke gym sebenarnya gampang dan fleksibel banget. Aku biasanya mulai dengan bodyweight exercises di rumah, kayak push-up, sit-up, plank, atau squat. Latihan-latihan ini gak butuh alat sama sekali, jadi bisa langsung aja di ruang tamu atau kamar. Aku sering juga cari video workout di YouTube buat variasi, apalagi kalau lagi bosen sama gerakan yang itu-itu aja. Di sana banyak banget pilihan, dari yoga yang lebih tenang sampai HIIT yang intens buat cardio, jadi bisa sesuaiin sama mood."
            },
        ],
        category: "Penyakit & Pengobatan",
    },
    {
        id: 3,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 4,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 5,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Penyakit & Pengobatan",
    },
    {
        id: 6,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 7,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 8,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 9,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 10,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 11,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 12,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 13,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 14,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 15,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 16,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    },
    {
        id: 17,
        title: "Bagaimana cara mengatasi burnout di tempat kerja?",
        reply: [],
        category: "Kesehatan Mental",
    }
]

export default function ForumDetailPage() {
    const [question, setQuestion] = useState<QuestionBoxProps>({} as QuestionBoxProps);
    const pathname = usePathname();
    const id = pathname.split("/").pop();
    useEffect(() => {
        setQuestion(questionList.find((question) => question.id === parseInt(id)) || {} as QuestionBoxProps);
    },[id])

    return (
        <div className="mt-32 flex flex-col mx-20 gap-4">
            <div  className={clsxm("rounded-[10px] border-[1px] border-[#407BFF]",
            "p-[20px] md:p-[50px] w-full m-auto h-auto"
            )}>
                <div className='flex flex-col gap-4 lg:gap-[30px]'>
                    <div className='text-center border-[1px] bg-[#EFF4FF] text-[#458FF6] border-[#458FF6] rounded-[10px] max-w-[136px] text-[11px] px-2 py-2'>{question.category}</div>
                    <Typography className='text-[36px]'>{question.title}</Typography>
                </div>
            </div>
            <div className="flex flex-col gap-[100px]">
                <ButtonNoLink className="w-full" >Jawab</ButtonNoLink>
                {question.reply  && question.reply.map((reply, index) => {
                    return (
                        <ForumReply key={index} user={reply.user} createdAt={reply.createdAt}>{reply.reply}</ForumReply>
                    )
                })}
            </div>
            <div className="h-8"></div>
        </div>
    )
}