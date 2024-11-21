"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Typography from "@/components/Typography";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonNoLink from "@/components/button/buttonnolink";
import { useRouter } from "next/navigation"; // Import useRouter

interface OrderPageProps {
  params: {
    doctor_id: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  const { doctor_id } = params; 
  const [selectedDate, setSelectedDate] = useState<string>("");
  const router = useRouter(); 

  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
    return;
  }

  const handleSave = async () => {
    if (!selectedDate) {
      toast.error("Please select a date.");
      return;
    }

    const today = new Date();
    const selectedDateTime = new Date(selectedDate);

    if (selectedDateTime <= today) {
      toast.error("Please select a date in the future.");
      return;
    }
  
    const formattedDate = new Date(selectedDate + "T10:00:00Z").toISOString();
    const $baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 

    try {
      const response = await fetch($baseUrl + "/reservations", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: parseInt(doctor_id, 10),  
          date: formattedDate,
        }),
      });

      if (response.ok) {
        toast.success("Reservation saved successfully!");
        setSelectedDate("");

        setTimeout(() => {
          router.push("/orders"); 
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to save reservation: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("Error occurred while saving reservation.");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-screen bg-[#ECF4FE] flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-32">
        <ToastContainer />
        <div className="w-full h-[400px] bg-white rounded-[10px] border border-normal z-10 flex flex-col items-center justify-center">
          <div className="w-3/4 space-y-4">
            <Typography variant="t" weight="semibold" className="text-normal">
              Dokter ID: {doctor_id}
            </Typography>
            <Typography variant="bl" className="mb-2">
              Pilih Tanggal Konsultasi:
            </Typography>
            <input
              type="date"
              className="w-full p-2 text-gray-600 outline-none border border-gray-300 rounded-md"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div>
              <ButtonNoLink size="large" variant="primary" onClick={handleSave} className="w-full">
                Simpan
              </ButtonNoLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
