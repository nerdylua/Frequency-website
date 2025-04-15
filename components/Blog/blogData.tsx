import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "smtg",
    paragraph: "blah blah blah",
    image: "/images/blog/blog-01.png",
    author: {
      name: "Tarun",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Future"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "smtg",
    paragraph: "blah blah blah",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Tarun",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Computer Science"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "smtg",
    paragraph: "blah blah blah",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Tarun",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Design"],
    publishDate: "2025",
  },
];
export default blogData;
