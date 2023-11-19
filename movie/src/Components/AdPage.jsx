import React, { useState } from 'react';
import Ad from './Ad';

export default function AdPage() {
    const [isAd, setIsAd] = useState(true);
    const [comment, setComment] = useState("광고 안 보기");

    const changeIsAd = () => {
        if (isAd){
            setIsAd(false);
            setComment("광고 보기");
        }
        else {
            setIsAd(true);
            setComment("광고 안 보기");
        }
    }

    return (
        <div>
            {isAd ? <Ad /> : null}
            <button onClick={changeIsAd}>{comment}</button>
        </div>
    )
}
