import { Row, Col } from 'antd';
import LeftSide from "./Left";
import RightSide from "./Right";
import {FAB} from '../Component';
import {store} from '../Config';
import {Provider} from "react-redux";
import './App.scss';

const App = () => {
    return(
        <Provider store={store}>
                <Row id="containerApp">
                    <Col span={24}>
                        <Row>
                            <Col span={12} className="left">
                                <LeftSide />
                            </Col>
                            <Col span={12} className="right">
                                <RightSide />
                                <FAB />
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </Provider>
    )
};

export default App;
