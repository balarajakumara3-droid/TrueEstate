import React from 'react';
import { ArrowLeft, Phone, Video, MoreHorizontal, Send, Paperclip, Mic } from 'lucide-react';
import { CURRENT_AGENT, CHAT_HISTORY } from '../../constants';

const ChatScreen: React.FC = () => {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <ArrowLeft size={20} className="text-neutral-900" />
        <div className="flex flex-col items-center">
             <div className="relative">
                <img src={CURRENT_AGENT.image} className="w-10 h-10 rounded-full object-cover mb-1" alt="Agent" />
                <div className="absolute bottom-1 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
             </div>
             <span className="text-xs font-bold">{CURRENT_AGENT.name}</span>
             <span className="text-[10px] text-green-500">Online</span>
        </div>
        <div className="flex gap-4 text-neutral-600">
             <Phone size={20} />
             <Video size={20} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-neutral-50 p-4 space-y-6 overflow-y-auto phone-scroll">
         <div className="text-center text-[10px] text-neutral-400 my-4">Today, 10:30 AM</div>
         {CHAT_HISTORY.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                 {msg.sender === 'other' && (
                     <img src={CURRENT_AGENT.image} className="w-8 h-8 rounded-full mr-2 self-end mb-1" alt="agent" />
                 )}
                 <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                     msg.sender === 'me' 
                     ? 'bg-primary text-white rounded-br-none' 
                     : 'bg-white text-neutral-800 rounded-bl-none shadow-sm'
                 }`}>
                     <p className="text-sm">{msg.text}</p>
                     <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-green-100' : 'text-neutral-400'}`}>{msg.time}</p>
                 </div>
             </div>
         ))}
         
         {/* Typing Indicator Mock */}
         <div className="flex justify-start">
             <img src={CURRENT_AGENT.image} className="w-8 h-8 rounded-full mr-2 self-end mb-1" alt="agent" />
             <div className="bg-white rounded-2xl rounded-bl-none px-4 py-4 shadow-sm flex gap-1">
                 <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-75"></div>
                 <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-150"></div>
             </div>
         </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-neutral-100 flex items-center gap-3">
         <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-500">
             <Paperclip size={20} />
         </div>
         <div className="flex-1 bg-neutral-50 rounded-full px-4 py-2.5 flex items-center justify-between">
             <input type="text" placeholder="Type a message..." className="bg-transparent text-sm focus:outline-none w-full" />
         </div>
         <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
             <Send size={18} className="ml-0.5" />
         </div>
      </div>
    </div>
  );
};

export default ChatScreen;