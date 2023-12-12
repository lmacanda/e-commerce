"use client";

import React from "react";
import Image from "next/image";
import styles from "./Left.module.scss";

import { useState, useEffect } from "react";
import { type } from "os";

interface IBlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  time: string;
  date: string;
  category: string;
  user: string;
}

const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_1",
    time: "5 min",
    date: "12th Oct 2023",
    category: "wood",
    user: "Admin",
  },
  {
    id: 2,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_2",
    time: "22 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 3,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 4,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 5,
    title: "Welcome to the blog, new page added",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 6,
    title: "Tottenham are a nothing club",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 7,
    title: "Welcome to the blog, new page added",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 8,
    title: "Arsenal are winning the league this year",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
  {
    id: 9,
    title: "Its a new post for today, enjoy reading it",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "IMG_3",
    time: "5 min",
    date: "12th Oct 2023",
    category: "handmade",
    user: "John Doe",
  },
];

function Left() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // or whatever number you want

  useEffect(() => {
    // Fetch data based on currentPage and itemsPerPage
    setData(blogPosts);
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className={styles.container}>
      {data &&
        data
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((blogPost: IBlogPost) => (
            <div key={blogPost.id}>
              <div className={styles.wrapper}>
                <div className={styles.image}>
                  <Image
                    src={`/images/posts/${blogPost.image}.png`}
                    alt="image"
                    width={817}
                    height={500}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.icon}>
                    <div className={styles.iconImage}>
                      <Image
                        src={`/images/posts/user.png`}
                        alt="user"
                        width={15}
                        height={15}
                      />
                    </div>
                    <span className={styles.iconFont}>{blogPost.user}</span>
                  </div>
                  <div className={styles.icon}>
                    <div className={styles.iconImage}>
                      <Image
                        src={`/images/posts/calender.png`}
                        alt="user"
                        width={15}
                        height={15}
                      />
                    </div>
                    <span className={styles.iconFont}>{blogPost.date}</span>
                  </div>
                  <div className={styles.icon}>
                    <div className={styles.iconImage}>
                      <Image
                        src={`/images/posts/tag.png`}
                        alt="category"
                        width={15}
                        height={15}
                      />
                    </div>
                    <span className={styles.iconFont}>{blogPost.category}</span>
                  </div>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>{blogPost.title}</h3>
                  <p className={styles.content}>{blogPost.content}</p>
                </div>
                <div className={styles.button}>
                  <button>Read more</button>
                </div>
              </div>
            </div>
          ))}
      ;
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={styles.btn__active}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`${styles.btn__active} ${styles.btn__next}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Left;
