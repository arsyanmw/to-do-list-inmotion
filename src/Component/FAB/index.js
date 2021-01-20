import {Row, Col} from 'antd';
import {Add} from '@material-ui/icons';
import './fab.scss'

const FAB = () => {
    return(
        <Row justify={'end'}>
            <Col span={2} className="fabWrapper">
                <button className="fab"><Add/></button>
            </Col>
        </Row>
    )
}

export default FAB;
