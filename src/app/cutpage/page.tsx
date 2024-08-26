import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
            <div className="">
                <div className="">
                    <p>AI Powered</p>
                    <p>Lung Disease Screening & Telemedicine</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis totam commodi dolor ipsum aut, aliquid sequi. Exercitationem recusandae minima sit molestiae tempora assumenda omnis cumque suscipit quaerat ipsam qui doloribus illo ullam expedita quisquam obcaecati neque culpa harum voluptatem explicabo, ratione laborum ipsa? Iure non, voluptatum totam dolorum exercitationem dolorem autem maiores culpa nesciunt, molestias architecto cum, neque atque nostrum.</p>
                </div>
                <div className="">
                    <Image
                        src="/images/KenseUniv.svg"
                        width={180} height={180}
                        alt='Logo' />
                </div>
            </div>
        </>
    )
}
