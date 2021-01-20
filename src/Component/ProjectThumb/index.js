import {
    Row,
    Col
} from 'antd';
import './projectThumb.scss';

const ProjectThumb = ({title, img}) => {
    return(
        <Row justify={'center'}>
            <Col span={24} className="cardThumb">
                <div className="outline">
                    <div className="card" style={{backgroundImage: `url(${img})`}}>
                        GH
                    </div>
                </div>
            </Col>
            <Col span={24} className="textThumb">
                {title}
            </Col>
        </Row>
    )
}

export default ProjectThumb;
