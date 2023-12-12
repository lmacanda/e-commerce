import {
  withAuth,
  NextRequestWithAuth,
  NextAuthMiddlewareOptions,
} from "next-auth/middleware";

const middleware = (request: NextRequestWithAuth) => {
  console.log("[MIDDLEWARE_NEXTHAUTH_TOKEN]: ", request.nextauth.token);
};

const callbacksOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbacksOptions);

export const config = { matcher: ["/cart", "/checkout", "/myAccount"] };
