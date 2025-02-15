import React from "react";

export const Skills = (props) => {
    const { skills } = props;
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
        </>
    );
};
