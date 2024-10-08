import Image from 'next/image'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-28 min-h-screen md:max-w-4xl">
        <div className="relative mx-auto mb-36 max-w-md space-y-2 pb-8 pt-6 md:max-w-3xl md:space-y-5 lg:mb-48">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Chorong Lee, <br />
            Frontend Developer
          </h1>
          <Image
            className="absolute right-0 top-0 z-[-1] md:block md:h-[200px] md:w-[200px]"
            src="/static/images/flippedavatar.svg"
            alt="프로필 일러스트"
            width={80}
            height={80}
          />
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            안녕하세요, 프론트엔드 개발자 이초롱입니다
            <br />
            협업하고 싶은 동료가 되는 게 목표입니다
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
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
      </div>
    </>
  )
}
