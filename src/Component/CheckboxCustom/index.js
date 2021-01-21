import {Row, Col} from 'antd';
import Checkbox from '@material-ui/core/Checkbox';
import {CheckCircle, RadioButtonUnchecked} from '@material-ui/icons';

const CheckboxCustom = ({label, check, onChange}) => {
    return(
        <Row>
            <Col span={24} style={{fontWeight: 500}}>
                <Checkbox
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                    style={{color: '#38D9D9'}}
                    checked={check}
                    onChange={onChange}
                />
                {label}
            </Col>
        </Row>

    )
}

export default CheckboxCustom;
