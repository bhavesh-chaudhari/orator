import styles from "../../styles/UserProfile.module.css";
import { useGlobalContext } from "../../context/appContext";
import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
  const { user, login, logout } = useGlobalContext();

  const src = user?.photoURL;

  return (
    <div className={styles["user-profile-container"]}>
      {user ? (
        <>
          <Image loader={() => src} src={src} width={200} height={200}></Image>
          <p>{user.displayName}</p>
          <button onClick={logout}>Logout</button>
          <br />
          <Link href="/blogs/create">Create Blog</Link>
        </>
      ) : (
        <button onClick={login}>Signup as student to post blogs</button>
      )}
    </div>
  );
};

export default UserProfile;
