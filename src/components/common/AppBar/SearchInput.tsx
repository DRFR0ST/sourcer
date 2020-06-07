import React, { useMemo, useState } from "react";
import Modal from 'react-modal';
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { usePosts } from "api/Post";
import { Card } from "components/shared";
import Masonry from 'react-masonry-component';


const useStyles = createUseStyles(styles);



const SearchInput = ({ open, onClose, className, overlayClassName, bodyOpenClassName }: { open: boolean, onClose: () => void, className?: string, bodyOpenClassName?: string, overlayClassName?: string }) => {
    const [search, setSearch] = useState("");
    const classes = useStyles();
    const posts = usePosts();

    const filterdPosts = useMemo(() => {
        return posts.filter(post => {
            if(!search) return false;
            if(post.id.includes(search)) return true;
            if(post.title.includes(search)) return true;
            if(post.topics.find(topic => topic.label.includes(search) || topic.id.includes(search))) return true;
            return false;
        })
    }, [posts, search]);


    const handleAfterOpen = () => {
        console.log("After Open triggered!")
    }

    const handleClose = () => {
        onClose && onClose()
    }

    const handleChange = (event: any) => {
        const value = event.target.value;

        setSearch(value);
    }

    const modalStyle = {
        content: { backgroundColor: "transparent", border: 0, zIndex: 9999 }, 
        overlay: { zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.35)" }
    }

    return <Modal
        isOpen={open}
        onAfterOpen={handleAfterOpen}
        onRequestClose={handleClose}
        className={className}
        overlayClassName={overlayClassName}
        bodyOpenClassName={bodyOpenClassName}
        style={modalStyle}
        contentLabel="Example Modal"
    >
        <div style={{width: "60%", margin: "0 auto"}}>
            <div className={classes.inputWrapper}>
                <input value={search} onChange={handleChange} placeholder="Search" className={classes.input} />
            </div>
            <div className={classes.outputWrapper}>
                <Masonry style={{ margin: "0 auto", position: "relative" }}>
                    { filterdPosts.map(post => <Card key={post.id} {...post} />) }
                </Masonry>
            </div>
        </div>
    </Modal>
}


export default SearchInput;