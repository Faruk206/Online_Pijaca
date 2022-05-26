import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './Kartica.css';

export default function KarticaBijela(props){
    return(
        <Card bg = "light" style={{ width: '18rem' }}>
        <Card.Img className = "kartica-slika" variant="top" src={props.slika} />
        <Card.Body>
            <Card.Title>{props.naslov}</Card.Title>
            <Card.Text>
            {props.tekst}
            </Card.Text>
            <Button variant="primary">Provjeri</Button>
        </Card.Body>
        </Card>
    )
}
