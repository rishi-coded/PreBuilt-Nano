import React from 'react';

const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>;
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const HdIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/><path d="m11 12-1.5 0M14.5 12H13V9h1.5a1 1 0 0 1 0 2v0a1 1 0 0 1 0 2Z"/></svg>;
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="5 3 19 12 5 21 5 3"/></svg>;
const GridIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><rect width="7" height="7" x="4" y="4" rx="0"/><rect width="7"height="7" x="13" y="4" rx="0"/><rect width="7" height="7" x="13" y="13" rx="0"/><rect width="7" height="7" x="4" y="13" rx="0"/></svg>;


const ShortcutButton: React.FC<{icon: React.ReactNode, label: string}> = ({ icon, label }) => (
    <button className="flex flex-col items-center justify-center space-y-2 w-full h-24 bg-card-bg rounded-xl shadow-soft transition-transform duration-300 hover:-translate-y-1">
        <div className="w-10 h-10 bg-blue-100 text-brand-primary rounded-full flex items-center justify-center">{icon}</div>
        <span className="text-sm font-semibold text-text-primary">{label}</span>
    </button>
);


export const Shortcuts: React.FC = () => {
    const shortcutItems = [
        { icon: <ScissorsIcon />, label: "Remove Background" },
        { icon: <GlobeIcon />, label: "Change Background" },
        { icon: <HdIcon />, label: "Upscale" },
        { icon: <PlayIcon />, label: "Create Video" },
        { icon: <GridIcon />, label: "Batch Edit" },
    ];
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
           {shortcutItems.map(item => <ShortcutButton key={item.label} {...item} />)}
        </div>
    );
};