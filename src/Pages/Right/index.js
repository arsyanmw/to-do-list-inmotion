import {useEffect} from "react";
import {Row, Col, Avatar, Button, Dropdown, Menu} from 'antd';
import {
    AddCircleOutline,
    MoreHoriz,
    CheckCircle,
    RadioButtonUnchecked
} from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Status} from '../../Component';
import {getUsers, getDataProjects, getTodo} from "../../Config/redux/action";
import './right.scss';

const RightSide = () => {
    let {id} = useParams();
    const {users} = useSelector(state => state.usersReducer);
    const {projectsThumb} = useSelector(state => state.projectsReducer);
    const {todo} = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getDataProjects());
        dispatch(getTodo());
    }, [dispatch]);

    //Selector
    const name = projectsThumb.projects && projectsThumb.projects.map(v => v.path === '/'+id ? v.name : null );
    const desc = projectsThumb.projects && projectsThumb.projects.map(v => v.path === '/'+id ? v.desc : null);

    //getDate
    const today = new Date().toISOString().slice(0,10);

    const menuAvatar = (
        <Menu>
            {users.user && users.user.map(v => (
                <Menu.Item key={v.id}>
                    <Row>
                        <Col span={5}>
                            <Avatar key={v.id} src={v.img} />
                        </Col>
                        <Col span={18}>
                            {v.name}
                        </Col>
                    </Row>
                </Menu.Item>
            ))}
        </Menu>
    );

    const menuTodo = (
        <Menu style={{borderRadius: 10}}>
            <Menu.Item>
                Select all
            </Menu.Item>
        </Menu>
    )

    return(
        <Row justify={'center'} className="contentWrapperRight">
            <Col span={19}>
                <Row justify={'space-between'} id="header">
                    <Col span={18} className="header">
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </Col>

                    <Col span={5} className="userGroup">
                        <Row justify={'space-between'}>
                            <Col span={15} className="userList">
                                <Dropdown overlay={menuAvatar}>
                                    <Avatar.Group maxCount={3}>
                                        {users.user && users.user.map(v => (
                                            <Avatar key={v.id} src={v.img} />
                                        ))}
                                    </Avatar.Group>
                                </Dropdown>
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
                                <Dropdown overlay={menuTodo}>
                                    <Button><MoreHoriz /></Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24} className="listTodo">
                        {todo.to_do && todo.to_do.map(v => v.path === id ?
                            v.date === today ?
                                (
                                    <Row justify={'space-between'} align={'middle'} key={v.id}>
                                        <Col span={2}>
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle />}
                                                style={{color: '#38D9D9'}}
                                                checked={v.isChecked}
                                            />
                                        </Col>
                                        <Col span={18}>
                                            {v.desc}
                                        </Col>
                                        <Col span={4}>
                                            <Status type={v.status} />
                                        </Col>
                                    </Row>
                                ) : null
                            : null)}
                    </Col>
                </Row>

                <Row id="upcoming">
                    <Col span={24}>
                        <Row justify={'space-between'} id="headerUpcoming">
                            <Col span={22} className="headerText">
                                <p>Upcoming</p>
                            </Col>
                            <Col span={2} className="optionUpcoming">
                                <Dropdown overlay={menuTodo}>
                                    <Button><MoreHoriz /></Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24} className="listTodo">
                        {todo.to_do && todo.to_do.map(v => v.path === id ?
                            v.date > today ?
                                (
                                    <Row justify={'space-between'} align={'middle'} key={v.id}>
                                        <Col span={2}>
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle />}
                                                style={{color: '#38D9D9'}}
                                                checked={v.isChecked}
                                            />
                                        </Col>
                                        <Col span={18}>
                                            {v.desc}
                                        </Col>
                                        <Col span={4}>
                                            <Status type={v.status} />
                                        </Col>
                                    </Row>
                                ) : null
                            : null)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default RightSide;
