import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const Posts = () => {
  
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPosts(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {posts.map(post => (
                <li>
                    <Link to={`post/${post.id}`}>{post.title}</Link><div>{post.body}</div>
                </li>
                ))}
            </ul>
        );
    }
}
export default Posts;



// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });
  
//   const Posts = () => {
//     const classes = useStyles();
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(
//                 (data) => {
//                     setIsLoaded(true);
//                     setPosts(data);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//       }, [])

//       if (error) {
//                 return <div>Error: {error.message}</div>;
//             } else if (!isLoaded) {
//                 return <div>Loading...</div>;
//             } else {
  
//     return (
//       {posts.map(post => (
//         <Link to={`post/${post.id}`}>
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="/static/images/cards/contemplative-reptile.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//             {post.title}Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//             {post.body}
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//       </Link>
//       ))}
//     );
//     }
// }
// export default Posts;







{/* <React.Fragment> */}
		// 	<Container maxWidth="md" component="main">
		// 		<Grid container spacing={5} alignItems="flex-end">
		// 			{posts.map((post) => {
		// 				return (
		// 					// Enterprise card is full width at sm breakpoint
		// 					<Grid item key={post.id} xs={12} md={4}>
		// 						<Card className={classes.card}>
		// 							<CardMedia
		// 								className={classes.cardMedia}
		// 								image="https://source.unsplash.com/random"
		// 								title="Image title"
		// 							/>
		// 							<CardContent className={classes.cardContent}>
		// 								<Typography
		// 									gutterBottom
		// 									variant="h6"
		// 									component="h2"
		// 									className={classes.postTitle}
		// 								>
		// 									{post.title.substr(0, 50)}...
		// 								</Typography>
		// 								<div className={classes.postText}>
		// 									<Typography
		// 										component="p"
		// 										color="textPrimary"
		// 									></Typography>
		// 									<Typography variant="p" color="textSecondary">
		// 										{post.excerpt.substr(0, 60)}...
		// 									</Typography>
		// 								</div>
		// 							</CardContent>
		// 						</Card>
		// 					</Grid>
		// 				);
		// 			})}
		// 		</Grid>
		// 	</Container>
		// </React.Fragment>