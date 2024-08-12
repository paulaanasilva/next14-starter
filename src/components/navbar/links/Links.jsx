import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";


const Links = () => {

  const links = [
    {
      title: "Principal",
      path: "/",
    },
    {
      title: "Sobre",
      path: "/about",
    },
    {
      title: "Contato",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    }
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Sair</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  )
}

export default Links;