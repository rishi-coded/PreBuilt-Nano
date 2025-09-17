import React from 'react';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>;
const CreateIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5v14"/><path d="M5 12h14"/></svg>;
const WorkspaceIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 0-3-3v-4a3 3 0 0 0-3 3H5a7 7 0 0 0 7 11zM5 10a3 3 0 0 0 3 3h4a7 7 0 0 0 7-7V5a3 3 0 0 0-3-3h-4a7 7 0 0 0-7 7v1z"/></svg>;
const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"/></svg>;
const MediaIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;

const NavItem: React.FC<{icon: React.ReactNode, label: string, active?: boolean, className?: string}> = ({icon, label, active, className}) => (
    <a href="#" className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-blue-50 text-brand-primary' : 'text-text-secondary hover:bg-gray-100'} ${className}`}>
        {icon}
        <span>{label}</span>
    </a>
)

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-sidebar-bg border-r border-border-color flex flex-col p-4 flex-shrink-0">
      <div className="flex-grow">
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-semibold text-text-primary">Personal</span>
            </div>
            <ChevronDownIcon className="text-text-secondary" />
        </div>
        
        <nav className="mt-6 space-y-2">
            <button className="w-full flex items-center justify-center space-x-2 bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                <CreateIcon />
                <span>Create</span>
            </button>
            
            <div className="pt-4">
                 <NavItem icon={<WorkspaceIcon />} label="Workspace" active />
            </div>
            
            <div className="pt-4">
                <h3 className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider">Folders</h3>
                <div className="mt-2 space-y-1">
                     <NavItem icon={<FolderIcon />} label="New folder" className="text-brand-primary" />
                </div>
            </div>

            <div className="pt-4">
                <h3 className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider">Views</h3>
                <div className="mt-2 space-y-1">
                    <NavItem icon={<MediaIcon />} label="All media" />
                </div>
            </div>

        </nav>
      </div>

      <div className="flex-shrink-0">
        <div className="text-sm p-2">
            <p className="text-text-primary font-medium">0 credits</p>
        </div>
        <button className="w-full bg-brand-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
            Get more credits
        </button>
        <button className="w-full mt-2 bg-gray-100 text-text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
            Invite members
        </button>
      </div>
    </aside>
  );
};