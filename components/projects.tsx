"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
// import React from "react";
// import SectionHeading from "./section-heading";
// import { projectsData } from "@/lib/data";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";
// // import { useClient } from "@/lib/hooks";

// import { motion } from "framer-motion";

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.5);

//   return (
//     <motion.section
//       ref={ref}
//       id="projects"
//       className="scroll-mt-28 mb-28"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <SectionHeading>My projects</SectionHeading>
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={project.id}>
//             <Project {...project} />
//           </React.Fragment>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
