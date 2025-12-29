import { DashboardData } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share, Lightbulb } from "lucide-react";

interface Row8CommunityProps {
    posts: DashboardData['communityPosts'];
    // Adding dummy insights prop or just hardcoding for now as it wasn't in main data interface deeply
}

export function Row8Community({ posts }: Row8CommunityProps) {
    return (
        <section id="community-section" className="px-8 mb-8 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Community Feed */}
                <div className="xl:col-span-8 bg-card-bg rounded-2xl border border-slate-custom p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Community Feed</h3>
                        <Button variant="link" className="text-volt font-semibold hover:text-white p-0">Detailed View</Button>
                    </div>

                    <div className="space-y-6">
                        {posts.map((post, index) => (
                            <div key={index} className="flex space-x-4 border-b border-slate-custom last:border-0 pb-6 last:pb-0">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-custom">
                                        <img src={post.user.avatarUrl} alt={post.user.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{post.user.name}</h4>
                                            <p className="text-slate-custom text-xs">{post.timeAgo}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-sm mt-2 mb-3">{post.content}</p>

                                    <div className="flex space-x-6">
                                        <button className="flex items-center space-x-1 text-slate-custom hover:text-red-500 transition text-xs font-medium">
                                            <Heart className="w-4 h-4" /> <span>{post.likes}</span>
                                        </button>
                                        <button className="flex items-center space-x-1 text-slate-custom hover:text-blue-500 transition text-xs font-medium">
                                            <MessageSquare className="w-4 h-4" /> <span>{post.comments}</span>
                                        </button>
                                        <button className="flex items-center space-x-1 text-slate-custom hover:text-white transition text-xs font-medium">
                                            <Share className="w-4 h-4" /> <span>{post.shares}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training Insights */}
                <div className="xl:col-span-4 bg-card-bg rounded-2xl border border-slate-custom p-6 bg-gradient-to-br from-card-bg to-deep-navy">
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-3">
                            <Lightbulb className="text-yellow-500 w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Training Insights</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-deep-navy rounded-xl border border-slate-custom/50">
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-bold text-volt">Tip:</span> Your chest volume has increased by 15% this week. Consider adding more rest days or ensuring adequate protein intake for recovery.
                            </p>
                        </div>
                        <div className="p-4 bg-deep-navy rounded-xl border border-slate-custom/50">
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-bold text-blue-400">Analysis:</span> You consistently perform better on Pull days when you train in the afternoon vs morning.
                            </p>
                        </div>
                    </div>

                    <Button className="w-full mt-6 bg-zinc-800 text-white hover:bg-zinc-700">View All Insights</Button>
                </div>

            </div>
        </section>
    );
}
