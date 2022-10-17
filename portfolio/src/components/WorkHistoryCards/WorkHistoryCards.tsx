import { StaticImageData } from "next/future/image";
import Image from 'next/future/image'

export type WorkHistoryCardProps = {
    work: WorkHistory
};
export type WorkHistory = {
    logo: string | StaticImageData;
    company: string;
    role: string;
    startDate: string;
    endDate: string | null;
}

function WorkHistoryCards( { work }: WorkHistoryCardProps ) {

    const { logo, company, role, startDate } = work
    const endDate = work.endDate ?? 'Present'
    return (
        <section className="flex gap-5 w-full duration-500 rounded  motion-safe:hover:scale-105">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <Image src={logo} width={32} height={32} alt="GeekPower logo" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-gray-900">{company}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startDate} till ${endDate}`}>{startDate} - {endDate}</dd>
            </dl>

        </section>
    );
}

export default WorkHistoryCards