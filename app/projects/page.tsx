import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            이미지를 누르시면 해당 사이트로 이동합니다
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap  items-center justify-center ">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                year={d.year}
                site={d.site}
                github={d.github}
                stacks={d.stacks}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
