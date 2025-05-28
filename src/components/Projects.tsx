import Navbar from "./Navbar";
import { projects } from "./../assets/constants/projects";

export default function Projects() {
  return (
    <>
      <Navbar hasBG />
      {/* <div className="flex items-center justify-start px-4 my-2">
        <h2 className="font-semibold text-3xl">My Latest Work</h2>
      </div> */}
      {/* grid-cols-[repeat(auto-fit,_minmax(0,24rem))] */}

      {/* <section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_auto))]">
        {projects.map((project) => {
          return <div className="border-1 w-full aspect-[5/4]"></div>;
        })}
      </section> */}

      <section className="px-6 pt-4 pb-6 grid gap-12 grid-cols-[repeat(auto-fit,_minmax(22rem,_auto))] mx-auto max-w-[90rem] justify-center">
        {projects.map((project) => {
          return (
            <div className="w-full">
              <div key={project.name} className="aspect-[8/5] w-full relative">
                <img
                  src={project.imageUrl}
                  alt="Project"
                  className="object-cover size-full rounded-4xl brightness-75 hover:brightness-90 transition-[filter] duration-300"
                />
                {project.tags && (
                  <div className="absolute top-0 left-0 flex flex-row m-5 gap-2">
                    {project.tags.map((tag) => {
                      return (
                        <div className="px-3 py-1 bg-black z-1 rounded-full">
                          <p className="text-white font-bold">{tag}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
                {project.inProgress === true && (
                  <div className="absolute top-0 right-0 flex flex-row m-5 gap-2">
                    <div className="px-3 py-1 bg-amber-500 z-1 rounded-full">
                      <p className="text-white font-bold">In progress</p>
                    </div>
                  </div>
                )}
                {project.icons && (
                  <div className="absolute bottom-0 left-0 flex flex-row m-5 gap-2 [&>svg]:not-first:-ml-4">
                    {project.icons.map((icon) => {
                      return (
                        <svg className="size-8 bg-black fill-white p-1 rounded-full">
                          {icon}
                        </svg>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-end mt-4 gap-2">
                <h3 className="font-semibold text-2xl mr-auto">
                  {project.name}
                </h3>
                {project.githubLink !== undefined && (
                  <a href={project.githubLink} target="_blank">
                    <svg
                      stroke="white"
                      fill="black"
                      className="size-7"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                )}
                {project.liveLink !== undefined && (
                  <a href={project.liveLink} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </a>
                )}
              </div>
              {project.description.map((item) => (
                <p className="text-black/60 mt-4">{item}</p>
              ))}
            </div>
          );
        })}
      </section>

      {/* <div className="px-4 mx-auto flex flex-wrap flex-row gap-4 [&>*]:aspect-[4/5] pt-20 justify-center">
        {projects.map((project) => {
          const imageClass = `bg-[url(/)]`;
          // bg-[url(https://mohammadanwar.dev/_next/static/media/mohammad.6ef25c26.jpg)]
          return (
            <div
              className={`${imageClass} bg-[hussein] bg-cover bg-center rounded-2xl overflow-clip max-w-[24rem]`}
              // className={`bg-[url(https://mohammadanwar.dev/_next/static/media/mohammad.6ef25c26.jpg)] bg-cover bg-center rounded-2xl overflow-clip max-w-[24rem]`}
            >
              <div className="p-8 flex flex-col w-full h-full bg-black/60 opacity-0 hover:opacity-100 active:opacity-100 transition">
                <h1 className="font-bold text-4xl text-white mb-4">
                  {project.name}
                </h1>
                <p className="font-normal text-lg text-white">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-row mx-auto gap-4 items-center justify-center">
                  {project.projectLink != undefined && (
                    <a href={project.projectLink} target="_blank">
                      <svg
                        stroke="white"
                        fill="white"
                        className="size-8"
                        stroke-width="0"
                        viewBox="0 0 496 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  )}
                  {project.sourceLink != undefined && (
                    <a href={project.sourceLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white "
                        className="size-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}
