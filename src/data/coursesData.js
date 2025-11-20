import course1 from '../assets/img/course-1.jpg';
import course2 from '../assets/img/course-2.jpg';
import course3 from '../assets/img/course-3.jpg';

import trainer1 from '../assets/img/team/team-1.jpg';
import trainer2 from '../assets/img/team/team-2.jpg';
import trainer3 from '../assets/img/team/team-3.jpg';

const coursesData = [
  {
    id: 1,
    title: "Website Design",
    category: "Web Development",
    price: 169,
    image: course1,
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    
    // ⭐ TAB DATA
    overview: `
      Est eveniet ipsam sindera pad rone matrelat sando reda.

      Omnis blanditiis saepe eos autem qui sunt debitis porro quia.

      Exercitationem nostrum omnis. Ut reiciendis repudiandae minus.
      Omnis recusandae ut non quam ut quod eius qui.
      Ipsum quia odit vero atque qui quibusdam amet.
      Occaecati sed est sint aut vitae molestiae voluptate vel.
    `,

    content: `
      - Introduction to UI/UX
      - Wireframes & Prototypes
      - Figma/Adobe XD Basics
      - Color Theory & Typography
      - Landing Page Design
    `,

    requirements: `
      - No prior design experience required
      - Laptop with design tools installed
      - Creativity and willingness to learn
    `,

    trainer: {
      name: "Walter White",
      students: 50,
      likes: 65,
      avatar: trainer1,
    },
  },

  {
    id: 2,
    title: "Search Engine Optimization",
    category: "Marketing",
    price: 250,
    image: course2,
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    
    // ⭐ TAB DATA
    overview: `
      Learn how search engines work and how to rank websites on Google.
      Covering SEO fundamentals, keyword strategies, and ranking algorithms.
    `,

    content: `
      - Keyword Research
      - On-Page Optimization
      - Backlinks & Authority
      - Technical SEO
      - SEO Tools (Ahrefs, SEMrush)
    `,

    requirements: `
      - Basic computer knowledge
      - Understanding of websites preferred but not required
    `,

    trainer: {
      name: "Sarah Johnson",
      students: 35,
      likes: 42,
      avatar: trainer2,
    },
  },

  {
    id: 3,
    title: "Copywriting",
    category: "Content",
    price: 180,
    image: course3,
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    
    // ⭐ TAB DATA
    overview: `
      Become a master at persuasive content writing.
      Learn how to craft high-converting sales pages and marketing emails.
    `,

    content: `
      - Writing Headlines
      - Storytelling in Copywriting
      - Email Marketing Copy
      - Sales Pages & Ads
      - Tone & Voice Development
    `,

    requirements: `
      - Basic English knowledge
      - No prior writing experience required
    `,

    trainer: {
      name: "William Anderson",
      students: 20,
      likes: 85,
      avatar: trainer3,
    },
  },
];

export default coursesData;
