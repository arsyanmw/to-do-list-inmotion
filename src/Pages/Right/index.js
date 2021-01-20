import { Row, Col, Avatar, Button, Tag } from 'antd';
import {CheckboxCustom} from '../../Component';
import {AddCircleOutline, MoreHoriz} from '@material-ui/icons';
import './right.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersProjects} from "../../Config/redux/action";

const RightSide = () => {
    const {users} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersProjects());
    }, [dispatch])

    return(
        <Row justify={'center'} className="contentWrapperRight">
            <Col span={19}>
                <Row justify={'space-between'} id="header">
                    <Col span={18} className="header">
                        <h2>Cyber Punk</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, plis jgn error RAM gw ga kuat!. .</p>
                    </Col>

                    <Col span={5} className="userGroup">
                        <Row justify={'space-between'}>
                            <Col span={15} className="userList">
                                <Avatar.Group maxCount={3}>
                                    <Avatar src={"data:image/jpeg;base64,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"} />
                                    <Avatar src={"data:image/jpeg;base64,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"} />
                                    <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-sgzLabgDdKzy9d-LJRedUIAtMg1vx-2Nw&usqp=CAU"} />
                                </Avatar.Group>
                            </Col>

                            <Col span={7} className="addUser">
                                <Button icon={<AddCircleOutline />} className="addBtnUser" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row id="todoToday">
                    <Col span={24}>
                        <Row justify={'space-between'} id="headerTodo">
                            <Col span={22} className="headerText">
                                <p>Today</p>
                            </Col>
                            <Col span={2} className="optionTodo">
                                <Button><MoreHoriz /></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} className="listTodo">
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Bismillah headshot!'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row id="upcoming">
                    <Col span={24}>
                        <Row justify={'space-between'} id="headerUpcoming">
                            <Col span={22} className="headerText">
                                <p>Upcoming</p>
                            </Col>
                            <Col span={2} className="optionUpcoming">
                                <Button><MoreHoriz /></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} className="listTodo">
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Daripada ngoding mending main genshin'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={20}>
                                <CheckboxCustom label={'Create inital page for homepage'} />
                            </Col>
                            <Col span={4}>
                                <Tag color={'#E0F5F4'} style={{color: 'red', borderRadius: 20, fontWeight: 500, width: '100%', textAlign: 'center'}}>Waiting</Tag>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default RightSide;
