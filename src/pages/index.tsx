import { SignUp } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignUp redirectUrl="/Home" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  if (userId) {
    // handle user is not logged in.
    return {
      redirect: {
        destination: "/Home",
      },
      props: {},
    };
  } else {
    return { props: { ...buildClerkProps(ctx.req) } };
  }
};

export default SignUpPage;
