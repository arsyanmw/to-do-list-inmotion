import { Row, Col } from 'antd';
import LeftSide from "../Left";
import RightSide from "../Right";
import './base.scss';
import {useEffect, useState} from "react";
import {getDataProjects, getUsersProjects} from "../../Config/redux/action";
import {Loader} from '../../Component'
import {useDispatch} from "react-redux";

const Base = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(getUsersProjects());
            dispatch(getDataProjects());
        }, 5000)

        setIsLoading(false);
    }, [dispatch])

    return(
        isLoading ? (
            <Loader type={1} />
            ) : (
            <Row id="containerApp">
                <Col span={24}>
                    <Row>
                        <Col xs={24} lg={12} className="left">
                            <LeftSide/>
                        </Col>
                        <Col xs={24} lg={12} className="right">
                            <RightSide/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    )
}

export default Base;
