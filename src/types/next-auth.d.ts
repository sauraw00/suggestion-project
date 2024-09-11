import 'next-auth'
import { DefaultSession } from 'next-auth';

//here we telling to auth our UserModel properties
// to use in option folder , in "sessions and awt" to build more powerful 


 declare module 'next-auth'{
    interface User{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string

    }

    interface Session{

        user: {
            _id?:string;
            isVerified?:boolean;
            isAcceptingMessages?:boolean;
            username?:string

        } & DefaultSession['user']
    }
}

//other way to declare module

declare module 'next-auth/jwt' {
    interface JWT{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string
        
    }
}