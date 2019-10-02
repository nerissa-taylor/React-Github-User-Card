import React from 'react';
import User from './User';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});
export default function FollowerCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.followers.avatar_url}
                    title={props.followers.login}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h2>Me:{props.followers.login}</h2>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h4>Me:{props.followers.login}</h4>
                        <h4>Url:{props.followers.url}</h4>

                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions> */}
        </Card>
    );
}

