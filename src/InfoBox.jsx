import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// Fixed: Added missing imports back
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import "./InfoBox.css"
export default function InfoBox({info}) {
    const INT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";    
    
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    


    return (
        <div className='InfoBox'>
            
           <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={info.humidity>80 ? RAIN_URL : (info.temp >15) ? HOT_URL : COLD_URL}
                alt="weather condition"
              />
             <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {info.city}
  </Typography>
  
  {/* Fix: Explicitly add component="div" right here */}
  <Typography component="div" sx={{ color: 'text.secondary' }}>
      <div>Feels Like = {info.feelslike}&deg;C</div>
      <div>Min Temp = {info.tempMin}&deg;C</div>
      <div>Max Temp = {info.tempMax}&deg;C</div>
      <div>Humidity = {info.humidity}%</div>
      <div>Description = {info.description}</div>
  </Typography>
</CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
        </div>
    );
}