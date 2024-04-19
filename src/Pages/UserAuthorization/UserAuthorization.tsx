import { useState } from "react";
import React, { useEffect, useRef } from "react"

function UserAuthorization() {
    const userRef = useRef<HTMLInputElement | null>(null);
    const errRef = useRef<HTMLParagraphElement | null>(null);

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, SetErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }   
    }, [])

    useEffect(() => {
        SetErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? "errmasg" :
                    "offscreen"} aria-live='assertive'>{errMsg}</p>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Username:</label>
                    <input
                        type="text"
                        id="password"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account? <br />
                    <span className="line">{ } <a href="./registration">Sign Up</a></span>
                </p>
                </section>
        </>
    )
}

export default UserAuthorization