"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function DateForm({ date }) {
    const today = new Date().toISOString().split("T")[0]
    const dateObject = date ? new Date(date) : new Date()
    const nextDay = new Date(dateObject.getTime() + 24 * 60 * 60 * 1000)
    const beforeDay = new Date(dateObject.getTime() - 24 * 60 * 60 * 1000)
    const router = useRouter()

    return (
        <form className="flex justify-around items-center my-3">
            <Link href={`/?date=${beforeDay.toISOString().split("T")[0]}`}>
                {date === today ? "Yesterday" : beforeDay.toISOString().split("T")[0]}
            </Link>
            <input type="date" className="bg-transparent" value={dateObject.toISOString().split("T")[0]}
                onChange={(e) => {router.push(`/?date=${e.target.value}`) }} />
            <Link href={`/?date=${nextDay.toISOString().split("T")[0]}`}>
                {date === today ? "Tomorrow" : nextDay.toISOString().split("T")[0]}
            </Link>
        </form>
    )
}