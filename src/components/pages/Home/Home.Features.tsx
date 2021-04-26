import React from 'react'

interface FeatureElement {
  title: string
  description: string
}

const BLOCKS: FeatureElement[] = [
  { title: 'Element 1', description: 'dkdk' },
  { title: 'Element 2', description: 'dkdkd' },
  { title: 'Element 3', description: 'kdkd' },
]

const HomeFeatures: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="text-center">
        <h2 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-br from-kpink-700 to-kpink-500">
          The Service You Deserve.
        </h2>
        <p className="mt-6 mb-10 text-xl text-black text-opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
          eligendi quaerat dignissimos cum, quidem odio, possimus repellendus
          assumenda reiciendis nemo iste doloribus quis tempora. Quos rerum hic
          atque sunt pariatur!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-x-10">
        {BLOCKS.map((e) => (
          <div
            className="p-3 border border-black border-opacity-10"
            key={e.title}
          >
            <h3 className="text-2xl font-bold text-center text-black uppercase text-opacity-80 ">
              {e.title}
            </h3>
            <p className="py-3 text-lg text-black text-opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora molestiae reiciendis debitis in, possimus
              suscipit ipsam laborum. Impedit aut sed sunt error iure? Animi in
              minima reprehenderit corrupti consequuntur.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeFeatures
