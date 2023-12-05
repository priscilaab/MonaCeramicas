import { Row, Col } from 'reactstrap';
import CarouselHome from '../components/CarouselHome';
import '../css/Home.css';

function Home() {
    return (
      <div className="home-container">
        <Row>
          <Col xs="12" md="8" lg="6">
            {/* Carousel */}
            <CarouselHome />
          </Col>
        </Row>
      </div>
    );
  }
  
  export default Home;