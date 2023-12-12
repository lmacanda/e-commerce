import styles from "./Bottom.module.scss";
import Image from "next/image";

function Bottom() {
  interface IPosts {
    id: number;
    title: string;
    image: string;
    date: string;
  }
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "IMG_1",
      date: "03-Aug-2023",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      image: "IMG_2",
      date: "03-Aug-2023",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      image: "IMG_3",
      date: "03-Aug-2023",
    },
    {
      id: 4,
      title: "Modern home in Milan",
      image: "IMG_4",
      date: "03-Aug-2023",
    },
    {
      id: 5,
      title: "Colorful office redesign",
      image: "IMG_5",
      date: "03-Aug-2023",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Recent Posts</h3>
        {posts.map((post: IPosts) => (
          <div className={styles.recent__posts} key={post.id}>
            <ul className={styles.list__items}>
              <li className={styles.list__flex}>
                <span>
                  <Image
                    src={`/images/posts/related_posts/${post.image}.png`}
                    alt="Picture of the author"
                    width={80}
                    height={80}
                  />
                </span>
                <div className={styles.list__flex__text}>
                  <span className={styles.list_title}>{post.title}</span>
                  <span className={styles.list_date}>{post.date}</span>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bottom;
