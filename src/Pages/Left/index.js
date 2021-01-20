import {useEffect, useState} from 'react';
import { Row, Col, Button } from 'antd';
import {Sort} from "@material-ui/icons";
import {useSelector, useDispatch} from 'react-redux';
import {getDataProjects} from "../../Config/redux/action";
import {InputCustom, ProjectThumb, Loader} from "../../Component";
import './left.scss';

const LeftSide = () => {
    const {projectsThumb} = useSelector(state => state.projectsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataProjects());
    }, [dispatch])

    return(
        <Row>
            <Col span={24}>
                <Button icon={<Sort />} className="btnTop" />
                <Row justify={'center'} align={'middle'} className="contentWrapperLeft">
                    <Col span={15}>
                        <Row>
                            <Col span={24} className="headerText">
                                <h1>Hi Samantha</h1>
                                <p>Welcome back to the workspace, we missed You!</p>
                            </Col>

                            <Col span={24} className="inputSearch">
                                <InputCustom />
                            </Col>

                            <Col span={24} className="galleryProject">
                                <h2>Projects </h2> ({projectsThumb.count})

                                <Row gutter={[16, 20]} style={{marginTop: '5vh'}}>
                                    {projectsThumb.projects && projectsThumb.projects.map((v) => (
                                        <Col span={8} key={v.project_id}>
                                            <ProjectThumb title={v.name} img={v.img} />
                                        </Col>
                                    ))}
                                    <Col span={8}>
                                        <ProjectThumb />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default LeftSide;