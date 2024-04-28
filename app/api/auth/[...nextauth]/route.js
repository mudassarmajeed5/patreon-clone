import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import User from '@/models/User';
import connectDB from '@/Database/mongodb';
export const authoptions =  NextAuth({
  providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),
      
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider == 'github') {
          await connectDB();
          const currentUser =await User.findOne({email:email});
          if (!currentUser){
            const NewUser = await User.create({
              email:user.email,
              username:user.email.split('@')[0],
            });
          }
          return true;
        }
      },
      async session({ session, user, token }) {
        const dbUser = await User.findOne({email:session.user.email})
        console.log("Database User: ",dbUser);
        session.user.name = dbUser.username;
        return session
      },
    }
    });
export {authoptions as GET, authoptions as POST}