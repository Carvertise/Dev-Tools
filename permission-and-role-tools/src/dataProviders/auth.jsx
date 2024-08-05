import { createAuthProvider } from 'react-token-auth';
import { jwtDecode } from "jwt-decode";

// "iat": 1718916872,
// "exp": 1718920472
// HS256
export const { useAuth, authFetch, login, logout, getSession, getSessionState } = createAuthProvider({
    getAccessToken: async session => {
        console.log('GETTING ACCESS TOKEN');
        // console.log(session);
        // const decoded = jwtDecode(session.apiToken);
        // const expiration = decoded.iat;
        // if (Date.now() >= expiration * 1000) {
        //     console.log('TOKEN EXPIRED, REFRESHING');
        //     const result = await fetch('http://localhost:3000/auth/refresh?token=' + session.refreshToken, {});
        //     const json = await result.json();
        //     console.log('NEW TOKEN: ', json);
        //     session.apiToken = json.apiToken;
        // }
        return session.apiToken;
    },
    onUpdateToken: session => {
        console.log('CALLING REFRESH TOKEN API ENDPOINT');
        fetch('https://api.carvertise.com/auth/refresh', {
            method: 'POST',
            body: session.refreshToken,
        }).then(r => r.json());
    },
    onHydratation: session => session
});