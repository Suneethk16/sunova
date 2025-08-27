

const members = [
    {
        name: 'Suneeth K',
        role: 'DevOps and ML',
        avatar: '/suneeth.png',
    },
    {
        name: 'Swaroop',
        role: 'Design and Full Stack',
        avatar: '/swaroop.jpeg',
    },
]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-white text-center">Our Team</h2>

                <div>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t border-white/10 py-6 md:grid-cols-2">
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white/10 size-20 rounded-full border border-white/20 p-0.5 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm text-white font-medium">{member.name}</span>
                                <span className="text-white/70 block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
