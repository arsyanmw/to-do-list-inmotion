import {Row, Col, Badge} from 'antd';
import {useParams} from 'react-router-dom';
import './projectThumb.scss';

const ProjectThumb = ({title, img, notif, path}) => {
    let {id} = useParams();

    //getPath
    const getPath = path === "/"+id;

    const str = title.split(' ');
    const initial = str.map(i => i.charAt(0).toUpperCase());

    return(
        <Row justify={'center'}>
            <Col span={24} className="cardThumb">
                <div className={getPath ? "outline active" : "outline"}>
                    {notif ?
                        !getPath ? (
                            <Badge status={"default"} style={{transform: 'scale(1.4)'}}>
                                <div className="card" style={{backgroundImage: `url(${img})`}}>
                                    {initial}
                                </div>
                            </Badge>
                        ) : (
                            <div className="card" style={{backgroundImage: `url(${img})`}}>
                                {initial}
                            </div>
                        ) : (
                            <div className="card" style={{backgroundImage: `url(${img})`}}>
                                {initial}
                            </div>
                        )}
                </div>
            </Col>

            <Col span={24} className="textThumb">
                {title}
            </Col>
        </Row>
    )
}

export default ProjectThumb;
