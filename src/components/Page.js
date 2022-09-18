import React from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
    const { value, textColor, backGroundColor } = useParams();
    const styles = {
        backgroundColor: backGroundColor || "inhert",
        color: textColor || "inhert"
    };

    return (
        <div>
            {!value ? <h1>Welcome</h1> : null}
            {value && isNaN(value) ? <h1 style={styles}>The word is: {value} </h1> : null}
            {value && !isNaN(value) ? <h1 style={styles}>The number is: {value} </h1> : null}
        </div>
    );
}

export default Page;