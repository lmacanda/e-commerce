import Image from "next/image";
import styles from "./BlogPost.module.scss";
import Button from "@/app/components/button/Button";

function BlogPost() {
  interface IBlogPost {
    id: number;
    title: string;
    content: string;
    image: string;
    time: string;
    date: string;
  }
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Going all-in with millennial design",
      image: "IMG_1",
      time: "5 min",
      date: "12th Oct 2023",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "Going all-in with millennial design",
      image: "IMG_2",
      time: "22 min",
      date: "12th Oct 2023",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content: "Going all-in with millennial design",
      image: "IMG_3",
      time: "5 min",
      date: "12th Oct 2023",
    },
  ];

  return (
    <div className={styles.container}>
      {blogPosts.map((blogPost: IBlogPost) => (
        <div key={blogPost.id}>
          <div className={styles.tiles}>
            <Image
              src={`/images/blog/${blogPost.image}.png`}
              alt="image"
              width={393}
              height={393}
            />
            <div className={styles.bottom}>
              <p className={styles.description}>
                {blogPost.content.substring(0, 100)}
              </p>
              <Button fontSize="bold">Read More</Button>
              <div className={styles.date}>
                <span className={styles.dateTime}>
                  <Image
                    src={`/images/blog/time.png`}
                    alt="time"
                    width={15}
                    height={15}
                  />
                  <span className={styles.dateTimeFont}>{blogPost.time}</span>
                </span>
                <span className={styles.dateTime}>
                  <Image
                    src={`/images/blog/calender.png`}
                    alt="date"
                    width={15}
                    height={15}
                  />
                  <span className={styles.dateTimeFont}>{blogPost.date}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default BlogPost;
