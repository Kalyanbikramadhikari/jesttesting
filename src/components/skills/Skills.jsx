// import React from "react";

// export const Skills = (props) => {
//     const { skills } = props;
//     return (
//         <>
//             <ul>
//                 {skills.map((skill) => {
//                     return <li key={skill}>{skill}</li>;
//                 })}
//             </ul>
//         </>
//     );
// };



import { useState } from "react";

export const Skills = (props) => {
    // const { skills } = props;
 const skills = ['html','css']
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>

            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    );
};

