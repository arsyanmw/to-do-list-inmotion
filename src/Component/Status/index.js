import {Tag} from 'antd';

const Status = ({type}) => {

    if (type === "In Progress") {
        return (
            <Tag color={'#E3EFFD'}
                 style={{
                     color: 'blue',
                     borderRadius: 20,
                     fontWeight: 500,
                     width: '100%',
                     textAlign: 'center'
                 }}>
                {type}
            </Tag>
        )
    } else if (type === "Waiting") {
        return (
            <Tag color={'#ECEEF0'}
                 style={{
                     color: 'red',
                     borderRadius: 20,
                     fontWeight: 500,
                     width: '100%',
                     textAlign: 'center'
                 }}>
                {type}
            </Tag>
        )
    } else if (type === "In Review") {
        return (
            <Tag color={'#FDEEE8'}
                 style={{
                     color: 'orange',
                     borderRadius: 20,
                     fontWeight: 500,
                     width: '100%',
                     textAlign: 'center'
                 }}>
                {type}
            </Tag>
        )
    } else if (type === "Approved") {
        return (
            <Tag color={'#E0F5F4'}
                 style={{
                     color: '#4FC2C2',
                     borderRadius: 20,
                     fontWeight: 500,
                     width: '100%',
                     textAlign: 'center'
                 }}>
                {type}
            </Tag>
        )
    }

}

export default Status;
