import {
    Row,
    Col
} from 'antd';
import {Search} from '@material-ui/icons';
import './inputCustom.scss'

const InputCustom = () => {
    return(
        <Row className="inpWrapper">
            <Col span={2} align={'middle'} className="iconSearch">
                <Search />
            </Col>
            <Col span={21}>
                <input type="text" placeholder={'Search Task or Project...'} className="inpSearch" />
            </Col>
        </Row>
    )
}

export default InputCustom;
