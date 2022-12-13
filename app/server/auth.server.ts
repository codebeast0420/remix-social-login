import { Authenticator } from "remix-auth";
import { GoogleStrategy, FacebookStrategy, SocialsProvider } from "remix-auth-socials";
import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator
export let authenticator = new Authenticator(sessionStorage, { sessionKey: '_session' });
// You may specify a <User> type which the strategies will return (this will be stored in the session)
// export let authenticator = new Authenticator<User>(sessionStorage, { sessionKey: '_session' });

authenticator.use(new GoogleStrategy(
  {
    clientID: "414270371574-hdsp4cihuo23vo0u4qbhjgmgb54otfhn.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`
  },
  async ({ profile }) => {
    // here you would find or create a user in your database
    return profile;
  }
));

authenticator.use(new FacebookStrategy(
  {
    clientID: "2059041460972964",
    clientSecret: "d1f2f84f82284dac2bb71ec8cf993200",
    callbackURL: `https://localhost:3000/auth/${SocialsProvider.FACEBOOK}/callback`
  },
  async ({ profile }) => {
    // here you would find or create a user in your database
    return profile;
  }
));