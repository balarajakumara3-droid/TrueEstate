import React from 'react';
import { User, Bell, Settings, CircleHelp, LogOut, ChevronRight, Heart, Home } from 'lucide-react';

const ProfileScreen: React.FC = () => {
    return (
        <div className="h-full bg-neutral-50 flex flex-col overflow-y-auto phone-scroll">
            <div className="bg-white p-6 pb-8 rounded-b-[2.5rem] shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold font-heading">Profile</h2>
                    <Settings size={20} className="text-neutral-600" />
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img src="https://picsum.photos/id/65/200/200" className="w-20 h-20 rounded-full object-cover border-4 border-neutral-50" alt="Profile" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-[10px]">✎</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">User</h3>
                        <p className="text-neutral-500 text-sm">user@example.com</p>
                        <div className="mt-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full inline-block">
                            Premium Member
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-neutral-50 p-4 rounded-2xl flex flex-col items-center">
                        <Heart className="text-accent-red mb-2" size={24} />
                        <span className="font-bold text-lg">12</span>
                        <span className="text-xs text-neutral-500">Favorites</span>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-2xl flex flex-col items-center">
                        <Home className="text-primary mb-2" size={24} />
                        <span className="font-bold text-lg">45</span>
                        <span className="text-xs text-neutral-500">Viewed</span>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-2">Account</p>
                    <div className="bg-white p-2 rounded-2xl">
                        <MenuItem icon={<User size={18} />} label="Personal Information" />
                        <MenuItem icon={<Bell size={18} />} label="Notifications" badge="2" />
                        <MenuItem icon={<CircleHelp size={18} />} label="Help Center" />
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-2">General</p>
                    <div className="bg-white p-2 rounded-2xl">
                        <MenuItem icon={<Settings size={18} />} label="Settings" />
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-accent-red">
                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                                <LogOut size={16} />
                            </div>
                            <span className="flex-1 text-left font-medium text-sm">Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MenuItem: React.FC<{ icon: React.ReactNode, label: string, badge?: string }> = ({ icon, label, badge }) => (
    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group">
        <div className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            {icon}
        </div>
        <span className="flex-1 text-left font-medium text-sm text-neutral-700">{label}</span>
        {badge && (
            <span className="bg-accent-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{badge}</span>
        )}
        <ChevronRight size={16} className="text-neutral-300" />
    </button>
);

export default ProfileScreen;