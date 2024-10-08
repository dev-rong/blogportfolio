import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, year, site, github, stacks }) => (
  <div className="flex h-[530px] w-full max-w-[432px] flex-col p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-[530px] max-w-[432px]'
      }  relative rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (site ? (
          <Link href={site} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-auto max-h-[300px] w-auto object-contain object-center"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="h-auto max-h-[300px] w-auto object-contain object-center"
            width={544}
            height={306}
          />
        ))}
      <div className="w-full p-6">
        <p className="font-bold">{year}</p>
        <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight xl:text-2xl">
          {site ? (
            <Link href={site} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 whitespace-normal break-words pb-4">
          {stacks &&
            stacks.map((stack, index) => (
              <p
                key={index}
                className="whitespace-normal break-words text-sm text-black dark:text-gray-400"
              >
                {stack}
              </p>
            ))}
        </div>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center gap-8">
        {site && (
          <Link
            href={site}
            className="mb-2 me-2 rounded-full bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600"
            aria-label={`Link to ${title}`}
          >
            View
          </Link>
        )}
        {github && (
          <Link
            href={github}
            className="mb-2 me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            aria-label={`Link to ${title}`}
          >
            GitHub
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
