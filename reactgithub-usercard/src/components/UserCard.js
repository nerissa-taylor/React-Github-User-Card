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
export default function UserCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.user.avatar_url}
                    title="Nerissa"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h2>Me:{props.user.login}</h2>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Bio:{props.user.bio}</h3>
                        <h2>Location:{props.user.location}</h2>
                        <h2><strong>Following:</strong>{props.user.following}</h2>
                        <h2><strong>Followers:</strong>{props.user.followers}</h2>

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

