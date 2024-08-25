'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import GithubIcon from "../icon/GithubIcon";

const ButtonGithub = () => {
    
    return (
        <Button className="bg-white text-black">
            <GithubIcon />
            Github
        </Button>
    );
}

export default ButtonGithub;