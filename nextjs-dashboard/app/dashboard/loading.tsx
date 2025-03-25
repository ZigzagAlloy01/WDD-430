import { lusitana } from '@/app/ui/fonts';
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    /*return <div className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Loading...</div>;*/
    return <DashboardSkeleton />;
}