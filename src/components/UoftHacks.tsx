export default function UoftHacks() {
  const data = [
    { type: "h1", content: "UofT Hacks 13 — Proposal by Aman Meherally" },
    {
      type: "p",
      content:
        'Thank you for viewing my UofT Hacks 13 proposal! In this "blog", I will walk you through my idea for what the home page should start looking like along with my background. With that said, I am happy to continue with this design, or go in a completely different direction based on the brand guidelines outlined by the Marketing and Design teams. ',
    },
    {
      type: "h2",
      content: "The Story",
    },
    {
      type: "p",
      content:
        "I made a mention of this in my application, but my website might just be the best place to elaborate (what a surprise).",
    },
    {
      type: "p",
      content:
        "In my last hackathon, I made a fundamental discovery — I love SaaS. Over the last decade, I watched my dad build a brand from scratch, and as a small business owner, he used various SaaS tools to help him along the way. Wherever I helped him out (usually in the form of tech support, his website was largely made and maintained by me in WordPress), I would watch how these various tools acted as the foundations for his brand. ",
    },
    {
      type: "p",
      content:
        "His legacy is the reason why I am studying at the University of Toronto in the heart of a city with some of the greatest techological discoveries, and with the family and genius-peer support I have around me, I am in a position to do that for someone else — other small businesses that can benefit from tools I make for them.",
    },
    { type: "h2", content: "Why UofT Hacks 13?" },
    {
      type: "p",
      content:
        'UofT Hacks 13 is a platform where I can use my development skills to inspire other participants. Finding my mission was a lightbulb moment for me, and I want other people to have that previlige too. I will accomplish this by building a platform that stands out from your "typical" hackathon website. I want UofT applicants to look at our website and go "oh, damn!".',
    },
    { type: "h2", content: "How?" },
    {
      type: "p",
      content:
        "Okay, here is the plan. Below is a very basic plan of how I am going to pull this off.",
    },
    {
      type: "ol",
      list: [
        "Build a hero section foreground and a minimal animated background",
        "Build the rest of the landing page",
        "Connect to a backend for registration set-up and for a contact form",
      ],
    },
    {
      type: "p",
      content: "...and other smaller things that don't need mentioning.",
    },
    {
      type: "h3",
      content:
        "Key point: Building the hero section foreground and the animated background",
    },
    {
      type: "p",
      content:
        "Below is a low-resolution export of my Figma design for the hero section. This is going to be the first section of the landing page.",
    },
    { type: "img", content: "/src/assets/hero.png", alt: "Hero" },
    {
      type: "p",
      content:
        "I want to make two changes here. One: I want the deliberately selected-looking heading to have some sort of animation where it looks like the heading is being edited and developed live. Two: I want there to be a background animation where it looks like elements in a Figma file are being moved around collaboratively. While I couldn't find any accurate examples, the Figma development team made a really good example at https://www.figma.com/design/ (the first one on their page). While this isn't exactly the vision I have in mind in that I want our landing page to look a little simpler, it represents my ideas best.",
    },
    {
      type: "p",
      content:
        "The rest of the website is in line with a standard hackathon registration landing page. I plan to base the content off of last year's page as well as design inspiration other platforms.",
    },
    {
      type: "p",
      content:
        "I am going to implement this using some animation tools. In example of a collaborative project I am currently working on which required an animation, I made this loading animation. The project we are working on is a platform that connects students together in the form of a network, which is what inspired this design.",
    },
    { type: "video", content: "/src/assets/sample.webm" },
    {
      type: "p",
      content:
        'Thank you for reading this "blog"! I would be more than happy to walk you through why I\'ve made some design decisions, and learn more about UofT Hacks 13 in the process.',
    },
  ];

  function removeSubdomainFromUrl() {
    // Create a URL object to easily manipulate the URL
    const parsedUrl = new URL(location.href);

    // Split the hostname into parts based on '.' and remove the first part (subdomain)
    const hostnameParts = parsedUrl.hostname.split(".");

    // Remove the first part (subdomain)
    const domain = hostnameParts.slice(1).join(".");

    // Reconstruct the URL with the updated domain
    const newUrl = `${parsedUrl.protocol}//${domain}${
      parsedUrl.port ? `:${parsedUrl.port}` : ""
    }${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;

    return newUrl;
  }

  return (
    <>
      <section
        id="nav"
        className="flex px-12 max-md:px-6 py-6 items-center justify-between"
      >
        <a href="/">
          <h1 className="text-lg lg:text-xl font-bold">UofTHacks 13</h1>
        </a>
        <a href={removeSubdomainFromUrl()}>
          <button className="bg-black text-white px-4 py-2 lg:px-6 lg:py-3 text-sm rounded-full cursor-pointer">
            Back to home
          </button>
        </a>
      </section>
      <section id="content" className="max-w-[48rem] mx-auto mb-12 px-8">
        {data.map((item) => {
          if (item.type === "h1") {
            return (
              <h1 className="font-open-sans py-8 font-extrabold text-3xl lg:text-4xl">
                {item.content}
              </h1>
            );
          } else if (item.type === "p") {
            return (
              <p className="font-sans font-light py-2 text-lg lg:text-xl text-gray-800">
                {item.content}
              </p>
            );
          } else if (item.type === "h2") {
            return (
              <h2 className="font-open-sans py-6 font-extrabold text-xl lg:text-2xl">
                {item.content}
              </h2>
            );
          } else if (item.type === "h3") {
            return (
              <h3 className="font-open-sans py-6 font-bold text-lg lg:text-xl">
                {item.content}
              </h3>
            );
          } else if (item.type === "img") {
            return (
              <img
                src={item.content}
                alt={item.alt}
                className="w-full rounded-2xl my-8"
              />
            );
          } else if (item.type === "video") {
            return (
              <video
                src={item.content}
                className="w-full rounded-2xl my-8"
                loop
                autoPlay
              />
            );
          } else if (item.type === "ol") {
            return (
              <ol className="list-decimal mx-8 my-4 ">
                {item.list?.map((text) => {
                  return (
                    <li className="font-sans text-xl text-gray-800">
                      <p className="font-sans text-xl text-gray-800">{text}</p>
                    </li>
                  );
                })}
              </ol>
            );
          }
        })}
      </section>
    </>
  );
}
