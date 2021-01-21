import {Row, Col} from 'antd';
import './moreProjectThumb.scss'

const MoreProjectThumb = ({label}) => {
    return(
        <Row>
            <Col span={24} className="cardMoreThumb">
                <div className="cardMore">
                    {label}+
                </div>
            </Col>
        </Row>
    )
}

export default MoreProjectThumb;
