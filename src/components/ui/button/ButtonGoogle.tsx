'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import GoogleIcon from "../icon/GoogleIcon";

const ButtonGoogle = () => {

    return (
        <Button className="bg-white text-black">
            <GoogleIcon />
            Google
        </Button>
    );
}

export default ButtonGoogle;