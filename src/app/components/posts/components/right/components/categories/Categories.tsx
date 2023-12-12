import styles from "./Categories.module.scss";

function Categories() {
  interface ICategories {
    id: number;
    title: string;
    quantity: number;
  }
  const categories = [
    {
      id: 1,
      title: "Crafts",
      quantity: 2,
    },
    {
      id: 1,
      title: "Design",
      quantity: 2,
    },
    {
      id: 1,
      title: "Handmade",
      quantity: 10,
    },
    {
      id: 1,
      title: "Interior",
      quantity: 8,
    },
    {
      id: 1,
      title: "Wood",
      quantity: 6,
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Categories</h3>
        {categories.map((category: ICategories) => (
          <div className={styles.categories} key={category.id}>
            <ul className={styles.list__items}>
              <li className={styles.list__flex}>
                <span>{category.title}</span>
                <span>{category.quantity}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
