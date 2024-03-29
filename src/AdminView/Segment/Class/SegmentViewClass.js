
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import {Segment } from 'semantic-ui-react'
import ButtonEdit from './ButtonEditClass'
import ButtonDelete from './ButtonDeleteClass'

const data = [
    {
        key: '1',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '30/09/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    },
    {
        key: '2',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '28/09/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    }, {
        key: '3',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '01/10/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    }, {
        key: '4',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '30/09/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    },
    {
        key: '5',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '30/09/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    }, {
        key: '6',
        name: 'SE1319',
        course: 'IELTS 1',
        starteddate: '25/09/2019',
        finisheddate: '30/09/2019',
        slot: '3',
        totalslot: '30',
        minstudent: '15',
        maxstudent: '25',
        currentstudent: '20',
    },
];



export default class SegmentViewAccount extends React.Component {

    state = {
        searchText: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };


    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Course',
                dataIndex: 'course',
            },
            {
                title: 'Started Date',
                dataIndex: 'starteddate',
                key: 'starteddate',
                sorter: (a, b) => a.starteddate.length - b.starteddate.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('starteddate'),
            },
            {
                title: 'Finished Date',
                dataIndex: 'finisheddate',
                key: 'finisheddate',
                sorter: (a, b) => a.finisheddate.length - b.finisheddate.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('finisheddate'),
            },
            {
                title: 'Slot',
                dataIndex: 'slot',
                key: 'slot',
                ...this.getColumnSearchProps('slot'),
            },
            {
                title: 'Total Slot',
                dataIndex: 'totalslot',
                key: 'totalslot',
                
            },
            {
                title: 'Min Student',
                dataIndex: 'minstudent',
                key: 'minstudent',
                
            },
            {
                title: 'Max Student',
                dataIndex: 'maxstudent',
                key: 'maxstudent',
                
            },
            {
                title: 'Current Student',
                dataIndex: 'currentstudent',
                key: 'currentstudent',
               
            },
            {
                title: 'Action',
                dataIndex: 'action',
                render: () =>  <div>
                    <ButtonEdit></ButtonEdit>
                    <ButtonDelete></ButtonDelete>
                </div>
            },
        ];
        return <Segment><Table columns={columns} dataSource={data} /></Segment> ;
    }
}