import {useEffect, useState} from 'react';
import {Row, Col, Button} from 'antd';
import {Sort} from "@material-ui/icons";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {getDataProjects} from "../../Config/redux/action";
import {InputCustom, ProjectThumb, MoreProjectThumb} from "../../Component";
import './left.scss';

const LeftSide = () => {
    const [searchType, setSearchType] = useState(" ");
    const [searchResult, setSearchResult] = useState([]);
    const {projectsThumb} = useSelector(state => state.projectsReducer);
    const dispatch = useDispatch();

    //getAPI
    useEffect(() => {
        dispatch(getDataProjects());

        setTimeout(() => {
            setSearchType("")
        }, 1000)

    }, [dispatch]);

    useEffect(() => {
        const result = projectsThumb.projects && projectsThumb.projects.map(v => v.name).filter(proj => proj.toString().toLowerCase().includes(searchType));
        setSearchResult(result);
    }, [searchType]);

    // Count total project
    const moreProject = parseInt(projectsThumb.count) - parseInt(projectsThumb.projects && projectsThumb.projects.length);

    const handleSearch = (e) => {
        setSearchType(e);
    }

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
                                <InputCustom value={searchType} onChange={(e) => handleSearch(e.target.value)}/>
                            </Col>

                            <Col span={24} className="galleryProject">
                                <h2>Projects </h2> ({projectsThumb.count})

                                <Row gutter={[16, 20]} style={{marginTop: '5vh'}}>
                                    {searchResult && searchResult.map(item =>
                                        projectsThumb.projects && projectsThumb.projects.map((v) =>
                                            v.name === item ? (
                                                <Col span={8} key={v.project_id}>
                                                    <Link to={v.path}>
                                                        <ProjectThumb
                                                            title={v.name}
                                                            img={v.img}
                                                            path={v.path}
                                                            notif={v.has_notification}
                                                        />
                                                    </Link>
                                                </Col>
                                            ) : null
                                        ))}

                                    <Col span={8}>
                                        <MoreProjectThumb label={moreProject} />
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
