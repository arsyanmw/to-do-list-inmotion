import {Row, Col} from 'antd';
import LeftSide from "../Left";
import RightSide from "../Right";
import './base.scss';
import {useEffect, useState} from "react";
import {getDataProjects, getUsers} from "../../Config/redux/action";
import {Loader, FAB} from '../../Component'
import {useDispatch} from "react-redux";

const Base = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getDataProjects());
        setIsLoading(false);
    }, [dispatch])

    return(
        isLoading ? (
            <Loader />
        ) : (
            <Row id="containerApp">
                <Col span={24}>
                    <Row>
                        <Col xs={24} lg={12} className="left">
                            <LeftSide/>
                        </Col>
                        <Col xs={24} lg={12} className="right">
                            <RightSide/>
                            <FAB/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    )
}

export default Base;
