import Head from "next/head"
import UserProfile from "../../components/userProfile/UserProfile";

const index = () => {


    return (
      <>
      <Head>
          <title>Orator | Blogs</title>
      </Head>
        <div>
          <h1>Blogs</h1>
          <UserProfile></UserProfile>
        </div>
      </>
    );
}

export default index
