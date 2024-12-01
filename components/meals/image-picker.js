'use client'
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInput = useRef();

    function handlePickPicture() {
        imageInput.current.click();
    }

    function handleImageChanged(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage ? (
                        <p>No image picked yet</p>
                    ) : (
                        <Image src={pickedImage} alt="Image selected by user" fill />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    accept="image/png, image/jpeg"
                    name={name}
                    id={name}
                    ref={imageInput}
                    onChange={handleImageChanged}
                    hidden
                    required
                />
                <button
                    onClick={handlePickPicture}
                    className={classes.button}
                    type="button"
                >
                    Pick an image
                </button>
            </div>
        </div>
    );
}
