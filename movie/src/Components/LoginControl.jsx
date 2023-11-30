import React, { useState } from 'react'

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false)
        }

        else {
            setIsLoggedIn(true)
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <button onClick={handleLoginClick} style={{ marginRight: "1vw", height: "100%", width: "6vw", borderRadius: "1rem" }}>
                {isLoggedIn ? "로그아웃" : "로그인"}
            </button>
            <p style={{ color: "white", width: "10rem" }}>
                {isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}
                </p>
        </div>
    )
}
