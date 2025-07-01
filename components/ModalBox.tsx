"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"; //from "@/components/material-tailwind-client";
import Container from "./Container";

type ModalProps = {
    size: string | null;
    handleOpenAction: (value: string | null) => void;
    mtitle: string;
    mdescription: string[];
    price: string;
    mimgSrc: string;
    mimgAlt: string;
    mimagePosition: "left" | "right";
}

export default function ModalBox({size, handleOpenAction, mtitle, mdescription, price, mimgSrc, mimgAlt, mimagePosition}: ModalProps) {
    const toggle = () => {
        if (size === "md") {
        handleOpenAction(null); 
        } else {
        handleOpenAction("md"); 
        }
    };
    //const [size, setSize] = React.useState<string | null>(null);
    //const handleOpen = (value:string | null) => setSize(value);

    return(
    <Dialog open={size === "md"} handler={toggle} className="!fixed !inset-0" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader className="text-center justify-self-center text-4xl" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{mtitle}</DialogHeader>
        <DialogBody placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Container title="Product Details" description={mdescription}
            imgSrc={mimgSrc}
            imgAlt={mimgAlt}
            imagePosition={mimagePosition}
            btnText={undefined}
            btnLink={undefined}
        />
        </DialogBody>
        <DialogFooter className="flex items-center justify-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <p>Price = {price}</p>
            <Button className="btn" variant="gradient" color="green" onClick={toggle} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>Add to card</span>
            </Button>
            <Button className="btn" variant="gradient" onClick={toggle} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>Cancel</span>
            </Button>
        </DialogFooter>
    </Dialog>
    );
}