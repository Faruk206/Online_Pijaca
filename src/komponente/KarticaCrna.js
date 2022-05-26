import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './Kartica.css';

export default function KarticaCrna(props){
    return(
        <Card className = "Kartica-Crna" text = "light" bg = "dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.slika} />
        <Card.Body>
            <Card.Title>{props.naslov}</Card.Title>
            <Card.Text>
            {props.text}
            </Card.Text>
            <Button variant="primary">Provjeri</Button>
        </Card.Body>
        </Card>
    )
}
