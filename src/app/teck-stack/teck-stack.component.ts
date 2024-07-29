import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-teck-stack',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './teck-stack.component.html',
  styleUrl: './teck-stack.component.css'
})
export class TeckStackComponent {
  products = [
    { image: 'aws.png'},
    { image: 'MLflow.svg' },
    { image: 'Pytest.svg' },
    { image: 'pytorch.svg'},
    { image: 'QGIS.svg'},
    { image: 'ray.svg'},
    { image: 'redis.svg'},
    { image: 'TensorFlow.svg'},
    { image: 'Streamlit.svg'},
    { image: 'PostGis.svg'},
    { image: 'Google Apps.svg'},
    { image: 'Scikit_learn.svg'},
    { image: 'Docker.svg', },
    { image: 'Folium.svg', },
    { image: 'Apache-Superset.svg'},
    { image: 'FastAPI.svg'},
    { image: 'Github-Action.svg'},
    { image: 'Neo4j.svg'},
    { image: 'google-cloud-platform.svg'},
    { image: 'Poll.svg'},
    { image: 'circle.svg'},
    { image: 'cube.svg'},
    { image: 'Angular.svg'},
    { image: 'Mysql.svg'},
    { image: 'Traingle-logo.svg'},
    { image: 'github.svg'},
    { image: 'FastAPI.svg'},
    { image: 'Java.svg'},
    { image: 'hotel.svg' }
];

}
