import { Row, Col, Badge } from 'antd';
import './projectThumb.scss';

const ProjectThumb = ({title, img, notif}) => {
    return(
        <Row justify={'center'}>
            <Col span={24} className="cardThumb">
                {/*<div className="outline">*/}
                {notif ? (
                    <Badge status={"default"} style={{transform: 'scale(1.4)'}}>
                        <div className="card" style={{backgroundImage: `url(${img})`}}>
                            GH
                        </div>
                    </Badge>
                ) : (
                    <div className="card" style={{backgroundImage: `url(${img})`}}>
                        GH
                    </div>
                )}
                {/*</div>*/}
            </Col>
            <Col span={24} className="textThumb">
                {title}
            </Col>
        </Row>
    )
}

export default ProjectThumb;
