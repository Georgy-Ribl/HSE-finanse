import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import img1 from '../../img/firstImg.jpg';
import img2 from '../../img/party.jpg';
import img3 from '../../img/valanters.jpg';
import img4 from '../../img/valanters2.jpg';

const useStyles = makeStyles((theme ) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        imageList: {
            width: 1280,
            height: 720,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

const itemData = [
    {
        img: img1,
        title: 'Classroom',
        author: 'HSE',
    },
    {
        img: img2,
        title: 'Party',
        author: 'HSE',
    },
    {
        img: img3,
        title: 'Volunteers',
        author: 'HSE',
    },
    {
        img: img4,
        title: 'Volunteers',
        author: 'HSE',
    },
];

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList rowHeight={360} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div"></ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            // actionIcon={
                            //     <IconButton aria-label={`info about ${item.title}`} className={classes.icon} >
                            //         <InfoIcon />
                            //     </IconButton>
                            // }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
